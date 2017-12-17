const logger = require("./logging/bunyan-logger").logger;
const fs = require("fs");

const pluginConfigPath = "/iot-link/config/plugin-load-config.json";

const readPluginConfig = () => {
    logger.info(`Reading possible plugin configuration from: ${pluginConfigPath}`)
    try {
        return fs.readFileSync(pluginConfigPath);
    }
    catch (err) {
        logger.error(`Failure loading: "${pluginConfigPath}". Have you set up docker volume mapping to host config files?`)
        process.exit()
    }
}

exports.pluginsToLoad = JSON.parse(readPluginConfig());