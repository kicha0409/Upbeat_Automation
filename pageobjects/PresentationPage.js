const el = require('./elements/elements.js');
const td = require('./testdata.js');
const { expect } = require('@playwright/test');
const { ReportUtils } = require('./../setup/reportUtils.js');

const testReport = new ReportUtils();

class PresentationPage {

    constructor() {
        this.adminPeriod = '';
        this.districtName = '';
    }

    //click on engagement report in report page
    async navigateToEngagementReport() {
        await page.locator(el.survey.btnEngagementReport).click();
        await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
        testReport.log("Report Page","Navigate to Engagement Report");
    }

    // click on district tab
    async clickOnDistrictTab() {
        await page.getByText('District').click();
        const isDitrictClicked = await page.getByText('District').getAttribute('disabled');
        expect(isDitrictClicked).toBeTruthy();
        testReport.log('Report Page','Distirct tab is in focus');
    }

    // click on the District tile
    async clickOnDistrictTile() {
        await page.locator("//ul[contains(@class,'filtering engagement')]//li[1]/button").click();
        testReport.log('Report Page','Clicked on district');
        await expect(page.getByText('Change Cluster')).toBeVisible({timeout: 15000});
        testReport.log('Report Page','District page is visible');
    }

    // click on the District presentation link
    async clickOnDistrictPresentation() {
        // get the current admin period
        const optionValue = await page.locator('//select[@name="interval"]').getAttribute('value');
        this.adminPeriod = await page.innerText(`//select[@name="interval"]/option[@value="${optionValue}"]`);
        this.districtName = await page.innerText('//div[@class="report-info"]//h2');
        // click on district presentation
        await page.locator(el.survey.icnProfile).click();
        await page.getByText('District Presentation').click();
        testReport.log("Report Page","Clicked on District Presentation link");
    }

    // verify presentation popup is displayed
    async verifyPresentationPopup() {
        await expect(page.locator(el.districtPresentation.mdlPresentation)).toBeVisible({timeout: 60000});
        testReport.log('Presentation Modal','Presentation modal is displated as expected');
    }

    // verify the cover slide page
    async verifyCoverSlidePage() {
        // verify page contents
        await expect(page.getByText('Cover Slide')).toBeVisible();
        await expect(page.getByText('Example Slide Layout')).toBeVisible();
        await expect(page.locator('//img[@class="preview-image"]')).toBeVisible();
        await expect(page.locator(el.districtPresentation.page1DistrictName)).toHaveText('District Display Name');
        await expect(page.locator(el.districtPresentation.page1ReportName)).toHaveText('Report Title');
        await expect(page.locator(el.districtPresentation.page1CoachName)).toHaveText('Coach Name');
        await expect(page.locator(el.districtPresentation.page1ManagerName)).toHaveText('Program Manager Name');
        await expect(page.locator(el.districtPresentation.page1DistrictNameTxt)).toHaveValue(`${this.adminPeriod} Survey Report`);
        await expect(page.locator(el.districtPresentation.page1ReportNameTxt)).toHaveValue(`${this.districtName}`);
        await expect(page.locator(el.districtPresentation.page1CoachNameTxt)).toBeEmpty();
        await expect(page.locator(el.districtPresentation.page1ManagerNameTxt)).toBeEmpty();
        // verify the next and previous buttons
        await expect(page.locator(el.districtPresentation.page1PreviousBtn)).toHaveAttribute('disabled', 'true');
        await expect(page.locator(el.districtPresentation.page1NextBtn)).toHaveAttribute('disabled', 'false');
        testReport.log('Page I - Cover Slide','Page content are matched as expected');
        await page.locator(el.districtPresentation.page1NextBtn).click();
        await expect(page.getByText('Principal Feedback')).toBeVisible();
        testReport.log('Page II - Principal Feedback','Navigated to page 2 successfully');
    }

