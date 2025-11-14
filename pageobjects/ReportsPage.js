const el = require('./elements/elements.js');
const td = require('./testdata.js');
const { expect } = require('@playwright/test');
const { ReportUtils } = require('./../setup/reportUtils.js');
const { ApiGetData} = require('../api_utlis/ApiGetData.js');
const { remove } = require('winston');
const elements = require('./elements/elements.js');

const testReport = new ReportUtils();
const apiGetData = new ApiGetData();

class ReportPage {
    
    constructor() {
    this.engagementTileCount = '';
    this.districtName = '';
    this.surveyTypes = '';
    this.adminInterval = '';
    this.reports = Array(5).fill("null");
    this.leftMenu = Array(5).fill("null");
    this.surveyTypes = 0;    
    }

    async launchReportPortal() {
        await page.goto('https://qa.reports.teachupbeat.net/');
        await page.waitForLoadState('load',{timeout: 60000});
    }


    async loginReportPortal(email, password) {
        await page.fill(el.reportsLoginPage.txtUserName, email);
        await page.fill(el.reportsLoginPage.txtPassword, password);
        await page.click(el.reportsLoginPage.btnSubmit);
        // await page.waitForLoadState('load',{ timout: 60000 });
        await page.waitForTimeout(30000);
    }

    async verifyDashboard(reportType) {
        await page.waitForLoadState('load');
        await expect(await page.locator(el.reportsDashboard.divFirstLogin)).toBeVisible({ timout: 20000 });
        await expect(await page.locator(el.reportsDashboard.divMenubarOff)).toBeHidden();
        testReport.log("Report Dashboard","Menu bar is ON");
        await expect(await page.locator(el.reportsDashboard.divDashboardHeader).innerText()).toMatch(/^Welcome Back, (.+)!$/);
        testReport.log("Report Dashboard","Header matched as expected");
        switch (reportType.toLowerCase()) {
            case "all": 
                {
                    expect (await page.locator(el.reportsDashboard.mnu1).innerText()).toEqual(td.reportsDashboard.dashboard);
                    expect (await page.locator(el.reportsDashboard.mnu2).innerText()).toEqual(td.reportsDashboard.engagement);
                    expect (await page.locator(el.reportsDashboard.mnu3).innerText()).toEqual(td.reportsDashboard.principal);
                    expect (await page.locator(el.reportsDashboard.mnu4).innerText()).toEqual(td.reportsDashboard.exit);
                    expect (await page.locator(el.reportsDashboard.mnu5).innerText()).toEqual(td.reportsDashboard.consultation);
                    testReport.log("Report Dashboard",'Menu labels matched as expected');
                    expect (await page.locator(el.reportsDashboard.mainTile1).innerText()).toEqual(td.reportsDashboard.engagementTile);
                    expect (await page.locator(el.reportsDashboard.mainTile2).innerText()).toEqual(td.reportsDashboard.principalTile);
                    expect (await page.locator(el.reportsDashboard.mainTile3).innerText()).toEqual(td.reportsDashboard.exitTile);
                    expect (await page.locator(el.reportsDashboard.mainTile4).innerText()).toEqual(td.reportsDashboard.consultation);
                    testReport.log("Report Dashboard",'Main tiles matched as expected');
                    break;
                }
                case "engonly": 
                {
                    expect (await page.locator(el.reportsDashboard.mnu1).innerText()).toEqual(td.reportsDashboard.dashboard);
                    expect (await page.locator(el.reportsDashboard.mnu2).innerText()).toEqual(td.reportsDashboard.engagement);
                    expect (await page.locator(el.reportsDashboard.mnu3).innerText()).toEqual(td.reportsDashboard.consultation);
                    expect (await page.locator(el.reportsDashboard.mnu4)).toBeHidden();
                    expect (await page.locator(el.reportsDashboard.mnu5)).toBeHidden();
                    testReport.log("Report Dashboard",'Engagement, Consultation labels matched as expected');
                    expect (await page.locator(el.reportsDashboard.mainTile1).innerText()).toEqual(td.reportsDashboard.engagementTile);
                    expect (await page.locator(el.reportsDashboard.mainTile2).innerText()).toEqual(td.reportsDashboard.consultation);
                    expect (await page.locator(el.reportsDashboard.mainTile3)).toBeHidden();
                    expect (await page.locator(el.reportsDashboard.mainTile4)).toBeHidden();
                    testReport.log("Report Dashboard",'Engagement, Consultation tiles matched as expected');
                    break;
                }
                case "exitonly": 
                {
                    expect (await page.locator(el.reportsDashboard.mnu1).innerText()).toEqual(td.reportsDashboard.dashboard);
                    expect (await page.locator(el.reportsDashboard.mnu2).innerText()).toEqual(td.reportsDashboard.exit);
                    expect (await page.locator(el.reportsDashboard.mnu3).innerText()).toEqual(td.reportsDashboard.consultation);
                    expect (await page.locator(el.reportsDashboard.mnu4)).toBeHidden();
                    expect (await page.locator(el.reportsDashboard.mnu5)).toBeHidden();
                    testReport.log("Report Dashboard",'Exit, Consultation labels matched as expected');
                    expect (await page.locator(el.reportsDashboard.mainTile1).innerText()).toEqual(td.reportsDashboard.exitTile);
                    expect (await page.locator(el.reportsDashboard.mainTile2).innerText()).toEqual(td.reportsDashboard.consultation);
                    expect (await page.locator(el.reportsDashboard.mainTile3)).toBeHidden();
                    expect (await page.locator(el.reportsDashboard.mainTile4)).toBeHidden();
                    testReport.log("Report Dashboard",'Exit, Consultation tiles matched as expected');
                    break;
                }
                case "prinonly": 
                {
                    expect (await page.locator(el.reportsDashboard.mnu1).innerText()).toEqual(td.reportsDashboard.dashboard);
                    expect (await page.locator(el.reportsDashboard.mnu2).innerText()).toEqual(td.reportsDashboard.principal);
                    expect (await page.locator(el.reportsDashboard.mnu3).innerText()).toEqual(td.reportsDashboard.consultation);
                    expect (await page.locator(el.reportsDashboard.mnu4)).toBeHidden();
                    expect (await page.locator(el.reportsDashboard.mnu5)).toBeHidden();
                    testReport.log("Report Dashboard",'Principal, Consultation label matched as expected');
                    expect (await page.locator(el.reportsDashboard.mainTile1).innerText()).toEqual(td.reportsDashboard.principalTile);
                    expect (await page.locator(el.reportsDashboard.mainTile2).innerText()).toEqual(td.reportsDashboard.consultation);
                    expect (await page.locator(el.reportsDashboard.mainTile3)).toBeHidden();
                    expect (await page.locator(el.reportsDashboard.mainTile4)).toBeHidden();
                    testReport.log("Report Dashboard",'Principal, Consultation tile matched as expected');
                    break;
                }
            default:
                testReport.log("Report Dashboard",'Invalid Report type');
        }
    }

