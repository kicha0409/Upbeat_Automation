const playwright = require('@playwright/test');

const { Before, After,BeforeStep,AfterStep,Status } = require('@cucumber/cucumber')
const { setWorldConstructor } = require('@cucumber/cucumber');
const CustomWorld = require('./CustomWorld');
const { ReportUtils } = require('./reportUtils');

const testReport = new ReportUtils();
const { CucumberReportGenerator } = require('cucumber-html-reporter');
setWorldConstructor(CustomWorld);

Before(async function () {

    global.browser = await playwright.chromium.launch({
        headless: false
    });
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
    global.report = '';
});

 

BeforeStep({ timeout: 180 * 1000 }, async (scenario) => {

    // This hook will be executed before all steps in a scenario with tag @foo
    testReport.logHdr(`Step >> ${scenario.pickleStep.text}`);
});

 

AfterStep(async function ({ result }) {

    if (result.status === Status.FAILED) {

        await global.page.screenshot({ path: 'screenshot1.png' });

    }

});

After(async function (scenario) {

    const screenshot = await global.page.screenshot({ path: `screenshots/${scenario.pickle.name}.png`, fullPage: true });
    global.page.close();
    this.attach(screenshot, 'image/png');
    this.attach(global.report);
});
