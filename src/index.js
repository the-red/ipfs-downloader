// @ts-check

/**
 * @type { import("node-fetch").default }
 */
const fetch = require('node-fetch').default
const { fetchMoralisNft, getUrls } = require('./util')
const env = require('../.env.json')

const main = async () => {
  /**
   * @type { import("./types").Promises }
   */
  const promises = []
  for (const address of env.walletAddresses) {
    promises.push(
      fetchMoralisNft(fetch, address, env.tokenAddress, env.moralisApiKey).then((response) => response.json())
    )
  }
  const nfts = (await Promise.all(promises)).flatMap((_) => _.result)
  return getUrls(env.ipfsDirectoryCid, nfts)
}

main().then((_) => console.log(_))
