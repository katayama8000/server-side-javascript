### Nest.js-Prisma-Dockerでアプリを作るときのスターターキット

#### 都度改善していく

```bash
yarn create next-app --example https://github.com/katayama8000/Nest.js-prisma-Docker-BASIC
```

## Docker

```bash
# add docker-compose.yml file
# start db
$ docker compose up -d
# reset db
$ docker compose rm -s -f -v
```

## prisma
##### migrate
```bash
npx prisma migrate dev
```
##### DBをブラウザで見る
```bash
npx prisma studio
```
##### model構造を見て型を自動生成
```bash
npx prisma generate
```

## Nest.js
##### 各ファイルをコマンドラインから生成
```
nest g module user
nest g controller user --no-spec
nest g service user --no-spec
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

