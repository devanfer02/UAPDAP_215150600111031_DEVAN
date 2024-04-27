FROM node:21-alpine

WORKDIR /web

COPY . .

RUN npm install

CMD ["npm", "start"]