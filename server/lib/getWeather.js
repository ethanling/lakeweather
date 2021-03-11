// Import OpenWeather API Key
const path = require("path");
require("dotenv").config({ path: path.join(__dirname + "/../.env") });
const axios = require("axios");

const api_key = process.env.WEATHER_API_KEY;
const city = "cleveland,oh";
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}?id=524901&appid=${api_key}&units=imperial`;

const formatWeatherData = (data) => {
    const obj = {
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: Math.floor(data.main.temp),
        humidity: data.main.humidity,
    };

    return obj;
};

async function getWeatherData() {
    const { data } = await axios.get(url)
    const formatted = formatWeatherData(data);

    return formatted 
};

module.exports = { getWeatherData }

