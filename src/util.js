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
 * @type { import("./types").GetIpfsUrls }
 */
const getIpfsUrls = (ipfsDirectoryCid, nfts) => {
  const ipfsBaseUrl = `https://ipfs.io/ipfs/${ipfsDirectoryCid}`
  const tokenIds = nfts.map((_) => _.token_id)
  const urls = tokenIds.map((id) => `${ipfsBaseUrl}/${id}.png`)
  return urls
}
exports.getIpfsUrls = getIpfsUrls
