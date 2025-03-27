module.exports = {

    survey: {
        btnLetsGo: 'button[class="begin ng-binding"]',
        btnBegin: 'button[class="ng-binding"]',
        btnContinue: 'button[class="ng-binding ng-scope"]',
        lblQuestionText: '//div[@class="fieldset ng-scope normal center"] | //div[@class="fieldset ng-scope center normal"] | //div[@class="fieldset ng-scope tall center"]',
        divQuesChoice: '//div[@class="fieldset ng-scope normal center"]//ul//li | //div[@class="fieldset ng-scope center normal"]//ul//li | //div[@class="fieldset ng-scope tall center"]//ul//li',
        txtareaResponse:'div[class="fieldset ng-scope normal center"] textarea',
        btnTxtareaSubmit: 'div[class="fieldset ng-scope normal center"] button',
        btnSaveProgress: 'button[class="save ng-binding ng-scope"]',
        lblRadioQuesText: 'div[class="fieldset ng-scope center tall"]',
        lblRadioQuesOptions: '//div[@class="fieldset ng-scope center tall"]/ul/li',
        drpQuestion: '//div[contains(@class,"fieldset ng-scope normal center")]//select',
        drpQuestion1: '//*[contains(@class,"select ng-scope")]//select',
        drpQuestionOption: 'div[class="fieldset ng-scope normal center"] select option',
        drpQuestionOption1: '[class="select ng-scope"] select option',
        btnSaveAndSubmit: 'div[class="fieldset ng-scope normal center"] input[value="Save and submit"]',
        lblTotalQues: 'span[class="progress ng-binding"]',
        frmSurvey: '//form[@class="ng-pristine ng-valid ng-scope"]/div[1]',
        imgChkmrkCompleted: 'img[class="checkCompletion"]',
        btnEngagementReport: '//button//*[text()="Engagement"]',
        btnPrincipalReport: '//button//*[text()="School Leaders"]',
        btnExitReport: '//button//*[text()="Exit"]',
        btnConsultation: '//button//*[text()="Consultation Notes"]',
        txtSearch: '#search',
        btnFirstReportTile: '#report-selection li:nth-of-type(1) button',
        btnPrint: 'button[class*="print"]',
        btnDashboard: '//button//span[text()="Dashboard"]'
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
        divEngagementBar: '//div[@class="engagement-bar"]',
        btnChangeCluster: '//button[contains(text(),"Change Cluster")]',
        btnSurveyTypes: '//div[@class="reports"]/button'
    },

    exitReport: {
        lblTitle: '//h1[text()="Exit Data Reports"]',
        btnDistrict: '//button[text()="District"]',
        btnDistrictTile: '//ul[contains(@class,"filtering exit")]/li[1]/button',
        chrtExit: '//barchart'
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
        mnu5: '[class="ul"] li:nth-of-type(5) button',
        mainTile1: '[class="ul tiles"] li:nth-of-type(1) button',
        mainTile2: '[class="ul tiles"] li:nth-of-type(2) button',
        mainTile3: '[class="ul tiles"] li:nth-of-type(3) button',
        mainTile4: '[class="ul tiles"] li:nth-of-type(4) button'
    }
    };
    