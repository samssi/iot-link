const logger = require("bunyan").createLogger({name: "iot-link-link"});
const R = require("ramda");
const pluginConfig = require("./plugin-config");
const requireDir = require("require-dir");
const plugins = requireDir("./plugins")
const pluginFolder = "./plugins";

const start = () => {
    logger.info("iot-link starting up");
    R.forEach((plugin) => run(plugin), pluginConfig.pluginsToLoad);
}

const run = (plugin) => {
    const fullPluginPath = `${pluginFolder}/${plugin.plugin}`;
    logger.info(`Starting plugin ${fullPluginPath}.js with an interval of ${plugin.intervalInMilliSeconds} ms.`)
    setInterval(() => require(fullPluginPath).execute(), plugin.intervalInMilliSeconds); 
}

process.on("SIGINT", () => {
    logger.info("iot-link shut down");
    process.exit();
});

start();