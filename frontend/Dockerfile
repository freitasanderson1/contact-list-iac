FROM node:20.12-alpine3.18

WORKDIR /app

COPY package*.json ./

CMD ["npm", "i"]

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]