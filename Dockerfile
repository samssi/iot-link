FROM arm32v7/node:8.9.1

RUN mkdir -p /iotlink/app
RUN mkdir -p /iotlink/config
WORKDIR /iotlink/app

COPY package.json /iotlink/app
RUN npm install

COPY . /iotlink/app

ENV HOME /iotlink/app

CMD ["npm", "start"]
