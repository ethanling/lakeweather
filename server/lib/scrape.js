const axios = require('axios');
const cheerio = require('cheerio');
const db = require('./db')


const formatText = (titles, text) => {
	let toCombine = [];
	let valuesArr = [];
	let tmpString = '';
	// Determine where titles fall in text array
	for (let i = 0; i < text.length; i++) {
		for (let j = 0; j < titles.length; j++) {
			if (text[i] === titles[j]) {
				toCombine.push(i);					
			}
		}
	}

	for (let k = 0; k < text.length; k++) {
		for (let l = 0; l < toCombine.length; l++) {
			if (k === toCombine[l]) {
				valuesArr.push(tmpString)
				tmpString = '';
			}

			if (k > toCombine[l] && k < toCombine[l+1]) {
				tmpString = tmpString + ' ' + text[k]
			}

			if (k > toCombine[l] && k > toCombine[toCombine.length]) {
				console.log("here:", text[k])
			}
		}
	}	

	const vals = valuesArr.filter(item => item.length > 0)		

	const data = [];
	
	for (let z = 0; z < titles.length - 1; z++) {
		data.push({
			time: titles[z],
			blurb: vals[z]
		})
	}

	return data;
}


async function getHTML(url) {
	const { data: html } = await axios.get(url)

	return html;
}

async function setPageData(html) {
	let $ = cheerio.load(html);

	const content = $('#contentarea > pre:nth-child(6)');
	const titles = $('#contentarea > pre:nth-child(6) > b');
	const keys = [];

	titles.contents().map((i, elem) => {
		keys.push(elem.children[0].data);
	})

	const txtArr = content.text().split('\n');
	const format = txtArr.filter(line => line.length > 0);
	const data = formatText(keys, format)

	return data;
}

async function getPageData() {
	const url = "https://www.ndbc.noaa.gov/data/Forecasts/FZUS61.KCLE.html"
	const html = await getHTML(url)
	const pageData = await setPageData(html)

	return pageData
}

async function runCron() {
	const data = await Promise.all([
		getPageData()
	])

	db.get('forecasts')
		.push({
			date: Date.now(),
			data: data[0]
		})
		.write()
	console.log('Complete.')
}

module.exports = {
	getHTML,
	setPageData,
	getPageData,
	runCron
}
