const logger = require("bunyan").createLogger({name: "iot-link-config"});
const fs = require("fs");
const path = require("path");

const readFileFromRelativePath = (file) => {
    const relativePath = path.relative(process.cwd(), file);
    logger.info(`Reading possible plugin overrides from: ${relativePath}`)
    return fs.readFileSync(relativePath);
}

exports.pluginsToLoad = JSON.parse(readFileFromRelativePath("config/plugin-load-config.json"));