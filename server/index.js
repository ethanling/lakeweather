require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./lib/db')
require('./lib/cron')
const { getPageData } = require('./lib/scrape')
const { getWeatherData} = require('./lib/getWeather')

const PORT = process.env.PORT || 3333;
const app = express()

// OpenWeather client key 
const api_key = process.env.WEATHER_API_KEY 

app.use(cors())

app.get('/scrape', async (req, res, next) => {
	console.log('⏲️  Scrape in progress...')	
	const data = await Promise.all([
		getPageData(),
        getWeatherData()
	])
    console.clear()
    console.log("✅ Scrape complete.")
	res.json(data)
})
 
app.get('/data', async (req, res, next) => {
	const data = db.value();
	const currentWeather = data.forecasts[data.forecasts.length - 1]
	res.json(currentWeather)
})

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
