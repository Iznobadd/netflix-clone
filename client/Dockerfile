FROM node:lts

RUN mkdir app

WORKDIR /app

COPY .env ./

COPY package*.json ./
COPY tsconfig.json ./
COPY tailwind.config.js ./

RUN npm install

COPY public public
COPY src src

CMD npm start