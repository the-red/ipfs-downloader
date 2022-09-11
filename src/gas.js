function main() {
  // スプレッドシートからウォレットアドレス一覧を取得
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const logSheet = ss.getSheetByName('スクリプト実行ログ')
  const tokenIds = logSheet.getRange('C2:C').getValues().flat().filter(Boolean)
  const property = PropertiesService.getScriptProperties()

  for (let i = 0; i < tokenIds.length; i++) {
    const row = i + 2
    const tokenId = tokenIds[i]

    if (Boolean(logSheet.getRange(`D${row}`).getValue())) {
      console.log(tokenId)
      continue
    }
    console.log(tokenId, 'fetching data...')

    const url = getIpfsUrl(property.getProperty('IPFS_DIRECTORY_CID'), tokenId)
    const res = UrlFetchApp.fetch(url)
    const blob = res.getBlob()

    const folder = DriveApp.getFolderById(property.getProperty('DRIVE_FOLDER_ID'))
    folder.createFile(blob)
    console.log('created!', url)
    logSheet.getRange(`D${row}`).setValue(new Date())
  }
}

function setTokenIds() {
  // スプレッドシートからウォレットアドレス一覧を取得
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const logSheet = ss.getSheetByName('スクリプト実行ログ')
  const formSheet = ss.getSheetByName('フォームの回答 1')
  const walletAddresses = formSheet.getRange('C2:C').getValues().flat().filter(Boolean)
  const property = PropertiesService.getScriptProperties()

  let row = 1
  for (const address of walletAddresses) {
    // NOTE: Rate limit exceeded の防止のために少しsleep
    Utilities.sleep(55)

    const response = fetchMoralisNft(
      UrlFetchApp.fetch,
      address,
      property.getProperty('TOKEN_ADDRESS'),
      property.getProperty('MORALIS_API_KEY')
    )

    const nfts = JSON.parse(response.getContentText()).result
    const tokenIds = nfts.map((_) => _.token_id)

    // TODO: 所有数の増減があったらどうするか要検討
    for (const tokenId of tokenIds) {
      row++
      logSheet.getRange(`A${row}`).setValue(address)
      logSheet.getRange(`B${row}`).setValue(tokenIds.length)
      logSheet.getRange(`C${row}`).setValue(tokenId)
      console.log(row, address, tokenId)
    }
  }
}

// NOTE: utilでexportsを使うためのおまじない
exports = {}
