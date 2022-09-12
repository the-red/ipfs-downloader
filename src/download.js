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

const download = async (tokenId) => {
  const res = await fetch(tokenId)
  if (!res.ok) {
    console.log('retrying...')
    await new Promise((resolve) => setTimeout(resolve, 10000))
    return download(tokenId)
  }
  return res.buffer()
}

const main = async () => {
  for (const tokenId of env.tokenIds.reverse()) {
    const fileName = `./data/${tokenId}.png`
    if (fs.existsSync(fileName)) {
      console.log(tokenId, 'exists!')
      continue
    }

    console.log(new Date().toLocaleString('ja-JP', { timeZone: env.timeZone }), tokenId, 'fetching...')
    const buffer = await download(getIpfsUrl(env.ipfsDirectoryCid, tokenId.toString()))
    fs.writeFileSync(fileName, buffer)
  }
}
main()
