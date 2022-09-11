// @ts-check
const { getIpfsUrl } = require('../src/util')

it('getUrls', () => {
  expect(getIpfsUrl('abcdefg', '128')).toStrictEqual(`https://cf-ipfs.com/ipfs/abcdefg/128.png`)
})
