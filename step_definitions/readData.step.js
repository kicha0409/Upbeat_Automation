const { Given } = require('@cucumber/cucumber')
const { ReadData } = require('../pageobjects/ReadData');

const readData = new ReadData();

Given('Read the data from google sheet', { timeout: 100 * 1000 }, async function () {
    const myData = await readData.readGoogleSheet('1nNWp17IQ4j4dccl8BVl_FpZFlzte9XshNa7T_J_qDPU','secret!B1');
    console.log(myData);
});