    async verifyHideAndShow() {
        // verify hide and show button
        await page.click(el.reportsDashboard.btnMenuShowHide);
        expect(await page.locator(el.reportsDashboard.divMenubarOff)).toBeVisible({timeout: 10000});
        expect(await page.locator(el.reportsDashboard.divMenBarOn)).toBeHidden();
        await page.click(el.reportsDashboard.btnMenuShowHide);
        expect(await page.locator(el.reportsDashboard.divMenubarOff)).toBeHidden({timeout: 10000});
        expect(await page.locator(el.reportsDashboard.divMenBarOn)).toBeVisible();
        testReport.log("Report Dashboard",'Hide and Show button is working as expected'); 
    }

    async clickOnEngagementReport(reportType) {
        switch (reportType.toLowerCase()) {
            case "engonly": 
            case "all":
                {
                    await page.locator(el.survey.btnEngagementReport).click();
                    await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
                    await page.locator(el.survey.btnFirstReportTile).click();
                    await expect(page.locator(el.survey.btnPrint)).toBeVisible({timeout:30000});
                    await page.locator(el.survey.btnDashboard).click();
                    await expect(page.locator(el.survey.btnPrint)).toBeHidden({timeout: 20000})
                    break;
                }
                case "exitonly": 
                {
                    await page.locator(el.survey.btnExitReport).click();
                    await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
                    await page.locator(el.survey.btnFirstReportTile).click();
                    await expect(page.locator(el.survey.btnPrint)).toBeVisible({timeout:30000});
                    await page.locator(el.survey.btnDashboard).click();
                    await expect(page.locator(el.survey.btnPrint)).toBeHidden({timeout: 20000})
                    break;
                }
                case "prinonly": 
                {
                    await page.locator(el.survey.btnPrincipalReport).click();
                    await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
                    await page.locator(el.survey.btnFirstReportTile).click();
                    await expect(page.locator(el.survey.btnPrint)).toBeVisible({timeout:30000});
                    await page.locator(el.survey.btnDashboard).click();
                    await expect(page.locator(el.survey.btnPrint)).toBeHidden({timeout: 20000})
                    break;
                }
            default:
                testReport.log("Report Type",'Invalid Report type');
        }
    }

    async verifyEngagementReport(adminInterval){

        // click on first tile in engagment report
        await page.locator(el.survey.btnEngagementReport).click();
        await expect (page.locator(el.survey.btnFirstReportTile)).toBeVisible({timeout: 60000})
        await page.locator(el.survey.btnFirstReportTile).click();
        await expect(page.locator(el.engagementReport.drpInterval)).toBeVisible({timeout: 60000});
        await expect(page.locator(el.engagementReport.lblTotalQues)).toHaveText('TOTAL QUESTIONS',{ ignoreCase: true});
        await expect(page.locator(el.engagementReport.lblTotalQuesValue)).not.toBeEmpty();
        await expect(page.locator(el.engagementReport.lblCompletion)).toHaveText('COMPLETIONS',{ ignoreCase: true});
        await expect(page.locator(el.engagementReport.lblCompletionValue)).not.toBeEmpty();
        await expect(page.locator(el.engagementReport.lblParticipation)).toHaveText('Participation',{ ignoreCase: true});
        await expect(page.locator(el.engagementReport.lblParticipationvalue)).not.toBeEmpty();

        // change the comparison to Upbeat Global Cluster
        await page.locator(el.engagementReport.btnComparison).last().click();
        const drpComparison = await page.locator(el.engagementReport.drpComparison);
        await drpComparison.selectOption({label: 'Upbeat Global Cluster'});
        const drpAdminInterval = await page.locator('//select[@id="modal-comparison-interval"]');
        await drpAdminInterval.selectOption({label: adminInterval});
        // await page.locator(  //select[@id="modal-comparison-interval"]/option[text()='Fall 2024']
        await page.locator(el.engagementReport.btnComparisonSubmit).click();
        await expect(page.locator(el.engagementReport.btnComparisonSubmit)).not.toBeVisible();
    }

    async verifyResultsPage() {
        const categoriesCount = await page.locator(el.reportResultspage.lblCategory).count();
        let i;
        for(i=1;i<=categoriesCount;i++) {
            let categoryName = await page.innerText(el.reportResultspage.lblCategory + "[" + i + "]").locator("//*[contains(@class,'labeltext')]");
            await page.locator(el.reportResultspage.lblCategory + "[" + i + "]").locator("//*[contains(@class,'tooltip-icon')]").click();
            await expect(page.innerText(el.reportResultspage.lblCategoryNameinTooltipModal)).toMatch(categoryName);
            await expect(page.innerText(el.reportResultspage.lblTooltipContent)).not.toBeEmpty();
            if(i=1) 
            {
                const newPagePromise = global.context.waitForEvent('page');
                await page.locator(el.reportResultspage.lblTooltipLink).click();
                const newPage = await newPagePromise;
                await expect(newPage.title()).not.toBeEmpty();
                await newPage.close(); 
            }
            await page.locator(el.reportResultspage.lblTooltipClose).click();
            // verify modal is closed
            await expect(page.innerText(el.reportResultspage.lblCategoryNameinTooltipModal)).toBeHidden();
        }
    }

