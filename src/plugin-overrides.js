const logger = require("bunyan").createLogger({name: "iot-link-config"});
const fs = require("fs");
const path = require("path");
const R = require("ramda");

const readFileFromRelativePath = (file) => {
    const relativePath = path.relative(process.cwd(), file);
    logger.info(`Reading possible plugin overrides from: ${relativePath}`)
    return fs.readFileSync(relativePath);
}

const pluginConfigs = JSON.parse(readFileFromRelativePath("config/plugin-override-config.json"));

const findPlugin = (pluginName) => {
    return R.find(R.propEq('plugin', pluginName))(pluginConfigs);
}

exports.overrideOrNotInterval = (plugin, pluginName) => {
    const overridePlugin = findPlugin(pluginName);

    if (overridePlugin) { logger.info(`Override configuration found for ${overridePlugin.plugin}.js, new interval value will be: ${overridePlugin.intervalInMilliSeconds} ms`);
        return overridePlugin.intervalInMilliSeconds
    }

    return plugin.interval();
}