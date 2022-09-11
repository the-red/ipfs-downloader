import type fetch from 'node-fetch'

type Fetch = typeof fetch
export type FetchMoralisNft = (
  fetch: Fetch,
  address: string,
  tokenAddress: string,
  moralisApiKey: string
) => ReturnType<typeof fetch>

export type GetUrls = (ipfsDirectoryCid: string, nfts: MoralisNft[]) => string[]

export type MoralisNft = {
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
