// @ts-check

/**
 * @type { import("node-fetch").default }
 */
const fetch = require('node-fetch').default
const env = require('../.env.json')

const ipfsBaseUrl = `https://ipfs.io/ipfs/${env.ipfsDirectoryCid}`

const main = async () => {
  /**
   * @type { import("./types").Promises }
   */
  const promises = []
  for (const address of env.walletAddresses) {
    promises.push(
      fetch(
        `https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&token_addresses=${env.tokenAddress}&limit=100`,
        {
          method: 'GET',
          headers: { 'Accept': 'application/json', 'X-API-Key': env.moralisApiKey },
        }
      ).then((response) => response.json())
    )
  }
  const results = await Promise.all(promises)
  const tokenIds = results.flatMap((res) => res.result.map((_) => _.token_id))

  const urls = tokenIds.map((id) => `${ipfsBaseUrl}/${id}.png`)
  return urls
}

main().then((_) => console.log(_))
