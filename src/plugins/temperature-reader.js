const logger = require("../logging/bunyan-logger").logger;
const sensorClient = require("../http/axios-client").sensorClient;

exports.execute = () => {
    console.log("temp");
}

const readTemperature = () => {
    sensorClient.get("/api/temperature")
      .then((response) => console.log(response))
      .catch((error) => logger.error(error));
}