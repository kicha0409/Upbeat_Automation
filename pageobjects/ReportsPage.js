const el = require('./elements/elements.js');
const td = require('./testdata.js');
const { expect } = require('@playwright/test');
const { ReportUtils } = require('./../setup/reportUtils.js');

const testReport = new ReportUtils();

class ReportPage {
    
    constructor() {
    this.engagementTileCount = '';
    this.districtName = '';
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
        testReport.log('Engagement Report','Clicked on Engagement Report');
    }

    async verifyReportTiles(distName) {
        this.districtName = distName;
        await page.waitForTimeout(5000);
        this.engagementTileCount = await page.locator(el.engagementReport.divEngagementTile).count();
        expect(parseInt(this.engagementTileCount)).toBeGreaterThan(1);
        testReport.log("Report Portal","Engagement tiles are displayed successfully");
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
}
module.exports = {ReportPage};