const logger = require("bunyan").createLogger({name: "iot-link-link"});
const iotService = require("./services/iot-service");
const R = require("ramda");
const serviceConfig = require("./service-config");

const start = () => {
    logger.info("iot-link started");
    R.forEach(run, serviceConfig.serviceConfig());
}

const run = (config) => {
    setInterval(() => R.forEach(call, config.deviceFunction), config.intervalInMilliSeconds);
}

const call = (functionReference) => {
    iotService[functionReference]();
}

process.on("SIGINT", () => {
    logger.info("iot-link shut down");
    process.exit();
});

start();