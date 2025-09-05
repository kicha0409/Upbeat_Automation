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
        await page.locator('//button[text()="District"]').click();
        await expect (page.locator('//button[text()="District"]')).toHaveAttribute('disabled');
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
        const optionValue = await page.locator('//select[@name="interval"]').evaluate(el => el.value);
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
        await expect(page.locator(el.districtPresentation.page1DistrictNameTxt)).toHaveValue(`${this.districtName}`);
        await expect(page.locator(el.districtPresentation.page1ReportNameTxt)).toHaveValue(`${this.adminPeriod} Survey Report`);
        await expect(page.locator(el.districtPresentation.page1CoachNameTxt)).toBeEmpty();
        await expect(page.locator(el.districtPresentation.page1ManagerNameTxt)).toBeEmpty();
        // verify the next and previous buttons
        await expect(page.locator(el.districtPresentation.page1PreviousBtn)).toHaveAttribute('disabled');
        await expect(page.locator(el.districtPresentation.page1NextBtn)).not.toHaveAttribute('disabled');
        testReport.log('Page I - Cover Slide','Page content are matched as expected');
        await page.locator(el.districtPresentation.page1NextBtn).click();
        await expect(page.locator('//h2[text()="Principal Feedback"]')).toBeVisible();
        testReport.log('Page II - Principal Feedback','Navigated to page 2 successfully');
    }

    // verify principal feedback page
    async verifyPrincipalFeedback() {
        await expect(page.getByText('Example Slide Layout')).toBeVisible();
        await expect(page.locator('//img[@class="preview-image"]')).toBeVisible();
        await expect(page.locator(el.districtPresentation.page2ScreenDesc)).toHaveText("Select the feedback items you'd like to include in your presentation. You can choose multiple items that best represent the principal feedback from the most recent feedback survey administration.");
        await expect(page.locator(el.districtPresentation.page2ItemSelected)).toHaveText("0items selected");
        const feedbackQues = await page.locator(el.districtPresentation.page2FeedbackQues).count();
        expect(feedbackQues).toBeGreaterThanOrEqual(1);
        await expect(page.locator(el.districtPresentation.page2FeedbackQuesResponse)).toBeVisible();
        // select the first response on the first question
        await page.locator(el.districtPresentation.page2FeedbackQuesResponse).click();
        await expect(page.locator(el.districtPresentation.page1PreviousBtn)).not.toHaveAttribute('disabled');
        await expect(page.locator(el.districtPresentation.page1NextBtn)).not.toHaveAttribute('disabled');
        // click on next button
        testReport.log('Page II - Principal Feedback','Page content are matched as expected');
        await page.locator(el.districtPresentation.page1NextBtn).click();
        await expect(page.locator('//h2[text()="Goals and Focus Areas"]')).toBeVisible();
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
        await expect(page.locator(el.districtPresentation.page1PreviousBtn)).not.toHaveAttribute('disabled');
        await expect(page.locator(el.districtPresentation.page1NextBtn)).not.toHaveAttribute('disabled');
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
        await expect(page.locator(el.districtPresentation.page4EmptyState)).toBeVisible();
        await expect(page.locator(el.districtPresentation.page4GoalDesc)).toHaveText("Configure the areas of growth and focus slides for your presentation. Each tile represents a slide showing category comparisons.");
        await page.locator(el.districtPresentation.page4AddGrowthArea).click();
        await expect(page.locator(el.districtPresentation.page4GrowthArea)).toBeVisible({timeout: 5000});
        await expect(page.locator(el.districtPresentation.page4DrpSurveyType)).toBeVisible();
        await expect(page.locator(el.districtPresentation.page4DrpAreaType)).toBeVisible();
        const categoriesCount = await page.locator(el.districtPresentation.page4Categories).count();
        let randomCategory = this.getRandomInt(categoriesCount);
        await page.locator(`${el.districtPresentation.page4Categories}[${randomCategory}]`).click();
        await expect(page.locator(`${el.districtPresentation.page4Categories}[${randomCategory}]/i[@class="fa fa-check-square"]`)).toBeVisible({timeout: 5000});
        randomCategory = this.getRandomInt(categoriesCount);
        await page.locator(`${el.districtPresentation.page4Categories}[${randomCategory}]`).click();
        await expect(page.locator(`${el.districtPresentation.page4Categories}[${randomCategory}]/i[@class="fa fa-check-square"]`)).toBeVisible({timeout: 5000});
        testReport.log('Page IV - Areas of Growth','Verified the page areas of growth');
        await page.locator(el.districtPresentation.page1NextBtn).click();
        await expect(page.getByText('Highlights')).toBeVisible();
        testReport.log('Page V - Highlights','Navigated to page 5 successfully');
    }

    async verifyHighlight() {
        await expect(page.getByText('Example Slide Layout')).toBeVisible();
        await expect(page.locator('//img[@class="preview-image"]')).toBeVisible();
        await expect(page.locator(el.districtPresentation.page5GoalDesc)).toHaveText('Configure highlight slides showing specific domain and question performance. Each tile creates a slide with selected domain/question combinations.');
        await expect(page.locator(el.districtPresentation.page5StarIcon)).toBeVisible();
        await expect(page.locator(el.districtPresentation.page5EmptyState)).toHaveText('No highlights configured yetClick "Add Highlight" to create your first slide');
        await page.locator(el.districtPresentation.page5Btn).click();
        // verify highlight is added
        await expect(page.locator(el.districtPresentation.page5NewHighlight)).toBeVisible({timeout: 5000});
        // delete and readd the highlight
        await page.locator(el.districtPresentation.page5Btnminus).click();
        await expect(page.locator(el.districtPresentation.page5NewHighlight)).toBeHidden({timeout: 5000});
        await expect(page.locator(el.districtPresentation.page5DrpSurveyType)).toBeVisible();
        await expect(page.locator(el.districtPresentation.page5DrpAreaType)).toBeVisible();
        await page.locator(el.districtPresentation.page5BtnAddRow).click();
        await expect(page.locator(el.districtPresentation.page5DrpDomain)).toBeVisible();
        await expect(page.locator(el.districtPresentation.page5DrpQuestion)).toBeVisible();
        const domaincount = page.locator(el.districtPresentation.page5DrpDomainOption).count();
        const quescount = page.locator(el.districtPresentation.page5DrpQuestionOption).count();
        const dropdownDomain = page.locator(el.districtPresentation.page5DrpDomain);
        await dropdownDomain.selectOption({index: this.getRandomInt(domaincount)});
        const dropdownQues = page.locator(el.districtPresentation.page5DrpQuestion);
        await dropdownQues.selectOption({index: this.getRandomInt(quescount)}); 
        testReport.log('Page V - Highlights','Verified the page highlights');
        await page.locator(el.districtPresentation.page1NextBtn).click();
        await expect(page.getByText('Action Plan')).toBeVisible();
        testReport.log('Page VI - Action Plan','Navigated to page 6 successfully');
    }

    async verifyActionPlan() {
        await expect(page.getByText('Example Slide Layout')).toBeVisible();
        await expect(page.locator('//img[@class="preview-image"]')).toBeVisible();
        await expect(page.locator(el.districtPresentation.page6GoalDesc)).toHaveText('Define your action items for the next school year. These will guide implementation and help track progress toward your goals.');
        await expect(page.locator(el.districtPresentation.page6ButtonRemoveAction)).toHaveAttribute('disabled','true');
        // add new action
        await page.locator(el.districtPresentation.page6ButtonAction).click();
        await expect(page.locator(el.districtPresentation.page6TextArea)).toHaveCount(2);
        // delete the action and add text on first actiom
        await page.locator(el.districtPresentation.page6ButtonRemoveAction).click();
        await expect(page.locator(el.districtPresentation.page6TextArea)).toHaveCount(1);
        await page.locator(el.districtPresentation.page6TextArea).fill('Dummy text on actions');
        // verify action items section is visible
        await expect(page.locator(el.districtPresentation.page6ActionGuidelines)).toBeVisible();
        testReport.log('Page VI - Action Plan','Verified the Action plan');
        await page.locator(el.districtPresentation.page1NextBtn).click();
        await expect(page.getByText('Featured Schools')).toBeVisible();
        testReport.log('Page VII - Featured Schools','Navigated to page 7 successfully');
    }

    async verifyFeaturedSchools() {
        await expect(page.getByText('Example Slide Layout')).toBeVisible();
        await expect(page.locator('//img[@class="preview-image"]')).toBeVisible();
        await expect(page.locator(el.districtPresentation.page7GoalDesc)).toHaveText('Select schools to feature in your presentation. For each school, choose a specific domain and question to highlight their unique strengths or areas of focus.');
        await expect(page.locator(el.districtPresentation.page7EmptyState)).toBeVisible();
        await expect(page.locator(el.districtPresentation.page7BtnAddTile)).click();
        // verify the school 
        await expect(page.locator(el.districtPresentation.page7DivTile)).toBeVisible({timeout: 5000});
        await page.locator(el.districtPresentation.page7BtnRemove).click();
        await expect(page.locator(el.districtPresentation.page7DivTile)).toBeHidden({timeout: 5000});
        // add new school and update the details
        await expect(page.locator(el.districtPresentation.page7BtnAddTile)).click();
        await page.locator(el.districtPresentation.page7TxtKeyStrategy).fill('Test Strategy');
        await page.selectOption(el.districtPresentation.page7DrpSchool, { index: 2 });
        await page.selectOption(el.districtPresentation.page7DrpDomain, { index: 2 });
        await page.selectOption(el.districtPresentation.page7DrpQuestion, { index: 2 });
        testReport.log('Page VIII - Next Steps','Verified the features school');
        await page.locator(el.districtPresentation.page1NextBtn).click();
        await expect(page.getByText('Next Steps')).toBeVisible();
        testReport.log('Page VIII - Next Steps','Navigated to page 8 successfully');
    }

    async verifyNextSteps() {
        await expect(page.getByText('Example Slide Layout')).toBeVisible();
        await expect(page.locator('//img[@class="preview-image"]')).toBeVisible();
        await expect(page.locator(el.districtPresentation.page8GoalDesc)).toHaveText('Set review dates for different stakeholder groups. These dates will help coordinate implementation efforts and ensure timely follow-up across all levels.');
        // enter preview date
        await page.locator(el.districtPresentation.page8PrincipalStartDate).fill(this.getFutureDate(5));
        await page.locator(el.districtPresentation.page8PrincipalEndDate).fill(this.getFutureDate(10));
        // enter supervisor date
        await page.locator(el.districtPresentation.page8SupervisorStartDate).fill(this.getFutureDate(15));
        await page.locator(el.districtPresentation.page8SupervisorEndDate).fill(this.getFutureDate(20));
        // enter cabinet date
        await page.locator(el.districtPresentation.page8CabinetStartDate).fill(this.getFutureDate(25));
        await page.locator(el.districtPresentation.page8CabinetEndDate).fill(this.getFutureDate(30));
        // click on Generate Presentation
        await page.locator(el.districtPresentation.page8BtnGeneratePres).click();
    }

    // Returns a random integer between min and max (inclusive)
    getRandomInt(max) {
        max = Math.floor(max);  // Round down max
        return Math.floor(Math.random() * (max)) + min;
    }

    getFutureDate(daysToAdd) {
        let today = new Date();
        today.setDate(today.getDate() + daysToAdd);

        let month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        let day = String(today.getDate()).padStart(2, '0');
        let year = today.getFullYear();

        return `${month}/${day}/${year}`;
    }
}

module.exports = {PresentationPage};