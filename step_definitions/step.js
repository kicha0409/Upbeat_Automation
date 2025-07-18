const { Then, Given } = require('@cucumber/cucumber')
const { SurveyPage } = require('.././pageobjects/SurveyPage');

const surveyPage = new SurveyPage();

Given('Launch the survey {string}', { timeout: 100 * 1000 }, async function (surveyURL) {
    await surveyPage.launchSurvey(surveyURL);
  });

Then('Complete the initial steps', async function () {
    await surveyPage.completeInitialSteps();
});  

Then('Start responding the survey questions', {timeout: 3 * 80000}, async function () {
    await surveyPage.surveyQuesUpdated();
});
