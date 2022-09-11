import Moralis from 'moralis'
import { EvmChain } from '@moralisweb3/evm-utils'
import env from '../.env.json'

const main = async () => {
  const chain = EvmChain.ETHEREUM

  await Moralis.start({
    apiKey: env.moralisApiKey,
  })

  const promises: ReturnType<typeof Moralis.EvmApi.nft.getWalletNFTs>[] = []
  for (const address of env.walletAddresses) {
    promises.push(
      Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
        tokenAddresses: [env.tokenAddress],
      })
    )
  }
  const results = await Promise.all(promises)

  return results.flatMap((res) => res.result.map((nft) => nft.format().tokenId))
}

main().then((_) => console.log(_))
