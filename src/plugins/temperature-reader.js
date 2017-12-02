const logger = require("bunyan").createLogger({name: "iot-link-temperature-reader"});
const sensorClient = require("../http/axios-client").sensorClient;

exports.execute = () => {
    console.log("temp");
}

const readTemperature = () => {
    sensorClient.get("/api/temperature")
      .then((response) => console.log(response))
      .catch((error) => logger.error(error));
}