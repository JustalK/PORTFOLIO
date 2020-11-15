FROM node:15

# Create app directory
WORKDIR /home/justalk/portfolio

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

COPY scripts/wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh
