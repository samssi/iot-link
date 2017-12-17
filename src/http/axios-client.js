const axios = require("axios");
const sensorClient = axios.create({
    baseURL: "http://172.18.0.20:5000/",
    timeout: 5000
});

module.exports = { sensorClient }