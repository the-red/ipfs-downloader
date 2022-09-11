function main() {
  // スプレッドシートからウォレットアドレス一覧を取得
  const sheet = SpreadsheetApp.getActiveSheet()
  const walletAddresses = sheet.getRange('C2:C').getValues().flat().filter(Boolean)

  const allNfts = []
  for (const address of walletAddresses) {
    const response = fetchMoralisNft(
      UrlFetchApp.fetch,
      address,
      PropertiesService.getScriptProperties().getProperty('TOKEN_ADDRESS'),
      PropertiesService.getScriptProperties().getProperty('MORALIS_API_KEY')
    )
    const nfts = JSON.parse(response.getContentText()).result
    allNfts.push(...nfts)

    console.log(address, nfts.map((_) => _.token_id).join())
    // NOTE: Rate limit exceeded の防止のために少しsleep
    Utilities.sleep(55)
  }
  const results = getUrls(PropertiesService.getScriptProperties().getProperty('IPFS_DIRECTORY_CID'), allNfts)
  console.log(results)
}

// NOTE: utilでexportsを使うためのおまじない
exports = {}
