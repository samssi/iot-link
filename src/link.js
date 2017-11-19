const logger = require("bunyan").createLogger({name: "iot-link-link"});
const iotService = require("./services/iot-service");
const fs = require("fs");
const path = require("path");
const R = require("ramda");

const configJson = () => readFileFromRelativePath("config/service-config.json");

const start = () => {
    logger.info("iot-link started");
    R.forEach(run, JSON.parse(configJson()));
}

const run = (config) => {
    setInterval(() => R.forEach(call, config.deviceFunction), config.intervalInMilliSeconds);
}

const call = (functionReference) => {
    iotService[functionReference]();
}

const readFileFromRelativePath = (file) => {
    const relativePath = path.relative(process.cwd(), file);
    return fs.readFileSync(relativePath);
}

process.on("SIGINT", () => {
    logger.info("iot-link shut down");
    process.exit();
});

start();