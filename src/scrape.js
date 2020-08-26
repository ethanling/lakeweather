const request = require('request');
const cheerio = require('cheerio');

const URL = "https://www.ndbc.noaa.gov/data/Forecasts/FZUS61.KCLE.html"

const loadPage = () => {
	request(URL, (err, res, body) => {
		if (err) throw err;

		let $ = cheerio.load(body);

		const content = $('pre');

		console.log(content);
	})
}

module.exports = loadPage;
