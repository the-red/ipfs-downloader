// @ts-check

/**
 * @type { import("node-fetch").default }
 */
const fetch = require('node-fetch').default
const { fetchMoralisNft, getIpfsUrl } = require('./util')
const env = require('../.env')

const main = async () => {
  /**
   * @type { import("./types").MoralisNft[] }
   */
  for (const address of env.walletAddresses) {
    const response = await fetchMoralisNft(fetch, address, env.tokenAddress, env.moralisApiKey)
    if (!response.ok) {
      console.log(response.text())
      continue
    }
    const nfts = (await response.json()).result
    const tokenIds = nfts.map((_) => _.token_id)
    for (const tokenId of tokenIds) {
      const url = getIpfsUrl(env.ipfsDirectoryCid, tokenId)
      console.log(address, tokenId.padStart(4), url)
    }
  }
  // await new Promise((resolve) => setTimeout(resolve, 55))
}

main()
