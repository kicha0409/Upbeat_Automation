module.exports = {

    survey: {
        btnLetsGo: 'button[class="begin ng-binding"]',
        btnBegin: 'button[class="ng-binding"]',
        btnContinue: 'button[class="ng-binding ng-scope"]',
        lblQuestionText: '(//div[@class="fieldset ng-scope normal center"])[1] | (//div[@class="fieldset ng-scope center normal"])[1] | (//div[@class="fieldset ng-scope tall center"])[1]',
        divQuesChoice: '(//div[@class="fieldset ng-scope normal center"])[1]//ul//li | (//div[@class="fieldset ng-scope center normal"])[1]//ul//li | (//div[@class="fieldset ng-scope tall center"])[1]//ul//li',
        txtareaResponse:'(//div[@class="fieldset ng-scope normal center"]//textarea)[1]',
        btnTxtareaSubmit: 'div[class="fieldset ng-scope normal center"] button',
        btnSaveProgress: 'button[class="save ng-binding ng-scope"]',
        lblRadioQuesText: 'div[class="fieldset ng-scope center tall"]',
        lblRadioQuesOptions: '//div[@class="fieldset ng-scope center tall"]/ul/li',
        // drpQuestion: '//div[contains(@class,"fieldset ng-scope normal center")]//select | //div[contains(@class,"fieldset ng-scope center tall")]//select',
        drpQuestion: '(//select[@ng-model="question.userResponse"])[1]',
        drpQuestion1: '//*[contains(@class,"select ng-scope")]//select',
        // drpQuestionOption: '//div[contains(@class,"fieldset ng-scope normal center")]//select/option | //div[contains(@class,"fieldset ng-scope center tall")]//select/option',
        drpQuestionOption: '(//select[@ng-model="question.userResponse"])[1]/option',
        drpQuestionOption1: '[class="select ng-scope"] select option',
        drpSelectOption: '//div[@class="fieldset ng-scope normal center"]//select | //div[contains(@class,"fieldset ng-scope center tall")]//select',
        btnSaveAndSubmit: 'div[class="fieldset ng-scope normal center"] input[value="Save and submit"]',
        lblTotalQues: 'span[class="progress ng-binding"]',
        // frmSurvey: '//form[@class="ng-pristine ng-valid ng-scope"]/div[1]',
        frmSurvey: '//form[@id="form-desktop-view"]',
        imgChkmrkCompleted: 'img[class="checkCompletion"]',
        btnEngagementReport: '//button//*[text()="Engagement"]',
        btnPrincipalReport: '//button//*[text()="School Leaders"]',
        btnExitReport: '//button//*[text()="Exit"]',
        btnConsultation: '//button//*[text()="Consultation Notes"]',
        txtSearch: '#search',
        btnFirstReportTile: '#report-selection li:nth-of-type(1) button',
        btnPrint: 'button[class*="print"]',
        btnDashboard: '//button//span[text()="Dashboard"]',
        divConsultSchool : '//ul[contains(@class,"engagement")]/li//*[text()="QA Consult School I"]',
        txtQuestionFirst: '(//form[@id="form-desktop-view"]//*[@class="questiontext ng-binding"])[1]/parent::legend/following-sibling::textarea',
        txtQuestionSecond: '(//form[@id="form-desktop-view"]//*[@class="questiontext ng-binding"])[2]/parent::legend/following-sibling::textarea',
        drpQuestionFirst: '(//form[@id="form-desktop-view"]//*[@class="questiontext ng-binding"])[1]/parent::legend/following-sibling::span/select',
        drpQuestionSecond: '(//form[@id="form-desktop-view"]//*[@class="questiontext ng-binding"])[2]/parent::legend/following-sibling::span/select',
        drpQuestionFirstCount: '(//form[@id="form-desktop-view"]//*[@class="questiontext ng-binding"])[1]/parent::legend/following-sibling::span/select/option',
        drpQuestionSecondCount: '(//form[@id="form-desktop-view"]//*[@class="questiontext ng-binding"])[2]/parent::legend/following-sibling::span/select/option',
        optQuestionFirst: '(//form[@id="form-desktop-view"]//*[@class="questiontext ng-binding"])[1]/parent::legend/following-sibling::ul',
        optQuestionSecond: '(//form[@id="form-desktop-view"]//*[@class="questiontext ng-binding"])[2]/parent::legend/following-sibling::ul',
        optQuestionFirstCount:'(//form[@id="form-desktop-view"]//*[@class="questiontext ng-binding"])[1]/parent::legend/following-sibling::ul/li',
        optQuestionSecondCount:'(//form[@id="form-desktop-view"]//*[@class="questiontext ng-binding"])[2]/parent::legend/following-sibling::ul/li',
        btnTextareacontinue: '//form[@id="form-desktop-view"]//div[@class="fieldset ng-scope normal center"]//*[contains(@class,"text-buttons")]//button',
        matQuestionFirst: '(//form[@id="form-desktop-view"]//div[@class="matrix-desktop ng-scope"])[1]',
        matQuestonSecond: '(//form[@id="form-desktop-view"]//div[@class="matrix-desktop ng-scope"])[2]',
        matOptions: '(//div[contains(@class,"matrix-grid options-")])[1]//div[@class="matrix-row ng-scope"][1]//div[@class="matrix-option-cell ng-scope"]',
        matQuestions: '(//div[contains(@class,"matrix-grid options-")])[1]//div[@class="matrix-row ng-scope"]',
        btnmatrixNext: '(//div[contains(@class,"matrix-pagination")])[1]//button[contains(@class,"matrix-next")]'
        },

    engagementReport: {
        drpInterval: 'select[name="interval"]',
        drpIntervalOptions: 'select[name="interval"] option',
        lblTotalQues: '[class="p stat hide"] [class="label"]',
        lblTotalQuesValue: '[class="p stat hide"] [class="value"]',
        lblCompletion: '//*[@class="p stat"][1]//*[@class="label"]',
        lblCompletionValue: '//*[@class="p stat"][1]//*[@class="value"]',
        lblParticipation: '//*[@class="p stat"][2]//*[@class="label"]',
        lblParticipationvalue: '//*[@class="p stat"][2]//*[@class="label"]',
        btnComparison: 'div[class="buttons"] button',
        drpComparison: '#modal-comparison-network',
        btnComparisonSubmit: 'input[value="Submit"]',
        btnResults: '//div[@class="navigation ng-star-inserted"]/button[1]',
        btnQuestions: '//div[@class="navigation ng-star-inserted"]/button[2]',
        btnSchools: '//div[@class="navigation ng-star-inserted"]/button[3]',
        btnHeatmap: '//div[@class="navigation ng-star-inserted"]/button[4]',
        btnStaff: '//button[text()="Staff"]',
        btnAddFilter: '//div[@class="buttons"]/button[1]',
        chkFemale: '//label[text()="Female"]',
        btnApply: '//*[text()="Apply"]',
        divEngagementTile: '//ul[contains(@class,"engagement")]/li',
        divExitTile: '//ul[contains(@class,"exit")]/li',
        divPrincipalTile: '//ul[contains(@class,"principal")]/li',
        divEngagementBar: '//div[@class="engagement-bar"]',
        divExitStdQuestions: '//div[contains(@class,"non-standard-questions")]',
        divPrincipalStdQuestions: '//div[contains(@class,"categories-table-header")]',
        btnChangeCluster: '//button[contains(text(),"Change Cluster")]',
        btnSurveyTypes: '//div[@class="reports"]/button'
    },

    exitReport: {
        lblTitle: '//h1[text()="Exit Data Reports"]',
        btnDistrict: '//button[text()="District"]',
        btnDistrictTile: '//ul[contains(@class,"filtering exit")]/li[1]/button',
        chrtExit: '//barchart',
        lblLessThanFourRecords: '//div[contains(@class,"categories-table-header")]/p[2]'
    },

    reportResultspage: {
        lblCategory: '//div[@class="category ng-star-inserted"]',
        lblCategoryNameinTooltipModal: '//div[@class="modal-header ng-star-inserted"]',
        lblTooltipContent: '//div[@class="modal-body ng-star-inserted"]/p',
        lblTooltipLink: '//div[@class="modal-body ng-star-inserted"]/p/a',
        lblTooltipClose: '//div[@class="modal-header ng-star-inserted"]/button'
    },

    reportQuestionsPage: {
        divCategory: '//div[@class="category-block ng-star-inserted"]'
    },
    
    reportSchoolsPage: {
        lblSchool: '//div[contains(@class,"categories-table-header")]/p[1]',
        lblEngScore: '//div[contains(@class,"categories-table-header")]/p[2]',
        lblComparison: '//div[contains(@class,"categories-table-header")]/p[4]',
        lblSchoolList: '//div[contains(@class,"category ng-star-inserted")]'
    },

    reportsHeatmapPage: {
        drpCategory: '//select[@name="demographic"]',
        lblLegend :'//div[@class="right-block"]/div'
    },

    reportsLoginPage: {
        txtUserName: '#username',
        txtPassword: '#password',
        btnSubmit: '[type="submit"]'
    },

    reportsDashboard: {
        divFirstLogin: '[class="menu open render"]',
        divMenBarOn: '[class="menu render open"]',
        divMenubarOff: '[class="menu render"]',
        divDashboardHeader: '[class="dashboard-header"] h1',
        btnMenuShowHide: '[class="menu-header"] button',
        mnu1: '[class="ul"] li:nth-of-type(1) button',
        mnu2: '[class="ul"] li:nth-of-type(2) button',
        mnu3: '[class="ul"] li:nth-of-type(3) button',
        mnu4: '[class="ul"] li:nth-of-type(4) button',
        mnu5: '[class="ul"] li:nth-of-type(6) button',
        mainTile1: '[class="ul tiles"] li:nth-of-type(1) button',
        mainTile2: '[class="ul tiles"] li:nth-of-type(2) button',
        mainTile3: '[class="ul tiles"] li:nth-of-type(3) button',
        mainTile4: '[class="ul tiles"] li:nth-of-type(5) button'
    },

    consultationReport: {
        drpInterval: 'select[name="interval"]',
        drpSchool: '//select[@name="school-selection"]',
        lblSchool: 'label[for="school-selection"]',
        lblInterval: '//label[text()="Interval"]',
        lblResponseRate: '//h3[text()="Response Rate"]',
        lblResponseRateSurveyType: '//h3[text()="Response Rate"]/parent::div//div[@class="metric ng-star-inserted"]',
        lblHeader: '//div[contains(@class,"title-container")]/h2',
        lblDate: '//div[contains(@class,"title-container")]//*[@class="info"][1]',
        lblAttendee: '//div[contains(@class,"title-container")]//*[@class="info"][2]',
        lblOverAllEngagement: '//h3[text()="Overall Engagement"]',
        lblOverAllEngagementSurveyType: '//h3[text()="Overall Engagement"]/parent::div//div[@class="stats-bar ng-star-inserted"]',
        lblComparison: '//h3[text()="Comparison to District Average"]',
        lblComparisonSurveyType: '//h3[text()="Comparison to District Average"]/parent::div/div',
        lblAreaOfStrength: '//div[@class="summary-container"]/div[1]//h3',
        lblAreaOfStrengthSurveyType: '//div[@class="summary-container"]/div[1]//div[@class="summary-content"]//div[@class="table-block num-2 ng-star-inserted"]',
        lblAlreaOfStrengthFeatures: '//div[@class="summary-container"]/div[1]//div[@class="summary-content"]//div[@class="table-block num-2 ng-star-inserted"][1]/div',
        lblAreaOfImprovement: '//div[@class="summary-container"]/div[2]//h3',
        lblAreaOfImprovementSurveyType: '//div[@class="summary-container"]/div[2]//div[@class="summary-content"]//div[@class="table-block num-2 ng-star-inserted"]',
        lblAction: '//div[@class="summary-container"]/div[3]//h3',
        lblActionSurveyType: '//div[@class="summary-container"]/div[3]//div[@class="summary-content"]/h4',
        lblRecommendedResources: '//h3[text()="Recommended Resources"]',
        lblRecommendedResourcesSurveyType: '//h3[text()="Recommended Resources"]/parent::div//following-sibling::div/ul',
        btnPrintPdf: '//button[text()="Print PDF"]'
    }   
    };
    