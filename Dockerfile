FROM node:16.13.1-alpine3.14

WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "start"]
