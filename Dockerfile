FROM node:14.0.0-alpine3.10
WORKDIR /code

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install

COPY webpack.config.js ./webpack.config.js
COPY build-utils/ ./build-utils/
COPY src/ ./src

RUN npm run build

ENTRYPOINT []
CMD ["node", "/code/src/server/server.js"]
