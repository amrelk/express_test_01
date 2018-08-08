FROM node:alpine

# create app directory
WORKDIR /usr/src/app

# copy package.json and package-lock.json
COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 80

CMD [ "node", "/bin/www"]