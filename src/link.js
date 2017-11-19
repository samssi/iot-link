const logger = require("bunyan").createLogger({name: "iot-link-link"});
const iotService = require("./services/iot-service");
const R = require("ramda");

const configJson = [
    {
        deviceFunction: ["temperatureSensorDAThermistor"] ,
        intervalInMilliSeconds: 1000
    },
    {
        deviceFunction: ["colorLed"] ,
        intervalInMilliSeconds: 5000
    }
]
    

const execute = () => {
    R.forEach(run, configJson)
}

const run = (config) => {
    setInterval(() => R.forEach(call, config.deviceFunction), config.intervalInMilliSeconds);
}

const call = (functionReference) => {
    iotService[functionReference]();
}

execute();