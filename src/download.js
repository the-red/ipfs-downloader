// @ts-check

/**
 * @type { import("node-fetch").default }
 */
const fetch = require('node-fetch').default
/**
 * @type { import("fs") }
 */
const fs = require('fs')
const { getIpfsUrl } = require('./util')
const env = require('../.env.json')

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

const main = async () => {
  for (const tokenId of env.tokenIds.reverse()) {
    const fileName = `./data/${tokenId}.png`
    if (fs.existsSync(fileName)) {
      console.log(tokenId, 'exists!')
      continue
    }

    process.stdout.write(`${tokenId.toString().padStart(4)} `)
    process.stdout.write(now())
    process.stdout.write(` fetching...`)
    const buffer = await download(getIpfsUrl(env.ipfsDirectoryCid, tokenId.toString()))
    fs.writeFileSync(fileName, buffer)
  }
}
main()
