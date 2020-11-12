FROM node:15

# Create app directory
WORKDIR /home/justalk/portfolio

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
RUN npm run seed
RUN npm run server-docker
