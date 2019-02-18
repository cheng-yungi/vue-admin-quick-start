FROM node:8.11.3
MAINTAINER eric
RUN echo "Asia/Taipei" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN yarn install
ENV NODE_ENV=cloud
COPY . /usr/src/app
RUN yarn build--cgpay

CMD [ "ls" ]
CMD [ "serve", "-l ","3333"]