    async verifyQuestionsPage() {
        await page.locator(el.engagementReport.btnQuestions).click();
        await expect(page.locator(el.reportQuestionsPage.divCategory).first()).toBeVisible("timeout: 60000");
        const categoryCount = await page.locator(el.reportQuestionsPage.divCategory).count();
        let i;
        let totPositive, totNegative, totNA, totComparison;
        let quesPositive = 0, quesNegative = 0, quesNA = 0, quesComparion = 0, tempPositive, tempNegative, tempNA, tempComparison;
        let avgPositive, avgnegative, avgNA, avgComparison;

        for(i=1;i<=categoryCount;i++){
            // read the total positive, negative and na values for category
            totPositive = await page.innerText('//div[@class="category-block ng-star-inserted"][' +i + ']/div[@class="category"]//*[contains(@class,"scoreblock")][1]');
            totNA = await page.innerText('//div[@class="category-block ng-star-inserted"][' +i + ']/div[@class="category"]//*[contains(@class,"scoreblock")][2]');
            totNegative = await page.innerText('//div[@class="category-block ng-star-inserted"][' +i + ']/div[@class="category"]//*[contains(@class,"scoreblock")][3]');
            totComparison = await page.innerText('//div[@class="category-block ng-star-inserted"][' +i + ']//div[@class="category"]//div[@class="p category-comparison"]//*[@class="number"]');
            if(totNA.trim()==="") totNA = 0;
            if(totPositive.trim()==="") totPositive = 0;
            if(totNegative.trim()==="") totNegative = 0;
            if(totComparison.trim()==="") totComparison = 0;

            //read the total number of questions in the category
            const questionCount = await page.locator('//div[@class="category-block ng-star-inserted"][' +i + ']/div[contains(@class,"category question")]').count();
            for(let j=1;j<=questionCount;j++){
                tempPositive = await page.innerText('//div[@class="category-block ng-star-inserted"][' +i + ']/div[contains(@class,"category question")][' +j + ']//*[contains(@class,"scoreblock")][1]');
                tempNA = await page.innerText('//div[@class="category-block ng-star-inserted"][' +i + ']/div[contains(@class,"category question")][' +j + ']//*[contains(@class,"scoreblock")][2]');
                tempNegative = await page.innerText('//div[@class="category-block ng-star-inserted"][' +i + ']/div[contains(@class,"category question")][' +j + ']//*[contains(@class,"scoreblock")][3]');
                if(tempPositive.trim()==="") tempPositive = 0;
                if(tempNA.trim()==="") tempNA = 0;
                if(tempNegative.trim()==="") tempNegative = 0;
                quesPositive = parseInt(quesPositive) + parseInt(tempPositive);
                quesNegative = parseInt(quesNegative) + parseInt(tempNegative);
                quesNA = parseInt(quesNA) + parseInt(tempNA);
                tempComparison = await page.innerText('//div[@class="category-block ng-star-inserted"][' +i + ']/div[contains(@class,"category question")][' +j + ']//div[@class="p category-comparison"]');
                if(tempComparison.trim()==="") tempComparison = 0;
                quesComparion = parseInt(quesComparion) + parseInt(tempComparison);
            }
            
            if(quesPositive != 0) avgPositive = parseInt(quesPositive) / questionCount;
            if(quesNegative != 0) avgnegative = parseInt(quesNegative) / questionCount;
            if(quesNA != 0) avgNA = parseInt(quesNA) / questionCount; else avgNA = 0;
            if(quesComparion != 0) avgComparison = parseInt(quesComparion) / questionCount;

            let positive = parseInt(totPositive)-parseInt(avgPositive);
            let negative = parseInt(totNegative)-parseInt(avgnegative);
            let na =  parseInt(totNA)-parseInt(avgNA);
            let comparison;
            if(parseInt(avgComparison)<0 && parseInt(totComparison)<0)
                comparison = parseInt(totComparison)-parseInt(avgComparison);
            else if(parseInt(avgComparison)<0)
                comparison = parseInt(totComparison)+parseInt(avgComparison);
            else
                comparison = parseInt(totComparison)-parseInt(avgComparison);

            testReport.log("Engagement Report: Question Tab","Comparing the Category "+i);

            expect(positive>=-1 && positive<= 1).toBe(true);
            expect(negative>=-1 && negative<= 1).toBe(true);
            expect(na>=-1 && na<= 1).toBe(true);
            expect(comparison>=-1 && comparison<= 1).toBe(true);

            testReport.log("Engagement Report: Question Tab","Category "+i+" is matching as expected");

            totPositive=0; totNegative=0; totNA=0; totComparison=0;
            quesPositive = 0; quesNegative = 0; quesNA = 0; quesComparion = 0; tempPositive=0; tempNegative=0; tempNA=0; tempComparison=0;
            avgPositive=0; avgnegative=0; avgNA=0; avgComparison=0;
        }
    }

    async verifySchoolsPage() {
        await page.locator(el.engagementReport.btnSchools).click();
        await expect(page.locator(el.reportSchoolsPage.lblSchool)).toBeVisible({timeout: 30000});
        await expect(page.locator(el.reportSchoolsPage.lblSchool)).toHaveText("School",{ignoreCase: true});
        await expect(page.locator(el.reportSchoolsPage.lblEngScore)).toHaveText("Engagement Score",{ignoreCase: true});
        await expect(page.locator(el.reportSchoolsPage.lblComparison)).toHaveText("Comparison",{ignoreCase: true});

        // verify the table
        let schoolsCount = await page.locator(el.reportSchoolsPage.lblSchoolList).count();
        for(let i=1;i<=schoolsCount;i++) {
            await expect(page.locator('//div[contains(@class,"category ng-star-inserted")][' +i + ']/div[@class="p category-label"]')).not.toBeEmpty();
            await expect(page.locator('//div[contains(@class,"category ng-star-inserted")][' +i + ']/div[@class="p category-data engagement"]')).not.toBeEmpty();
            await expect(page.locator('//div[contains(@class,"category ng-star-inserted")][' +i + ']/div[@class="p category-comparison"]')).not.toBeEmpty();
        }

        testReport.log("Engagement Report: Schools Tab","Schools page is working as expected");
    }

    async verifyHeatmap() {
        await page.locator(el.engagementReport.btnHeatmap).click();
        await expect(page.locator(el.reportsHeatmapPage.drpCategory)).toBeVisible({timeout: 60000});
        const legendLabels = ["N/A","0-70%","71-85%","86%-100%"];
        const legendColor = ["#ffffff","#de4841","#ede45b","#75d75a"];
        for(let i=1;i<=4;i++) {
            await expect(page.locator('//div[@class="right-block"]/div[' +i + ']/*[@class="key-label"]')).toHaveText(legendLabels[i-1]);
            let backgroundColor = await page.$eval('//div[contains(@class,"right-block")]/div[' +i + ']//*[contains(@class,"key-color")]', element => {
                return window.getComputedStyle(element).backgroundColor;
            });
            backgroundColor = backgroundColor.substring(4, backgroundColor.length-1)
            .replace(/ /g, '')
            .split(',');
            expect(this.rgbToHex(parseInt(backgroundColor[0]),parseInt(backgroundColor[1]),parseInt(backgroundColor[2]))).toContain(legendColor[i-1]);
            testReport.log("Engagement Report: Heatmap tab","Legend "+i+" color is matched as expected");
        }

        // verify the heatmap table
        const categoryCount = await page.locator('//div[contains(@class,"heatmap-container")]/div[@class="row ng-star-inserted"]');
        const legendCount = await page.locator('//div[contains(@class,"heatmap-container")]/div[@class="row ng-star-inserted"][1]//div[contains(@class,"cell")]').count();
        for(let j=1;j<=categoryCount;j++) {
            await expect(page.locator('//div[contains(@class,"heatmap-container")]/div[@class="row ng-star-inserted"][' +i + ']//*[@class="block number"]')).not.toBeEmpty();
            await expect(page.locator('//div[contains(@class,"heatmap-container")]/div[@class="row ng-star-inserted"][' +i + ']//*[@class="block category"]')).not.toBeEmpty();
            await expect(page.locator('//div[contains(@class,"heatmap-container")]/div[@class="row ng-star-inserted"][' +i + ']//*[@class="block percent"]')).not.toBeEmpty();

            for(let j=1;j<=legendCount;j++) {
                let backgroundColor = await page.$eval('//div[contains(@class,"heatmap-container")]/div[@class="row ng-star-inserted"][' +i + ']//div[contains(@class,"cell")][' +j + ']', element => {
                    return window.getComputedStyle(element).backgroundColor;
                });
                let tooltip = await page.innerText('//div[contains(@class,"heatmap-container")]/div[@class="row ng-star-inserted"][' +i + ']//div[contains(@class,"cell")][' +j + ']/*[@class="tooltip"]');
                let splitTooltip = tooltip.split("\n");
                tooltip = splitTooltip.indexOf(1);
                switch (tooltip) {
                    case (tooltip >= 0 && tooltip <= 70):
                        expect(backgroundColor).toMatch(legendColor.indexOf(1));
                    case (tooltip >= 71 && tooltip <= 85):
                        expect(backgroundColor).toMatch(legendColor.indexOf(2));
                    case (tooltip >= 86 && tooltip <= 100):
                        expect(backgroundColor).toMatch(legendColor.indexOf(3));
                    default:
                        testReport.log("Engagement Report: Heatmap tab","invalid percentage");
                }
            }
            
        }
    }

