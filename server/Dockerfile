FROM node:10

WORKDIR /usr/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn

COPY . .

EXPOSE 7500
EXPOSE 443

CMD ["yarn", "start"]