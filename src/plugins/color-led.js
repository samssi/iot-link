const logger = require("../logging/bunyan-logger").logger;
const sensorClient = require("../http/axios-client").sensorClient;

exports.execute = () => {
    console.log("color")
}

const trendNeutralGreen = () => {
    setLedColor(51, 204, 51);
}

const trendGettingHotterRed = () => {
    setLedColor(255, 0, 0);
}

const trendGettingColderBlue = () => {
    setLedColor(0, 0, 204);
}

const setLedColor = (r, g, b) => {
    sensorClient.post("/api/color", {r: r, g: g, b: b })
         .then((response) => console.log(response))
         .catch((error) => logger.error(error));
}