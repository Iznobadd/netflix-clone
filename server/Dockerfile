FROM node:lts

RUN mkdir app
WORKDIR /app

COPY .env ./
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY src src

CMD npm run start
