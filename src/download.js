// @ts-check

/**
 * @type { import("node-fetch").default }
 */
const fetch = require('node-fetch').default
/**
 * @type { import("fs") }
 */
const fs = require('fs')
const { getUrl } = require('./util')
const env = require('../.env')

const now = () => new Date().toLocaleString(env.locales, { timeZone: env.timeZone })

const download = async (tokenId) => {
  const res = await fetch(tokenId)
  if (!res.ok) {
    console.log(`[${res.status}]${res.statusText}`)
    process.stdout.write(`     `)
    await new Promise((resolve) => setTimeout(resolve, 10000))
    process.stdout.write(now())
    process.stdout.write(` retrying...`)
    return download(tokenId)
  }
  console.log('done!')
  return res.buffer()
}

const io = async (tokenId) => {
  fs.mkdirSync('./data', { recursive: true })
  const fileName = `./data/${tokenId}.png`
  if (fs.existsSync(fileName)) {
    console.log(tokenId, 'exists!')
    return
  }

  process.stdout.write(`${tokenId.toString().padStart(4)} `)
  process.stdout.write(now())
  process.stdout.write(` fetching...`)
  const url = getUrl(env, tokenId)
  const buffer = await download(url)
  fs.writeFileSync(fileName, buffer)
}

const main = async () => {
  if (Array.isArray(env.tokenIds)) {
    for (const tokenId of env.tokenIds) {
      await io(tokenId)
    }
  } else if (env.minTokenId && env.maxTokenId) {
    for (let tokenId = env.minTokenId; tokenId <= env.maxTokenId; tokenId++) {
      await io(tokenId)
    }
  }
}
main()
