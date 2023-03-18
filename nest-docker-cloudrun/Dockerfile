FROM node:16 as build

RUN npm i -g @nestjs/cli

WORKDIR /src

COPY package.json /src
COPY yarn.lock /src
COPY tsconfig.json /src

RUN yarn install
EXPOSE 3000
ENV PORT 3000

# COPY . /src

RUN yarn build

CMD [ "yarn", "start:dev" ]

# FROM node:16-alpine
# WORKDIR /src
# COPY package.json . 
# # dependenciesのみをインストール
# RUN npm install --only=production
# EXPOSE 3000
# ENV PORT 3000
# COPY --from=build /src/dist ./dist
# CMD npm run start:prod