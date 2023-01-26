FROM node:18-alpine

# アプリケーションディレクトリを作成する
WORKDIR /backend

COPY package*.json ./

RUN npm ci

COPY --chown=node:node . .

USER node

EXPOSE 3000
