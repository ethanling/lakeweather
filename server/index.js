const express = require('express')
const cors = require('cors')
const db = require('./lib/db')
require('./lib/cron')
const { getPageData } = require('./lib/scrape')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())

app.get('/scrape', async (req, res, next) => {
	console.log('Scrape in progress.')	
	const data = await Promise.all([
		getPageData()
	])
	res.json(data[0])
})
 
app.get('/data', async (req, res, next) => {
	const data = db.value();
	const currentWeather = data.forecasts[data.forecasts.length - 1]
	res.json(currentWeather)
})

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