    // verify the questions page after applying dempgraphic filter
    async verifyDemographicFilter() {
        // select admin period - Winter 2024
        const drpAdminPeriod = await page.locator(el.engagementReport.drpInterval);
        await drpAdminPeriod.selectOption({label: 'Winter 2024'});
        await page.waitForLoadState('load',{timeout: 60000});

        //Select Stafff survey
        await page.locator(el.engagementReport.btnStaff).click();
        await page.waitForLoadState('load',{timeout: 60000});

        // select gender from add filter
        await page.locator(el.engagementReport.btnAddFilter).click();
        await page.locator(el.engagementReport.btnApply).click();
        await page.waitForLoadState('load',{timeout: 60000});

        await this.verifyQuestionsPage();

    }

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
      
    rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    async clickOnExitInSidebar() {
        await page.locator(el.survey.btnExitReport).click();
        await page.waitForLoadState('load',{timeout: 45000});
        await expect(page.locator(el.exitReport.lblTitle)).toHaveText('Exit Data Reports');
        testReport.log("Exit Report","Eit report page is loaded successfully");
    }

    async navigateToExitReport() {
        // navigate to district tab and click on the tile
        await page.locator(el.exitReport.btnDistrict).click();
        await page.locator(el.exitReport.btnDistrictTile).click();
        await waitForLoadState('load',{timeout: 45000});
        await expect(page.locator(el.exitReport.chrtExit).count()).toBeGreaterThan(1);
        testReport.log("Exit Report","Exit report is loaded successfully");
    }

    async navigateToEnagementReport() {
        await page.locator(el.survey.btnEngagementReport).click();
        await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
        testReport.log('Engagement Report','Clicked on Engagement Report');
    }

    async navigatesToExitReport() {
        await page.locator(el.survey.btnExitReport).click();
        await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
        testReport.log('Exit Report','Clicked on Exit Report');
    }

    async navigatesToPrincipalReport() {
        await page.locator(el.survey.btnPrincipalReport).click();
        await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
        testReport.log('School Leaders Report','Clicked on School Leaders Report');
    }

    async verifyReportTiles(distName, reportType) {
        this.districtName = distName;
        await page.waitForTimeout(5000);
        if(reportType.toLowerCase().includes('engagement')) {
            this.engagementTileCount = await page.locator(el.engagementReport.divEngagementTile).count();
            expect(parseInt(this.engagementTileCount)).toBeGreaterThan(1);
            testReport.log("Report Portal","Engagement tiles are displayed successfully");
        }
        else if(reportType.toLowerCase().includes('exit')) {
            this.engagementTileCount = await page.locator(el.engagementReport.divExitTile).count();
            expect(parseInt(this.engagementTileCount)).toBeGreaterThan(1);
            testReport.log("Report Portal","Exit tiles are displayed successfully");
        }
        else if(reportType.toLowerCase().includes('principal')) {
            this.engagementTileCount = await page.locator(el.engagementReport.divPrincipalTile).count();
            expect(parseInt(this.engagementTileCount)).toBeGreaterThanOrEqual(1);
            testReport.log("Report Portal","School Leaders tiles are displayed successfully");
        }
    }

    async navigateToEachEngagementTile() {
        for(let i=1;i<=this.engagementTileCount;i++) {
            let tileName = await page.locator(`${el.engagementReport.divEngagementTile}[${i}]/button//*[contains(@class,'buttonlabel name')]`).innerText();
            let adminPeriod;
            if(await page.locator(`${el.engagementReport.divEngagementTile}[${i}]/button/i`).isHidden()) {
                await page.locator(`${el.engagementReport.divEngagementTile}[${i}]/button`).click();
                await page.waitForLoadState('load',{timeout: 60000});
                await expect(page.locator(el.engagementReport.divEngagementBar)).toBeVisible({timeout: 30000});
                    // navigate to all the admin periods in the page
                    let adminPeriodCount = await page.locator(el.engagementReport.drpIntervalOptions).count();
                    for(let j=0;j<adminPeriodCount;j++) {
                        let surveyName = '';
                        let k;
                        adminPeriod = await page.locator(`${el.engagementReport.drpIntervalOptions}`).nth(j).innerText();
                        const drpAdminInterval = await page.locator(el.engagementReport.drpInterval);
                        await drpAdminInterval.selectOption({index: j});
                        await page.waitForLoadState('load',{timeout: 60000});
                        try {
                            await page.waitForTimeout(3000);
                            await expect(page.locator(el.engagementReport.divEngagementBar)).toBeVisible({timeout: 30000});
                            surveyName = await page.locator(`${el.engagementReport.btnSurveyTypes}[1]`).innerText();
                            testReport.logPass(`District Name: ${this.districtName}`,`Cluster Name: ${tileName}, Admin Period: ${adminPeriod}, Survey Type: ${surveyName}`);
                            let surveyCount = await page.locator(el.engagementReport.btnSurveyTypes).count();
                                if(surveyCount > 1) {
                                    for(k=2;k<=surveyCount;k++) {
                                        await page.locator(`${el.engagementReport.btnSurveyTypes}[${k}]`).click();
                                        await page.waitForLoadState('load',{timeout: 60000});
                                        await page.waitForTimeout(3000);
                                        await expect(page.locator(el.engagementReport.divEngagementBar)).toBeVisible({timeout: 30000});
                                        surveyName = await page.locator(`${el.engagementReport.btnSurveyTypes}[${k}]`).innerText();
                                        testReport.logPass(`District Name: ${this.districtName}`,`Cluster Name: ${tileName}, Admin Period: ${adminPeriod}, Survey Type: ${surveyName}`);
                                    }
                                }
                        }
                        catch(err) {
                            if(!k) k=1;
                            surveyName = await page.locator(`${el.engagementReport.btnSurveyTypes}[${k}]`).innerText();
                            testReport.logFail(`District Name: ${this.districtName}`,`Cluster Name: ${tileName}, Admin Period: ${adminPeriod}, Survey Type: ${surveyName}`);
                            break;
                        }
                    }
                    try {
                        await page.locator(el.engagementReport.btnChangeCluster).click();
                        testReport.log("Change Cluster","Clicked on change cluster");
                        await page.waitForLoadState('load',{timeout: 60000});
                        await expect(page.locator(el.survey.txtSearch)).toBeVisible();
                    }
                    catch(err) {
                        await page.reload();
                        await page.locator(el.survey.btnEngagementReport).click();
                        await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
                    }
                }
            else
                testReport.log(this.districtName,`${tileName} - doesn't have enough data to show`);
            
        }
    }

