const logger = require("bunyan").createLogger({name: "iot-link-config"});
const fs = require("fs");
const path = require("path");

const readFileFromRelativePath = (file) => {
    const relativePath = path.relative(process.cwd(), file);
    logger.info(`Reading configration from: ${relativePath}`)
    return fs.readFileSync(relativePath);
}

const configJson = JSON.parse(readFileFromRelativePath("config/service-config.json"));

exports.serviceConfig = () => {
    return configJson;
}