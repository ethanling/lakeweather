const cron = require('node-cron')
const { runCron } = require('./scrape')

cron.schedule(`0,10 * * * *`, () => {
	console.log(`⏲️  Cron job in progress...`);
	runCron();
});
