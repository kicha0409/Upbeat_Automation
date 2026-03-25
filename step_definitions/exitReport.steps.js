const { Then, Given, When } = require('@cucumber/cucumber')
const { ExitReportPage } = require('../pageobjects/exitReport.page');

const exitReportPage = new ExitReportPage();

Then('verify whether the exit report is loaded', { timeout: 100 * 1000 }, async function () {
    await exitReportPage.verifyExitReport();
});
