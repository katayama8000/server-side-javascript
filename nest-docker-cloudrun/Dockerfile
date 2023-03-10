FROM node:16

RUN npm i -g @nestjs/cli

WORKDIR /src

COPY package.json /src
COPY yarn.lock /src

RUN yarn install

# COPY . /src

CMD [ "yarn", "start:dev" ]