    async navigateToEachExitTile() {
        for(let i=1;i<=this.engagementTileCount;i++) {
            let tileName = await page.locator(`${el.engagementReport.divExitTile}[${i}]/button//*[contains(@class,'buttonlabel name')]`).innerText();
            let adminPeriod;
            if(await page.locator(`${el.engagementReport.divExitTile}[${i}]/button/i`).isHidden()) {
                await page.locator(`${el.engagementReport.divExitTile}[${i}]/button`).click();
                await page.waitForLoadState('load',{timeout: 60000});
                const isDisabled = await page.locator(`${el.engagementReport.btnSurveyTypes}[1]`).getAttribute('disabled');
                if(!isDisabled) {
                    try {
                        await page.locator(`${el.engagementReport.btnSurveyTypes}[1]`).click();
                    }
                    catch(err) {
                        testReport.log("Exit Report","Survey type button is enabled, so not clicked");
                    }
                }
                const txtRecords = await page.locator(el.exitReport.lblLessThanFourRecords).innerText();
                
                
                    // navigate to all the admin periods in the page
                    let adminPeriodCount = await page.locator(el.engagementReport.drpIntervalOptions).count();
                    if(!txtRecords.toLowerCase().includes('there must be four or more respondents in the current data set to show this report'))
                        {
                        await expect(page.locator(el.engagementReport.divExitStdQuestions)).toBeVisible({timeout: 30000});
                    for(let j=0;j<adminPeriodCount;j++) {
                        let surveyName = '';
                        let k;
                        adminPeriod = await page.locator(`${el.engagementReport.drpIntervalOptions}`).nth(j).innerText();
                        const drpAdminInterval = await page.locator(el.engagementReport.drpInterval);
                        await drpAdminInterval.selectOption({index: j});
                        await page.waitForLoadState('load',{timeout: 60000});
                        try {
                            await page.waitForTimeout(3000);
                            await expect(page.locator(el.engagementReport.divEngagementBar)).toBeVisible({timeout: 30000});
                            surveyName = await page.locator(`${el.engagementReport.btnSurveyTypes}[1]`).innerText();
                            testReport.logPass(`District Name: ${this.districtName}`,`Cluster Name: ${tileName}, Admin Period: ${adminPeriod}, Survey Type: ${surveyName}`);
                            let surveyCount = await page.locator(el.engagementReport.btnSurveyTypes).count();
                                if(surveyCount > 1) {
                                    for(k=2;k<=surveyCount;k++) {
                                        await page.locator(`${el.engagementReport.btnSurveyTypes}[${k}]`).click();
                                        await page.waitForLoadState('load',{timeout: 60000});
                                        await page.waitForTimeout(3000);
                                        await expect(page.locator(el.engagementReport.divEngagementBar)).toBeVisible({timeout: 30000});
                                        surveyName = await page.locator(`${el.engagementReport.btnSurveyTypes}[${k}]`).innerText();
                                        testReport.logPass(`District Name: ${this.districtName}`,`Cluster Name: ${tileName}, Admin Period: ${adminPeriod}, Survey Type: ${surveyName}`);
                                    }
                                }
                        }
                        catch(err) {
                            if(!k) k=1;
                            surveyName = await page.locator(`${el.engagementReport.btnSurveyTypes}[${k}]`).innerText();
                            testReport.logFail(`District Name: ${this.districtName}`,`Cluster Name: ${tileName}, Admin Period: ${adminPeriod}, Survey Type: ${surveyName}`);
                            break;
                        }
                    }
                    }
                    else
                        testReport.log("Exit Report","Admin period doesn't have enough data to show");
                    try {
                        await page.locator(el.engagementReport.btnChangeCluster).click();
                        testReport.log("Change Cluster","Clicked on change cluster");
                        await page.waitForLoadState('load',{timeout: 60000});
                        await expect(page.locator(el.survey.txtSearch)).toBeVisible();
                    }
                    catch(err) {
                        await page.reload();
                        await page.locator(el.survey.btnEngagementReport).click();
                        await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
                    }
                
            }
            
            else
                testReport.log(this.districtName,`${tileName} - doesn't have enough data to show`);
            
        }
    }

    async navigateToEachPrincipalTile() {
        for(let i=1;i<=this.engagementTileCount;i++) {
            let tileName = await page.locator(`${el.engagementReport.divPrincipalTile}[${i}]/button//*[contains(@class,'buttonlabel name')]`).innerText();
            let adminPeriod;
            if(await page.locator(`${el.engagementReport.divPrincipalTile}[${i}]/button/i`).isHidden()) {
                await page.locator(`${el.engagementReport.divPrincipalTile}[${i}]/button`).click();
                await page.waitForLoadState('load',{timeout: 60000});
                const isDisabled = await page.locator(`${el.engagementReport.btnSurveyTypes}[1]`).getAttribute('disabled');
                if(!isDisabled) {
                    try {
                        await page.locator(`${el.engagementReport.btnSurveyTypes}[1]`).click();
                    }
                    catch(err) {
                        testReport.log("Exit Report","Survey type button is enabled, so not clicked");
                    }
                }
                const txtRecords = await page.locator(el.exitReport.lblLessThanFourRecords).innerText();
                
                    // navigate to all the admin periods in the page
                    let adminPeriodCount = await page.locator(el.engagementReport.drpIntervalOptions).count();
                    if(!txtRecords.toLowerCase().includes('there must be four or more respondents in the current data set to show this report'))
                        {
                        await expect(page.locator(el.engagementReport.divPrincipalStdQuestions)).toBeVisible({timeout: 30000});
                     for(let j=0;j<adminPeriodCount;j++) {
                        let surveyName = '';
                        let k;
                        adminPeriod = await page.locator(`${el.engagementReport.drpIntervalOptions}`).nth(j).innerText();
                        const drpAdminInterval = await page.locator(el.engagementReport.drpInterval);
                        await drpAdminInterval.selectOption({index: j});
                        await page.waitForLoadState('load',{timeout: 60000});
                        try {
                            await page.waitForTimeout(3000);
                            await expect(page.locator(el.engagementReport.divEngagementBar)).toBeVisible({timeout: 30000});
                            surveyName = await page.locator(`${el.engagementReport.btnSurveyTypes}[1]`).innerText();
                            testReport.logPass(`District Name: ${this.districtName}`,`Cluster Name: ${tileName}, Admin Period: ${adminPeriod}, Survey Type: ${surveyName}`);
                            let surveyCount = await page.locator(el.engagementReport.btnSurveyTypes).count();
                                if(surveyCount > 1) {
                                    for(k=2;k<=surveyCount;k++) {
                                        await page.locator(`${el.engagementReport.btnSurveyTypes}[${k}]`).click();
                                        await page.waitForLoadState('load',{timeout: 60000});
                                        await page.waitForTimeout(3000);
                                        await expect(page.locator(el.engagementReport.divEngagementBar)).toBeVisible({timeout: 30000});
                                        surveyName = await page.locator(`${el.engagementReport.btnSurveyTypes}[${k}]`).innerText();
                                        testReport.logPass(`District Name: ${this.districtName}`,`Cluster Name: ${tileName}, Admin Period: ${adminPeriod}, Survey Type: ${surveyName}`);
                                    }
                                }
                        }
                        catch(err) {
                            if(!k) k=1;
                            surveyName = await page.locator(`${el.engagementReport.btnSurveyTypes}[${k}]`).innerText();
                            testReport.logFail(`District Name: ${this.districtName}`,`Cluster Name: ${tileName}, Admin Period: ${adminPeriod}, Survey Type: ${surveyName}`);
                            break;
                        }
                    }
                    }
                    else
                        testReport.log("Exit Report","Admin period doesn't have enough data to show");
                    try {
                        await page.locator(el.engagementReport.btnChangeCluster).click();
                        testReport.log("Change Cluster","Clicked on change cluster");
                        await page.waitForLoadState('load',{timeout: 60000});
                        await expect(page.locator(el.survey.txtSearch)).toBeVisible();
                    }
                    catch(err) {
                        await page.reload();
                        await page.locator(el.survey.btnEngagementReport).click();
                        await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
                    }
                
            }
            
            else
                testReport.log(this.districtName,`${tileName} - doesn't have enough data to show`);
            
        }
    }

