import fetch from 'node-fetch'
import env from '../.env.json'

const main = async () => {
  const promises: Promise<any>[] = []
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
  return results.map((res) => res.result.map((_: any) => _.token_id))
}

main().then((_) => console.log(_))
