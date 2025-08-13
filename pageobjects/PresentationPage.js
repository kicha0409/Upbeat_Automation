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
        await expect(el.districtPresentation.page1PreviousBtn).toHaveAttribute('disabled', 'true');
        await expect(el.districtPresentation.page1NextBtn).toHaveAttribute('disabled', 'false');
        testReport.log('Page I - Cover Slide','Page content are matched as expected');
        await page.locator(el.districtPresentation.page1NextBtn).click();
        await expect(page.getByText('Principal Feedback')).toBeVisible();
        testReport.log('Page II - Principal Feedback','Navigated to page 2 successfully');
    }

    // verify principal feedback page
    async verifyPrincipalFeedback() {
        await expect(page.getByText('Example Slide Layout')).toBeVisible();
        await expect(page.locator('//img[@class="preview-image"]')).toBeVisible();
    }
}

module.exports = {PresentationPage};