    async clickOnConsultationReport() {
        await page.waitForLoadState('load',{timeout: 30000});
        await page.locator(el.survey.btnConsultation).first().click();
        await expect(page.locator(el.survey.txtSearch)).toBeVisible({timeout: 20000});
        testReport.log('Consultation Report','Clicked on Consultation Report');
    }

    async verifyConsultationPageisLoaded() {
       await expect(page.locator('//h1')).toHaveText('Consultation Notes',{timeout: 60000});
       testReport.log('Consultation Report','Clicked on consultation school');              
    }

    async clickOnConsultationSchool(adminPeriod) {
       await page.locator(el.survey.divConsultSchool).click();
       await page.waitForLoadState('load',{timeout: 60000}); 
       await page.waitForTimeout(10000);
       await expect(page.locator(el.consultationReport.drpSchool)).toBeVisible({timeout: 60000});
       testReport.log('Consultation Report','Consultation report is loaded successfully');

       // Select the admin period
       const interval = el.consultationReport.drpInterval;
       // await interval.selectOption({ label: adminPeriod });

       const options = await page.locator('select[name="interval"] option');
       const count = await options.count();
       let dropDownValue;
        for (let k = 0; k < count; k++) {
        const option = options.nth(k);
        const label = await option.textContent();
        if (label.trim() === adminPeriod) {
            dropDownValue = await page.locator(`//select[@name="interval"]//option[${k+1}]`).getAttribute('value');
            break;
        }
        }

       // dropDownValue = await page.getAttribute(`select[name="interval"] >> option:text(${adminPeriod})`,'value');
       await page.locator(el.consultationReport.drpInterval).selectOption({ value: dropDownValue });
       await page.waitForTimeout(5000);
       await page.waitForLoadState('load',{timeout: 30000});

       // verify the drop down option is selected
       const selectedValue = await page.$eval(el.consultationReport.drpInterval, (select) => select.value);
       expect(selectedValue).toMatch(dropDownValue);
       testReport.log('Consultation Report','Admin period is selected as expected');
    }

    async verifyTheFieldsOnonsultationReport() {
        await expect(page.locator(el.consultationReport.lblSchool)).toHaveText('School');
        await expect(page.locator(el.consultationReport.drpSchool)).toBeVisible();
        await expect(page.locator(el.consultationReport.lblInterval)).toHaveText('Interval');
        await expect(page.locator(el.consultationReport.lblResponseRate)).toHaveText('Response Rate');
        this.surveyTypes = page.locator(el.consultationReport.lblResponseRateSurveyType).count();
        let i;
        for(i=1;i<=this.surveyTypes;i++) {
            await expect(page.locator(`${el.consultationReport.lblResponseRateSurveyType}[${i}]//h4/*[@class="label"]`)).not.toBeEmpty();
            await expect(page.locator(`${el.consultationReport.lblResponseRateSurveyType}[${i}]//div[contains(@id,"bar-response-")]`)).toBeVisible();
        }
        testReport.log('Consultation Report','Response Rate section is displayed as expected');
        // verify overall engagement section
        await expect(page.locator(el.consultationReport.lblOverAllEngagement)).toHaveText('Overall Engagement');
        for(i=1;i<=this.surveyTypes;i++) {
            await expect(page.locator(`${el.consultationReport.lblOverAllEngagementSurveyType}[${i}]//h4/*[@class="label"]`)).not.toBeEmpty();
            await expect(page.locator(`${el.consultationReport.lblOverAllEngagementSurveyType}[${i}]//h3[text()="Overall Engagement"]/parent::div//div[@class="stats-bar ng-star-inserted"][2]//h4[@class="h4"]/*[@class="value"]`)).not.toBeEmpty();
            await expect(page.locator(`${el.consultationReport.lblOverAllEngagementSurveyType}[${i}]//div[contains(@id,"bar-engagement-")]`)).toBeVisible();
        }
        testReport.log('Consultation Report','Overll engagement section is displayed as expected');
        // verify compariosn to district average
        await expect(page.locator(el.consultationReport.lblComparison)).toHaveText('Comparison to District Average');
        for(i=1;i<=this.surveyTypes;i++) {
            await expect(page.locator(`${el.consultationReport.lblComparisonSurveyType}[${i}]//h4`)).not.toBeEmpty();;
            await expect(page.locator(`${el.consultationReport.lblComparisonSurveyType}[${i}]//div[@id="district-comparison"]//*[contains(@class,'comparison ')]`)).not.toBeEmpty();
            await expect(page.locator(`${el.consultationReport.lblComparisonSurveyType}[${i}]//div[@id="district-comparison"]//*[contains(@id,"district-comp")]`)).toBeVisible();
        }
        testReport.log('Consultation Report','District average section is displayed as expected');
    }

    async areaOfStrength() {
        // verify Area of Strength
        let i;
        await expect(page.locator(el.consultationReport.lblAreaOfStrength)).toHaveText('Areas of Strength');
        for(i=1;i<=this.surveyTypes;i++) {
            await expect(page.locator(`${el.consultationReport.lblAreaOfStrengthSurveyType}[${i}]//h4`)).not.toBeEmpty();
            let areaOfStrengthFeatures = page.locator(el.consultationReport.lblAlreaOfStrengthFeatures).count();
            for(let j=1;j<=areaOfStrengthFeatures;j++)
            {
                await expect(page.locator(`//div[@class="summary-container"]/div[${i}]//div[@class="summary-content"]//div[@class="table-block num-2 ng-star-inserted"][${i}]/div[${j}]//h5`)).not.toBeEmpty();
                await expect(page.locator(`//div[@class="summary-container"]/div[${i}]//div[@class="summary-content"]//div[@class="table-block num-2 ng-star-inserted"][${i}]/div[${j}]/div`)).not.toBeEmpty();
            }
        }
        testReport.log('Consultation Report','Area of Strength section is displayed as expected');
    }
       
    async areaOfImprovement() {
         // verify area of improvments
         let i;
        await expect(page.locator(el.consultationReport.lblAreaOfImprovement)).toHaveText('Areas for Improvement');
        for(i=1;i<=this.surveyTypes;i++) {
            await expect(page.locator(`${el.consultationReport.lblAreaOfImprovement}[${i}]//h4`)).not.toBeEmpty();
            let areaOfImprovementFeatures = page.locator(el.consultationReport.lblAreaOfImprovement).count();
            for(let j=1;j<=areaOfImprovementFeatures;j++)
            {
                await expect(page.locator(`//div[@class="summary-container"]/div[2]//div[@class="summary-content"]//div[@class="table-block num-2 ng-star-inserted"][${i}]//div[@class="summary-content"]//div[@class="table-block num-2 ng-star-inserted"][${i}]/div[${j}]//h5`)).not.toBeEmpty();
                await expect(page.locator(`//div[@class="summary-container"]/div[2]//div[@class="summary-content"]//div[@class="table-block num-2 ng-star-inserted"][${i}]//div[@class="summary-content"]//div[@class="table-block num-2 ng-star-inserted"][${i}]/div[${j}]/div`)).not.toBeEmpty();
            }
        }
        testReport.log('Consultation Report','Area of Improvements section is displayed as expected');
    }

