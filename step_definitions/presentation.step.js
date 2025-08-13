const { Then, Given, When } = require('@cucumber/cucumber')
const { PresentationPage } = require('../pageobjects/PresentationPage');

const presentationPage = new PresentationPage();

Then('navigate to Engagement Report', { timeout: 100 * 1000 }, async function () {
    await presentationPage.navigateToEngagementReport();
});

Then('click on District tab', { timeout: 100 * 1000 }, async function () {
    await presentationPage.navigateToEngagementReport();
});

When('the coach user clicks on District Presentation link', { timeout: 100 * 1000 }, async function () {
    await presentationPage.clickOnDistrictPresentation();
});

Then('the presentation popup should display', { timeout: 100 * 1000 }, async function () {
    await presentationPage.clickOnDistrictPresentation();
});

Then('verify the cover Slide page', { timeout: 100 * 1000 }, async function () {
    await presentationPage.verifyCoverSlidePage();
});

Then('verify Principal Feedback page', { timeout: 100 * 1000 }, async function () {
    await presentationPage.verifyPrincipalFeedback();
});