FROM node:21-apline

WORKDIR /web

COPY . .

RUN npm install

CMD ["npm", "start"]