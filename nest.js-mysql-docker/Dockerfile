FROM node:13.7

RUN npm i -g @nestjs/cli

WORKDIR /api-server
COPY package*.json /api-server/

RUN yarn run install
CMD [ "yarn","run", "start:dev"]