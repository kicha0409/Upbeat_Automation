const { Then, Given, When } = require('@cucumber/cucumber')
const { ReportPage } = require('../pageobjects/ReportsPage');

const reportPage = new ReportPage();

Given('Launch the Report', { timeout: 100 * 1000 }, async function () {
    await reportPage.launchReportPortal();
});

When('the report user login the report portal {string}, {string}', { timeout: 100 * 1000 }, async function (email, password) {
    await reportPage.loginReportPortal(email, password);
});

Then('the dashboard should display with the report types {string}', { timeout: 100 * 1000 }, async function (reportType) {
    this.sharedReportType = reportType;
    await reportPage.verifyDashboard(reportType);
});

Then('verify the Hide and Show button in the left pane', { timeout: 100 * 1000 }, async function () {
    await reportPage.verifyHideAndShow();
});

Then('the user clicks on Engagement report', { timeout: 100 * 1000 }, async function () {
    if(this.sharedReportType.toLowerCase().includes('engonly') || this.sharedReportType.toLowerCase().includes('all'))
    await reportPage.clickOnEngagementReport(this.sharedReportType);
});

Then('the user clicks on Exit report', { timeout: 100 * 1000 }, async function () {
    if(this.sharedReportType.includes('exitonly') || this.sharedReportType.toLowerCase().includes('all'))
        await reportPage.clickOnEngagementReport(this.sharedReportType);
});

Then('the user clicks on Principal report', { timeout: 100 * 1000 }, async function () {
    if(this.sharedReportType.includes('PrinOnly'))
        await reportPage.clickOnEngagementReport(this.sharedReportType);
});

Then('Verify the Engagement report home page {string}', { timeout: 100 * 1000 }, async function (adminInterval) {
    await reportPage.verifyEngagementReport(adminInterval);
});

Then('Verify the Results page', { timeout: 100 * 1000 }, async function () {
    if(this.sharedReportType.toLowerCase().includes('engonly') || this.sharedReportType.toLowerCase().includes('all'))
        await reportPage.verifyResultsPage();
});

Then('Verify the Questions page', { timeout: 100 * 1000 }, async function () {
    if(this.sharedReportType.toLowerCase().includes('engonly') || this.sharedReportType.toLowerCase().includes('all'))
        await reportPage.verifyQuestionsPage();
});

Then('Verify the Schools page', { timeout: 100 * 1000 }, async function () {
    if(this.sharedReportType.toLowerCase().includes('engonly') || this.sharedReportType.toLowerCase().includes('all'))
        await reportPage.verifySchoolsPage();
});

Then('Verify the Heatmap page', { timeout: 100 * 1000 }, async function () {
    if(this.sharedReportType.toLowerCase().includes('engonly') || this.sharedReportType.toLowerCase().includes('all'))
        await reportPage.verifyHeatmap();
});

Then('Verify the Questions page with demographics filter', { timeout: 100 * 1000 }, async function () {
    if(this.sharedReportType.toLowerCase().includes('engonly') || this.sharedReportType.toLowerCase().includes('all'))
        await reportPage.verifyDemographicFilter();
});

When('the user clicks on Exit Report in sidebar', { timeout: 100 * 1000 }, async function () {
    if(this.sharedReportType.toLowerCase().includes('exitonly') || this.sharedReportType.toLowerCase().includes('all'))
        await reportPage.clickOnExitInSidebar();
});

Then('navigates to Exit Report', { timeout: 100 * 1000 }, async function () {
    await reportPage.navigateToExitReport();
});

Then('the list of report tiles should display {string}', { timeout: 100 * 1000 }, async function (distName) {
    await reportPage.verifyReportTiles(distName,this.reportType);
});

Then('navigate to each tiles verify whether the report is loaded successfully', { timeout: 1000 * 1000 }, async function () {
    if(this.reportType.toLowerCase().includes('engagement'))
        await reportPage.navigateToEachEngagementTile();
    else if(this.reportType.toLowerCase().includes('exit'))
        await reportPage.navigateToEachExitTile();
    else if(this.reportType.toLowerCase().includes('principal'))
        await reportPage.navigateToEachPrincipalTile();
});

When('the user navigates to Engagement report', { timeout: 100 * 1000 }, async function () {
    this.reportType = 'engagement';
    await reportPage.navigateToEnagementReport();
});

When('the user navigates to Exit report', { timeout: 100 * 1000 }, async function () {
    this.reportType = 'exit';
    await reportPage.navigatesToExitReport();
});

When('the user navigates to School Leaders report', { timeout: 100 * 1000 }, async function () {
    this.reportType = 'principal';
    await reportPage.navigatesToPrincipalReport();
});