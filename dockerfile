FROM node:18.7-alpine

RUN apk update && apk add --no-cache build-base \ 
  bash \
  wget 
RUN npm install -g npm@8.16.0

WORKDIR /app

COPY . .

RUN npm install