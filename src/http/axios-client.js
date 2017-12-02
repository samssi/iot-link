const axios = require("axios");

const sensorClient = () => {
    return axios.create({
        baseURL: "http://localhost:5000/",
        timeout: 1000
    });
}

