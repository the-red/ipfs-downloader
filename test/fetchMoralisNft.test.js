// @ts-check
const fetch = require('node-fetch').default
const { fetchMoralisNft } = require('../src/util')
const env = require('../.env.json')

it('getUrls', async () => {
  const response = await fetchMoralisNft(
    fetch,
    '0x0f6E2DC3BDa93Bf4894De499072eB65dc80Ab6Fa',
    '0xc87537b7ae7311766ac789213d78e0a019e3d69e',
    env.moralisApiKey
  ).then((_) => _.json())
  expect(response).toStrictEqual({
    cursor: null,
    page: 1,
    page_size: 100,
    result: [
      {
        amount: '1',
        block_number: '15440409',
        block_number_minted: '15421057',
        contract_type: 'ERC721',
        last_metadata_sync: '2022-08-30T12:05:47.282Z',
        last_token_uri_sync: '2022-08-30T12:05:30.941Z',
        metadata:
          '{"name":"NounSNUG #4488","description":"NounSNUG by Tigerclove","image":"ipfs://QmQeBRV6tRnqQRsNuHDLx7jtHFBDeWEJymGYXZHVwUK2Bz/4488.png","edition":4488,"attributes":[{"trait_type":"Background","value":"Dark Grey"},{"trait_type":"Body","value":"SNUG"},{"trait_type":"Body Charm","value":"Scarf"},{"trait_type":"Face","value":"RED"},{"trait_type":"Face Charm","value":"Nice"},{"trait_type":"Head","value":"HG Full Black"},{"trait_type":"Glasses","value":"Full Black"}]}',
        name: 'NounSNUG',
        owner_of: '0x0f6e2dc3bda93bf4894de499072eb65dc80ab6fa',
        symbol: 'NSNUG',
        token_address: '0xc87537b7ae7311766ac789213d78e0a019e3d69e',
        token_hash: '5024135903c4905782b4eac60476d94f',
        token_id: '4488',
        token_uri: 'https://ipfs.moralis.io:2053/ipfs/QmRVg67bEsVQi78QvmH9ptCvQBSYkce8geZoEZGL86r3vQ/4488.json',
      },
      {
        amount: '1',
        block_number: '15418514',
        block_number_minted: '15415265',
        contract_type: 'ERC721',
        last_metadata_sync: '2022-08-30T12:05:47.370Z',
        last_token_uri_sync: '2022-08-30T12:05:30.037Z',
        metadata:
          '{"name":"NounSNUG #2441","description":"NounSNUG by Tigerclove","image":"ipfs://QmQeBRV6tRnqQRsNuHDLx7jtHFBDeWEJymGYXZHVwUK2Bz/2441.png","edition":2441,"attributes":[{"trait_type":"Background","value":"Beige"},{"trait_type":"Body","value":"SNUG"},{"trait_type":"Body Charm","value":"Basic Charm"},{"trait_type":"Face","value":"Yellow"},{"trait_type":"Face Charm","value":"Overbite"},{"trait_type":"Head","value":"HG Light Blue"},{"trait_type":"Glasses","value":"Light Blue"}]}',
        name: 'NounSNUG',
        owner_of: '0x0f6e2dc3bda93bf4894de499072eb65dc80ab6fa',
        symbol: 'NSNUG',
        token_address: '0xc87537b7ae7311766ac789213d78e0a019e3d69e',
        token_hash: '6b0fc88d311f42c9bc3b8b5147ddea4e',
        token_id: '2441',
        token_uri: 'https://ipfs.moralis.io:2053/ipfs/QmRVg67bEsVQi78QvmH9ptCvQBSYkce8geZoEZGL86r3vQ/2441.json',
      },
      {
        amount: '1',
        block_number: '15415559',
        block_number_minted: '15415382',
        contract_type: 'ERC721',
        last_metadata_sync: '2022-08-30T12:05:33.853Z',
        last_token_uri_sync: '2022-08-30T12:05:28.762Z',
        metadata:
          '{"name":"NounSNUG #3057","description":"NounSNUG by Tigerclove","image":"ipfs://QmQeBRV6tRnqQRsNuHDLx7jtHFBDeWEJymGYXZHVwUK2Bz/3057.png","edition":3057,"attributes":[{"trait_type":"Background","value":"Grey"},{"trait_type":"Body","value":"Snowman"},{"trait_type":"Body Charm","value":"Basic Charm"},{"trait_type":"Face","value":"Zombie Phase2"},{"trait_type":"Face Charm","value":"Gas Mask Smoke"},{"trait_type":"Head","value":"Cowboy Brown"},{"trait_type":"Glasses","value":"Smoke"}]}',
        name: 'NounSNUG',
        owner_of: '0x0f6e2dc3bda93bf4894de499072eb65dc80ab6fa',
        symbol: 'NSNUG',
        token_address: '0xc87537b7ae7311766ac789213d78e0a019e3d69e',
        token_hash: '8b66c5b65fd944f9135274521c142b75',
        token_id: '3057',
        token_uri: 'https://ipfs.moralis.io:2053/ipfs/QmRVg67bEsVQi78QvmH9ptCvQBSYkce8geZoEZGL86r3vQ/3057.json',
      },
      {
        amount: '1',
        block_number: '15415318',
        block_number_minted: '15415290',
        contract_type: 'ERC721',
        last_metadata_sync: '2022-08-30T12:05:46.920Z',
        last_token_uri_sync: '2022-08-30T12:05:30.317Z',
        metadata:
          '{"name":"NounSNUG #2688","description":"NounSNUG by Tigerclove","image":"ipfs://QmQeBRV6tRnqQRsNuHDLx7jtHFBDeWEJymGYXZHVwUK2Bz/2688.png","edition":2688,"attributes":[{"trait_type":"Background","value":"Grey"},{"trait_type":"Body","value":"SNUG"},{"trait_type":"Body Charm","value":"Cow"},{"trait_type":"Face","value":"Grey"},{"trait_type":"Face Charm","value":"Basic Face Charm"},{"trait_type":"Head","value":"Cowboy Brown"},{"trait_type":"Glasses","value":"Purple"}]}',
        name: 'NounSNUG',
        owner_of: '0x0f6e2dc3bda93bf4894de499072eb65dc80ab6fa',
        symbol: 'NSNUG',
        token_address: '0xc87537b7ae7311766ac789213d78e0a019e3d69e',
        token_hash: '655e23ff77f7997e5d775ba8202ded39',
        token_id: '2688',
        token_uri: 'https://ipfs.moralis.io:2053/ipfs/QmRVg67bEsVQi78QvmH9ptCvQBSYkce8geZoEZGL86r3vQ/2688.json',
      },
    ],
    status: 'SYNCED',
    total: 4,
  })
})
