import type fetch from 'node-fetch'
import type { MoralisNft } from './types'

type Fetch = typeof fetch
export type FetchMoralisNft = (
  fetch: Fetch,
  address: string,
  tokenAddress: string,
  moralisApiKey: string
) => ReturnType<typeof fetch>

export type GetUrls = (ipfsDirectoryCid: string, nfts: MoralisNft[]) => string[]
