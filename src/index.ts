import fetch from 'node-fetch'
import env from '../.env.json'

type MoralisNft = {
  token_address: string
  token_id: string
  owner_of: string
  block_number: string
  block_number_minted: string
  token_hash: string
  amount: string
  contract_type: string
  name: string
  symbol: string
  token_uri: string
  metadata: string
  last_token_uri_sync: string
  last_metadata_sync: string
}

const ipfsBaseUrl = `https://ipfs.io/ipfs/${env.ipfsDirectoryCid}`

const main = async () => {
  const promises: Promise<{ result: MoralisNft[] }>[] = []
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
  const tokenIds = results.flatMap((res) => res.result.map((_: any) => _.token_id))

  const urls = tokenIds.map((id) => `${ipfsBaseUrl}/${id}.png`)
  return urls
}

main().then((_) => console.log(_))
