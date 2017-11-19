const logger = require("bunyan").createLogger({name: "iot-link-main"});
const forever = require("forever-monitor");

const link = new (forever.Monitor)("link.js", {});

const handleShutdown = () => {
    logger.info("Shutting down iot-link");
}

link.on("exit", function() {
    handleShutdown();
});

process.on("SIGINT", () => {
    handleShutdown();
    process.exit();
});

link.start();