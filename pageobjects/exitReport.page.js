const el = require('./elements/elements.js');
const td = require('./testdata.js');
const { expect } = require('@playwright/test');
const { ReportUtils } = require('./../setup/reportUtils.js');

const testReport = new ReportUtils();

class ExitReportPage {
    
    constructor() {
        this.btnExpand = 'div[class*="page questions menu-open"] button';
    }

    async verifyExitReport() {
        expect(this.btnExpand).toBeVisible({timeout: 25000});
        testReport.log("Exit Report","Report page is loaded successfully");
    }
}

module.exports = { ExitReportPage };
