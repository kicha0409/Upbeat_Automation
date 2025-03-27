const logger = require('./logger');

class ReportUtils {
  async log(currentPage, msg) {
    global.report += `${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')} - ${currentPage} : ${msg}</br>`;
    logger.info(`${currentPage} : ${msg}`);
  }

  async logInfo(msg) {
    global.report += `${msg}</br>`;
    logger.info(`${msg}`);
  }

  async logHdr(msg) {
    global.report += `<strong> <p style="color:green;">${msg}</p></strong>`;
    logger.info(msg);
  }

  async logTestSnapshot(currentPage, msg) {
    global.testSnapshot += `${currentPage} - ${msg}<br>`;
    logger.info(msg);
  }

  async logPass(currentPage, msg) {
    global.report += `<strong> <p style="color:green;">${currentPage} - ${msg}</p></strong>`;
    logger.info(msg);
  }

  async logFail(currentPage, msg) {
    global.report += `<strong> <p style="color:red;">${currentPage} - ${msg}</p></strong>`;
    logger.info(msg);
  }
}

module.exports = { ReportUtils };
