const request = require('request');
const cheerio = require('cheerio');

const URL = "https://www.ndbc.noaa.gov/data/Forecasts/FZUS61.KCLE.html"

const arrToObj = (arr) => {
	const isUpperCase = (str) => {
		return str === str.toUpperCase();
	}

	const allKeys = arr.filter(item => isUpperCase(item));
	const allValues = arr.filter(item => isUpperCase(item) === false);

	const keys = allKeys.filter(item => item.includes('>') === false)
	const values = allValues.filter(item => item.includes('open waters') === false)

	console.log(keys);
	console.log(values)

	const obj = {};

	return obj;
}

const loadPage = () => {
	request(URL, (err, res, body) => {
		if (err) throw err;

		let $ = cheerio.load(body);

		const content = $('#contentarea > pre:nth-child(6)');
		const txtArr= content.text().split('\n');

		const format = txtArr.filter(line => line.length > 0);

		const obj = arrToObj(format)

		//		console.log(obj)
	})
}

module.exports = loadPage;
