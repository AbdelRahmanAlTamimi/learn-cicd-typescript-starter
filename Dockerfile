FROM node:18-slim

WORKDIR /usr/src/app

COPY . .

RUN npm ci && npm run build


CMD ["node", "dist/main.js"]