    async actionsForSchoolLeaders() {
        // Verify actions for school leaders
        let i;
        await expect(page.locator(el.consultationReport.lblAction)).toHaveText('Actions for School Leaders');
        for(i=1;i<=this.surveyTypes;i++) {
            await expect(page.locator(`${el.consultationReport.lblActionSurveyType}[${i}]//h4`)).not.toBeEmpty();
            let actionsFeatures = page.locator(`//div[@class="summary-container"]/div[3]//div[@class="summary-content"]/ol[${i}]/li`).count();
            for(let j=1;j<=actionsFeatures;j++)
            {
                await expect(page.locator(`//div[@class="summary-container"]/div[3]//div[@class="summary-content"]/ol[${i}]/li[${j}]/p`)).not.toBeEmpty();
            }
        }
        testReport.log('Consultation Report','Actions for School Leaders section is displayed as expected');
    }

    async recommendedResources() {
        // verify the Recommended resources
        let i;
        await expect(page.locator(el.consultationReport.lblRecommendedResources)).toHaveText('Recommended Resources');
        for(i=1;i<=this.surveyTypes;i++) {
            let recommendedResourcesFeatures = page.locator(`//div[@class="summary-container"]/div[3]//div[@class="summary-content"]/ol[${i}]/li`).count();
            for(let j=1;j<=recommendedResourcesFeatures;j++)
            {
                await expect(page.locator(`//h3[text()="Recommended Resources"]/parent::div//following-sibling::div/ul[${i}]/li[${j}]`)).not.toBeEmpty();
            }
        }
        testReport.log('Consultation Report','Recommended resources section is displayed as expected');
    }

    async verifyReportDashboard(reportType) {
        let activeReports = reportType.split(',');
        let standardReport = ['Engagement','School Leader Survey','Exit','Family Surveys','Consultation Notes'];
        // assign the report types
        if(reportType.toLowerCase().trim().includes('all')) {
            this.reports[0] = 'Engagement Reports';
            this.leftMenu[0] = 'Engagement';
            this.reports[1] = 'School Leader Survey';
            this.leftMenu[1] = 'School Leader Survey';
            this.reports[2] = 'Exit Reports';
            this.leftMenu[2] = 'Exit';
            this.reports[3] = 'Parent Surveys';
            this.leftMenu[3] = 'Family Surveys';
            this.reports[4] = 'Consultation Notes';
            this.leftMenu[4] = 'Consultation Notes';        
        }
        else {
            for(let i=0;i<activeReports.length;i++) {
                if(activeReports[i].toLowerCase().trim() === 'engagement') {
                    this.reports[0] = 'Engagement Reports';
                    this.leftMenu[0] = 'Engagement';
                }
                if(activeReports[i].toLowerCase().trim() === 'schoolleader') {
                    this.reports[1] = 'School Leader Survey';
                    this.leftMenu[1] = 'School Leader Survey';
                }
                if(activeReports[i].toLowerCase().trim() === 'exit') {
                    this.reports[2] = 'Exit Reports';
                    this.leftMenu[2] = 'Exit';
                }
                if(activeReports[i].toLowerCase().trim() === 'parent') {
                    this.reports[3] = 'Parent Surveys';
                    this.leftMenu[3] = 'Family Surveys';
                }
                if(activeReports[i].toLowerCase().trim() === 'consultation') {
                    this.reports[4] = 'Consultation Notes';
                    this.leftMenu[4] = 'Consultation Notes';
                }
            }
        }
        
        // verify the report types are displayed in the dashboard
        for(let j=0;j<this.reports.length;j++) {
            if(this.reports[j]!== 'null') {
                if(this.reports[j] === 'Consultation Notes') {
                    await expect(page.locator(`(//*[text()="${this.reports[j]}"])[2]`)).toBeVisible();
                    await expect(page.locator(`//ul[@class="ul"]/li[${j+2}]//i`)).toHaveClass(/fa-light/);
                }
                else {
                    await expect(page.locator(`//*[text()="${this.reports[j]}"]`)).toBeVisible();
                    await expect(page.locator(`//ul[@class="ul"]/li[${j+2}]//i`)).toHaveClass(/fa-light/);
                }
                testReport.log('Reports Page',`${this.reports[j]} is visible as expected`);
            }
            else {
                await expect(page.locator(`//ul[@class="ul"]/li[${j+2}]//i`)).toHaveClass(/fa-lock-keyhole/);
                testReport.log('Reports Page',`${standardReport[j]} is locked as expected`);
            }
        }
    }

    async selectAdminPeriod(adminInterval) {
        // Select the admin period
        this.adminInterval = adminInterval;
       const interval = el.consultationReport.drpInterval;
       
       const options = await page.locator('select[name="interval"] option');
       const count = await options.count();
       let dropDownValue;
        for (let k = 0; k < count; k++) {
        const option = options.nth(k);
        const label = await option.textContent();
        if (label.trim() === adminInterval) {
            dropDownValue = await page.locator(`//select[@name="interval"]//option[${k+1}]`).getAttribute('value');
            break;
        }
        }

       await page.locator(el.consultationReport.drpInterval).selectOption({ value: dropDownValue });
       await page.waitForTimeout(5000);
       await page.waitForLoadState('load',{timeout: 30000});

       // verify the drop down option is selected
       const selectedValue = await page.$eval(el.consultationReport.drpInterval, (select) => select.value);
       expect(selectedValue).toMatch(dropDownValue);
       testReport.log('Consultation Report','Admin period is selected as expected');
    }

    async clickOnConsultationNotes() {
        await page.locator(el.consultationNotes.btnConsultationNote).click();
        await page.waitForLoadState('load', {timeout: 20000});
        await expect(page.locator(el.consultationNotes.btnAdd)).toBeVisible();
        testReport.log("Consultation Note",'Consultation page is opened');
    }