    // verify principal feedback page
    async verifyPrincipalFeedback() {
        await expect(page.getByText('Example Slide Layout')).toBeVisible();
        await expect(page.locator('//img[@class="preview-image"]')).toBeVisible();
        await expect(page.locator(el.districtPresentation.page2ScreenDesc)).toHaveText("Select the feedback items you'd like to include in your presentation. You can choose multiple items that best represent the principal feedback from the most recent feedback survey administration.");
        await expect(page.locator(el.districtPresentation.page2ItemSelected)).toHaveText("0items selected");
        await expect(page.locator(el.districtPresentation.page2FeedbackQues)).toHaveCount(1, { greaterThanOrEqual: true });
        await expect(page.locator(el.districtPresentation.page2FeedbackQuesResponse)).toBeVisible();
        // select the first response on the first question
        await page.locator(el.districtPresentation.page2FeedbackQuesResponse).click();
        await expect(page.locator(el.districtPresentation.page1PreviousBtn)).toHaveAttribute('disabled', 'false');
        await expect(page.locator(el.districtPresentation.page1NextBtn)).toHaveAttribute('disabled', 'false');
        // click on next button
        testReport.log('Page II - Principal Feedback','Page content are matched as expected');
        await page.locator(el.districtPresentation.page1NextBtn).click();
        await expect(page.getByText('Goals and Focus Areas')).toBeVisible();
        testReport.log('Page III - Goals and Focus Areas','Navigated to page 3 successfully');
    }

    // verify goals and focus areas
    async verifyGoalsAndFocus() {
        await expect(page.getByText('Example Slide Layout')).toBeVisible();
        await expect(page.locator('//img[@class="preview-image"]')).toBeVisible();
        await expect(page.locator(el.districtPresentation.page3GoalDesc)).toHaveText("Enter your goals and focus areas for the next school year. These will help guide your district's priorities and initiatives.")
        await expect(page.locator(`${el.districtPresentation.page3TxtArea}[1]`)).toBeVisible();
        await expect(page.locator(el.districtPresentation.page3BtnAddGoal)).toBeVisible();
        await expect(page.locator(el.districtPresentation.page3TipsHeader)).toHaveText('Tips for effective goals:');
        await expect(page.locator(el.districtPresentation.page3TipsDesc)).toHaveText('Be specific and measurableAlign with district prioritiesMake them achievable within the school year');
        await expect(page.locator(el.districtPresentation.page1PreviousBtn)).toHaveAttribute('disabled', 'false');
        await expect(page.locator(el.districtPresentation.page1NextBtn)).toHaveAttribute('disabled', 'false');
        testReport.log('Page III - Goals and Focus Areas','Page content are matched as expected');
        // verify adding and deleting the goals
        await page.locator(el.districtPresentation.page3BtnAddGoal).click();
        await expect(page.locator(el.districtPresentation.page3TxtArea)).toHaveCount(2);
        await page.locator(`${el.districtPresentation.page3BtnRemoveGoal}[2]`).click();
        await expect(page.locator(el.districtPresentation.page3TxtArea)).toHaveCount(1,{timeout: 5000});
        testReport.log('Page III - Goals and Focus Areas','Goals added and deleted successfully');
        // enter text on the goal
        await page.locator(el.districtPresentation.page3TxtArea).fill('Entering dummy text on goals textbox');
        await expect(page.locator(`${el.districtPresentation.page3TxtArea}[1]`)).toHaveAttribute('value', 'Entering dummy text on goals textbox');
        testReport.log('Page III - Goals and Focus Areas','Enter text on the goal textarea');
        await page.locator(el.districtPresentation.page1NextBtn).click();
        await expect(page.getByText('Areas of Growth')).toBeVisible();
        testReport.log('Page IV - Areas of Growth','Navigated to page 4 successfully');
    }

    async verifyAreasOfGrowth() {
        await expect(page.getByText('Example Slide Layout')).toBeVisible();
        await expect(page.locator('//img[@class="preview-image"]')).toBeVisible();
    }
}

module.exports = {PresentationPage};