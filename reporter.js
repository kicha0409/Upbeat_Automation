const reporter = require('cucumber-html-reporter');

let options = {};
console.log("Entered Reporter file");
try {
  
  options = {
    theme: 'hierarchy', // 'bootstrap', 'hierarchy', 'foundation', 'simple'
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumberReport.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    brandTitle: '<img src="./upbeat.png" width="35px" height="auto" "> Survey Completion Report',
    metadata: {
      'Survey completed at': new Date().toJSON().slice(0, 16).replace(':', '-')
    }
};
  reporter.generate(options);
} catch (e) {
  throw new Error('error in generating report. check if report json generated => ', e);
}