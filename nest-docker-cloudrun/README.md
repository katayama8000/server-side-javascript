- [o] docker 化する
- [] Cloud Run にデプロイする

## docker 化する

- done

## Cloud Run にデプロイする

- gcloud にログイン
  - gcloud auth login
- アクティブアカウントを確認
  - gcloud auth list
- プロジェクトの確認
  - gcloud projects list
- サービスを確認
  - gcloud services list
- project を確認
- gcloud で紐づいているプロジェクトとアカウント一覧を確認
  - gcloud config configurations list
- gcloud アカウントとプロジェクトを切り替え
  - gcloud config configurations activate [name]
- gcloud に新しくプロジェクトを紐付ける

  - gcloud config configurations create [setting-name1]
  - gcloud config set account [your-email-address@gmail.com]
  - gcloud config set project [new-project-ID]

- https://qiita.com/massie_g/items/5a9ce514eaa7c460b5e3
- https://qiita.com/sonots/items/906798c408132e26b41c
- https://zenn.dev/taka_baya/articles/ef12fe9a043560

## cloud functions

- firestore のドキュメントの変更をトリガーにする
  - https://cloud.google.com/firestore/docs/extend-with-functions?hl=ja
