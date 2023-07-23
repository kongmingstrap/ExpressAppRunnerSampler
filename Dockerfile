FROM node:18.15.0-alpine3.17

WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "start"]
