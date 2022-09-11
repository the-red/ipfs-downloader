// @ts-check
const { getIpfsUrls } = require('../src/util')

it('getUrls', () => {
  expect(
    getIpfsUrls('abcdefg', [
      {
        token_address: '',
        token_id: '128',
        owner_of: '',
        block_number: '',
        block_number_minted: '',
        token_hash: '',
        amount: '',
        contract_type: '',
        name: '',
        symbol: '',
        token_uri: '',
        metadata: '',
        last_token_uri_sync: '',
        last_metadata_sync: '',
      },
      {
        token_address: '',
        token_id: '256',
        owner_of: '',
        block_number: '',
        block_number_minted: '',
        token_hash: '',
        amount: '',
        contract_type: '',
        name: '',
        symbol: '',
        token_uri: '',
        metadata: '',
        last_token_uri_sync: '',
        last_metadata_sync: '',
      },
    ])
  ).toStrictEqual([`https://ipfs.io/ipfs/abcdefg/128.png`, `https://ipfs.io/ipfs/abcdefg/256.png`])
})
