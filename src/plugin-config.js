const logger = require("bunyan").createLogger({name: "iot-link-config"});
const fs = require("fs");
const path = require("path");

const pluginConfigFile = "plugin-load-config.json";
const pluginConfigPath = `config/${pluginConfigFile}`;

const readFileFromRelativePath = (file) => {
    const relativePath = path.relative(process.cwd(), file);
    logger.info(`Reading possible plugin overrides from: ${relativePath}`)
    try {
        return fs.readFileSync(relativePath);
    }
    catch (err) {
        logger.error(`Failure loading: ${pluginConfigFile}. Have you set up docker volume mapping to host config files?`)
        process.exit()
    }
}

exports.pluginsToLoad = JSON.parse(readFileFromRelativePath(pluginConfigPath));