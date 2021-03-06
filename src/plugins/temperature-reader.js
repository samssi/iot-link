const logger = require("../logging/bunyan-logger").logger;
const sensorClient = require("../http/axios-client").sensorClient;

exports.execute = () => {
    readTemperature();
}

const readTemperature = () => {
    sensorClient.get("/api/temperature")
      .then((response) => console.log(response.data))
      .catch((error) => logger.error(error));
}