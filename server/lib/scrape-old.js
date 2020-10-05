const fetch = require('node-fetch');
const cheerio = require('cheerio');

const URL = "https://www.ndbc.noaa.gov/data/Forecasts/FZUS61.KCLE.html"

const formatText= (titles, text) => {
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

async function scrapePageData() {
	let data;
	await fetch(URL)
		.then(res => res.text())
		.then(body => {
			let $ = cheerio.load(body);

			const content = $('#contentarea > pre:nth-child(6)');
			const titles = $('#contentarea > pre:nth-child(6) > b');
			const keys = [];
			titles.contents().map((i, elem) => {
				keys.push(elem.children[0].data);
			})

			const txtArr = content.text().split('\n');

			const format = txtArr.filter(line => line.length > 0);

			data = formatText(keys, format)
		})
		.then(() => {
			return data
		});
}

module.exports = scrapePageData;
