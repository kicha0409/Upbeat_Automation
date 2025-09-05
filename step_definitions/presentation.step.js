const { Then, Given, When } = require('@cucumber/cucumber')
const { PresentationPage } = require('../pageobjects/PresentationPage');

const presentationPage = new PresentationPage();

Then('navigate to Engagement Report', { timeout: 100 * 1000 }, async function () {
    await presentationPage.navigateToEngagementReport();
});

Then('click on District tab', { timeout: 100 * 1000 }, async function () {
    await presentationPage.clickOnDistrictTab();
});

Then('select the district', { timeout: 100 * 1000 }, async function () {
    await presentationPage.clickOnDistrictTile();
});

When('the coach user clicks on District Presentation link', { timeout: 100 * 1000 }, async function () {
    await presentationPage.clickOnDistrictPresentation();
});

Then('the presentation popup should display', { timeout: 100 * 1000 }, async function () {
    await presentationPage.verifyPresentationPopup();
});

Then('verify the cover Slide page', { timeout: 100 * 1000 }, async function () {
    await presentationPage.verifyCoverSlidePage();
});

Then('verify Principal Feedback page', { timeout: 100 * 1000 }, async function () {
    await presentationPage.verifyPrincipalFeedback();
});

Then('verify Goals and Focus areas', { timeout: 100 * 1000 }, async function () {
    await presentationPage.verifyGoalsAndFocus();
});

Then('verify Areas of Growth', { timeout: 100 * 1000 }, async function () {
    await presentationPage.verifyAreasOfGrowth();
});

Then('verify Highlights', { timeout: 100 * 1000 }, async function () {
    await presentationPage.verifyHighlight();
});

Then('verify Action Plan', { timeout: 100 * 1000 }, async function () {
    await presentationPage.verifyActionPlan();
});

Then('verify Featured Schools', { timeout: 100 * 1000 }, async function () {
    await presentationPage.verifyActionPlan();
});