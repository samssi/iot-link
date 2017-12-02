const logger = require("bunyan").createLogger({name: "iot-link-link"});
const R = require("ramda");
const pluginOverrides = require("./plugin-overrides");
const requireDir = require("require-dir");
const plugins = requireDir("./plugins")

const start = () => {
    logger.info("iot-link started");
    R.forEachObjIndexed(run, plugins);
}

const run = (plugin, pluginName) => {
    setInterval(() => plugin.execute(), pluginInterval(plugin, pluginName)); 
}

const pluginInterval = (plugin, pluginName) => {
    return pluginOverrides.overrideOrNotInterval(plugin, pluginName);
}

process.on("SIGINT", () => {
    logger.info("iot-link shut down");
    process.exit();
});

start();