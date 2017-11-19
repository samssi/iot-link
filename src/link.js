const logger = require("bunyan").createLogger({name: "iot-link-link"});
const iotService = require("./services/iot-service");

const configJson = {
    deviceFunction: "colorLed",
    intervalInSeconds: 3
}

const execute = () => {
    const callFunction = configJson.deviceFunction;
    iotService[callFunction]();
}

const intervalInMillisecons = (seconds) => seconds * 1000;

setInterval(execute, intervalInMillisecons(configJson.intervalInSeconds));