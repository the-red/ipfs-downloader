// @ts-check

/**
 * @type { import("node-fetch").default }
 */
const fetch = require('node-fetch').default
const { fetchMoralisNft, getUrls } = require('./util')
const env = require('../.env.json')

const main = async () => {
  /**
   * @type { import("./types").MoralisNft[] }
   */
  const allNfts = []
  for (const address of env.walletAddresses) {
    const response = await fetchMoralisNft(fetch, address, env.tokenAddress, env.moralisApiKey)
    if (!response.ok) {
      console.log(response.text())
      continue
    }
    const nfts = (await response.json()).result
    allNfts.push(...nfts)

    console.log(address, nfts.map((_) => _.token_id).join())
    // await new Promise((resolve) => setTimeout(resolve, 100))
  }
  return getUrls(env.ipfsDirectoryCid, allNfts)
}

main().then((_) => console.log(_))
