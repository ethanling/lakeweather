const cron = require('node-cron')
const { runCron } = require('./scrape')

cron.schedule(`*/30 * * * *`, () => {
	console.log(`⏲️  Cron job in progress...`);
	runCron();
});
