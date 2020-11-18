FROM node:15

# Create app directory
WORKDIR /home/justalk/portfolio

COPY package*.json ./

USER justalk

RUN npm install

COPY --chown=justalk:justalk . .

EXPOSE 8080
RUN npm run server
