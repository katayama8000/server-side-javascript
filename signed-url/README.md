- サービスアカウントの credential.json を作成
  - https://console.cloud.google.com/iam-admin/serviceaccounts/details/101008329520090596442?hl=ja&walkthrough_id=iam--create-service-account-keys&project=katayama-sandbox-639ef&supportedpurview=project
  - credential.json をダウンロードして、`signed-url`ディレクトリに配置
- backet とオブジェクトを作成

  - https://console.cloud.google.com/storage/browser/_details/example-bucket-katayama/giant.jpeg;tab=live_object?project=katayama-sandbox-639ef

- 署名付き URL を発行
  - `yarn dev`
  - console に表示された URL をブラウザで開く
