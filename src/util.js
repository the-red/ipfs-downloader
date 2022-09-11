/**
 * @type { import("./types").FetchMoralisNft }
 */
const fetchMoralisNft = (fetch, address, tokenAddress, moralisApiKey) =>
  fetch(`https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&token_addresses=${tokenAddress}&limit=100`, {
    method: 'GET',
    headers: { 'Accept': 'application/json', 'X-API-Key': moralisApiKey },
  })
exports.fetchMoralisNft = fetchMoralisNft

/**
 * @type { import("./types").GetIpfsUrl }
 */
const getIpfsUrl = (ipfsDirectoryCid, tokenId) => {
  // const ipfsBaseUrl = `https://ipfs.io/ipfs`
  const ipfsBaseUrl = `https://cf-ipfs.com/ipfs`
  // const ipfsBaseUrl = `https://dweb.link/ipns`
  // const ipfsBaseUrl = `https://gateway.ipfs.io/ipns`
  const url = `${ipfsBaseUrl}/${ipfsDirectoryCid}/${tokenId}.png`
  return url
}
exports.getIpfsUrl = getIpfsUrl
