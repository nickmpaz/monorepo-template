FROM node:16

ARG DATABASE_HOST
ENV DATABASE_HOST ${DATABASE_HOST}
ARG DATABASE_PORT
ENV DATABASE_PORT ${DATABASE_PORT}

WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn workspace common build
RUN yarn workspace backend build
CMD scripts/wait-for-it.sh ${DATABASE_HOST}:${DATABASE_PORT} -- yarn workspace backend start:prod