    async clickOnAddButton() {
        // verify whether the admin period has an existing consultation notes
        let rowCount = 0;
        try {
            rowCount = await page.locator(el.consultationNotes.tblConsultNote).count();
        }
        catch(err) {
            testReport.log('Consultation Note','No existing rows displayed');
            await page.locator(el.consultationNotes.btnAdd).click();
            testReport.log('Consultation Note','Clicked on add button');
            await expect(page.locator(el.consultationNotes.drpPrinciplaDropdown)).toBeVisible({timeout: 30000});
            testReport.log('Consultation Note','Consultation Notes is visible');
        }
        
        // verify whether the consultation notes already exists for that district
        let noteExists = false;
        if(rowCount > 0) {
            // verify if consultation notes exists for the admin period
            for(let i = 1;i <= rowCount; i++) {
                const currentInterval = await page.locator(`//table/tbody/tr[${i}]/td[2]`).innerText();
                if(currentInterval.includes(this.adminInterval)) {
                    await page.locator(`//table/tbody/tr[${i}]/td[5]/button`).click();
                    testReport.log('Consultation Note','Clicked on open button');
                    await expect(page.locator(el.consultationNotes.drpMetricsPrincipal)).toBeVisible({timeout: 30000});
                    testReport.log('Consultation Note','Consultation Notes is visible');
                    noteExists = true;
                    break;
                }
            }
            // no consultation notes exists for the admin period, hence clicking on add button
            if(!noteExists) {
                await page.locator(el.consultationNotes.btnAdd).click();
                testReport.log('Consultation Note','Clicked on add button');
                await expect(page.locator(el.consultationNotes.drpPrinciplaDropdown)).toBeVisible({timeout: 30000});
                testReport.log('Consultation Note','Consultation Notes is visible');
            }
        }
    }

    async completeMetricsPage() {
        // select the test principal in the dropdown
        const optionCount = await page.locator(`${el.consultationNotes.drpMetricsPrincipal} option`).count();
        const drpDown = page.locator(el.consultationNotes.drpMetricsPrincipal);
        for(let i=0; i<optionCount; i++) {
            let optionValue = await page.locator(`${el.consultationNotes.drpMetricsPrincipal} option`).nth(i).innerText();
            if(optionValue.toLowerCase().includes('test')) {
                await drpDown.selectOption({ index: i});
                testReport.log('Metrics Page','Principla name is selected');
                break;
            }
        }

        // select future date
        let today = new Date();
        let futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 10);
        // converting the date to mm/dd/yyyy format
        let mm = String(futureDate.getMonth() + 1).padStart(2, '0'); // months are 0-based
        let dd = String(futureDate.getDate()).padStart(2, '0');
        let yyyy = futureDate.getFullYear();
        const fDate = `${mm}/${dd}/${yyyy}`;
        await page.locator(el.consultationNotes.dtConsultDate).fill(fDate);
        testReport.log('Metrics Page','Future date is selected');
        // select the consult attend seeion response
        await page.locator(el.consultationNotes.radConsultSession).click();
        testReport.log('Metrics Page','Selected response on consultation session question');
    }

    async clickOnNext() {
        // click on next button
        await page.locator(el.consultationNotes.btnNext).click();
        testReport.log('Metrics Page','Clicked on Next button');
        // verify next page is loaded
        await expect(page.locator(el.consultationNotes.divSaveMsg)).toBeHidden({timeout: 30000});
        testReport.log('Next','Clicked on Next button');
    }

    async completeStrengths() {
        this.surveyTypes = await page.locator(el.consultationNotes.btnStrength).count();
        let optionCount = parseInt(2);
        for(let i=1;i<=this.surveyTypes;i++) {
            for(let j=1;j<=2;j++) {
                // select strength from the dropdown
                const drpStrength = page.locator(`${el.consultationNotes.drpStrength}:nth-of-type(${j}) select`);
                await drpStrength.selectOption({index: optionCount});
                const drpText = await page.locator(`${el.consultationNotes.drpStrength}:nth-of-type(${j}) select option:nth-of-type(${optionCount})`).innerText();
                // remove the percentage from the text
                const removePecent = drpText.split('(')[0];
                optionCount++;
                // enter a random text 
                const dummyData = await apiGetData.getDummytext();
                await page.locator(`${el.consultationNotes.txtStength}:nth-of-type(${j}) textarea`).fill(`${removePecent} - ${dummyData}`);
                // click on add entry
                if(j!=2)
                    await page.locator(el.consultationNotes.btnAddEntry).click();
                if(j===2 && i!==this.surveyTypes)
                    await page.locator(el.consultationNotes.btnNextSurveyType).click();
            }
        }
        testReport.log('Strenghts','Completed the section');
    }

    async areasOfOppurtunity() {
        let optionCount = parseInt(2);
        for(let i=1;i<=this.surveyTypes;i++) {
            for(let j=1;j<=2;j++) {
                // select strength from the dropdown
                const drpGrowth = page.locator(`${el.consultationNotes.drpGrowth}:nth-of-type(${j}) select`);
                await drpGrowth.selectOption({index: optionCount});
                const drpGrowthText = await page.locator(`${el.consultationNotes.drpGrowth}:nth-of-type(${j}) select option:nth-of-type(${optionCount})`).innerText();
                // remove the percentage from the text
                const removePecent = drpGrowthText.split('(')[0];
                optionCount++;
                // enter a random text 
                const dummyData = await apiGetData.getDummytext();
                await page.locator(`${el.consultationNotes.txtGrowth}:nth-of-type(${j}) textarea`).fill(`${removePecent} - ${dummyData}`);
                // click on add entry
                if(j!=2)
                    await page.locator(el.consultationNotes.btnGrowthAdd).click();
                if(j===2 && i!==this.surveyTypes)
                    await page.locator(el.consultationNotes.btnNextGrowthSurveyType).click();
            }
        }
        testReport.log('Area of oppurtunity','Completed the section');
    }

    async completeActions() {
        for(let i=1;i<=this.surveyTypes;i++) {
            for(let j=1;j<=2;j++) {
                // enter a random text 
                const dummyData = await apiGetData.getDummytext();
                await page.locator(`${el.consultationNotes.txtAction}:nth-of-type(${j}) textarea`).fill(`${dummyData}`);
                // click on add entry
                if(j!=2)
                    await page.locator(el.consultationNotes.btnActionsAdd).click();
                if(j===2 && i!==this.surveyTypes)
                    await page.locator(el.consultationNotes.btnNextAction).click();
            }
        }
        testReport.log('Action','Completed the section');
    }

    async completeToolkits() {
        for(let i=1;i<=this.surveyTypes;i++) {
            const totalMenus = await page.locator(el.consultationNotes.mnuResources).count();
            for(let j=1;j<=3;j++) {
                // click on add resource
                await page.locator(`${elements.consultationNotes.btnAddResource}:nth-of-type(j)`).click();
                // enter a random text
                let mnuRandomNum = this.generateRandomNum(totalMenus);
                await page.locator(`{elements.mnuResources}:nth-of-typeof(${mnuRandomNum})`).hover();
                const totalSubMenu = await page.locator(elements.consultationNotes.mnuSubResources).count();
                mnuRandomNum = this.generateRandomNum(totalSubMenu);
                await page.locator(`{elements.mnuSubResources}:nth-of-typeof(${mnuRandomNum})`).click();
                // click on add entry
                if(j!=3)
                    await page.locator(el.consultationNotes.btnAddResource).click();
                if(j===3 && i!==this.surveyTypes)
                    await page.locator(el.consultationNotes.btnNextToolKit).click();
            }
        }
        testReport.log('Resources','Completed the section');
    }

    generateRandomNum(max) {
        return Math.floor(Math.random() * max);
    }

    async selectSharingResults() {
        await page.locator(elements.consultationNotes.radSharingResults).click();
        testReport.log('Sharing the Results','Completed the section');
    }
}

module.exports = {ReportPage};