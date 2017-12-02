const logger = require("bunyan").createLogger({name: "iot-link-link"});
const R = require("ramda");
const serviceConfig = require("./service-config");
const requireDir = require("require-dir");
const plugins = requireDir("./plugins")

const start = () => {
    logger.info("iot-link started");
    R.forEachObjIndexed(run, plugins);
}

const run = (plugin) => {
    setInterval(() => plugin.execute(), plugin.interval()); 
}

process.on("SIGINT", () => {
    logger.info("iot-link shut down");
    process.exit();
});

start();