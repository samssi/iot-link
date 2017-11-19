const logger = require("bunyan").createLogger({name: "iot-link-link"});

const execute = () => {
    logger.info("execute called")
}

setInterval(execute, 3000);