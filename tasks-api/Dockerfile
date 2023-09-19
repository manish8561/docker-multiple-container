FROM node:18.17.1

ARG DEFAULT_PORT=3001

WORKDIR /app

COPY package.json .

RUN npm i 

COPY . .

RUN npm run build

ENV PORT $DEFAULT_PORT

# ENV MONGODB_HOST mongodb
# ENV MONGODB_USERNAME max
# ENV MONGODB_PASSWORD secret

EXPOSE $PORT

# CMD ["npm", "run", "start:dev"]
CMD ["npm", "start"]

