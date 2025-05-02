const el = require('./elements/elements.js');
class SurveyPage {


async launchSurvey(url) {
    await page.goto(url);
    await page.waitForLoadState('load');
    
}

async completeInitialSteps() {
    await page.locator(el.survey.btnLetsGo).click();
    const begin = page.locator(el.survey.btnBegin);
    await begin.waitFor();
    await page.locator(el.survey.btnBegin).click();
    const cont = page.locator(el.survey.btnContinue);
    await cont.waitFor();
    await page.locator(el.survey.btnContinue).click();
    // await page.waitForTimeout(10000);
}

async surveyQues() {
    
    let Ques = await page.innerText(el.survey.lblTotalQues);
    let quesArray = Ques.split("/");
    let totalQues = quesArray[1].split(" ");
    await page.waitForTimeout(2000);
    let ele = page.locator(el.survey.frmSurvey);
    let cName;
    cName = await ele.evaluate(element => element.className);
    
    do {
       
        //dropdown type questions
         if(await page.locator(el.survey.drpQuestion).isVisible()) {
            const choiceCount = await page.locator(el.survey.drpQuestionOption).count();
            const intNum = Math.floor(Math.random() * choiceCount);
            // await page.selectOption('//div[@class="fieldset ng-scope normal center"]//select',{ index: intNum});
            await page.selectOption(el.survey.drpSelectOption,{ index: intNum});
            console.log("Question type: Dropdown");
        }

       // radio type questions
        else if(await page.locator(el.survey.lblRadioQuesText).isVisible()) {
            const choiceCount = await page.locator(el.survey.lblRadioQuesOptions).count();
            const intNum = this.getRandomInt(1,choiceCount);
            if(intNum!=0)
                await page.click(el.survey.lblRadioQuesOptions+'['+intNum+']');
            else
                await page.click(el.survey.lblRadioQuesOptions+'[1]');
                console.log("Question type: Radio");
        }

        // textarea questions
        else if(await page.locator(el.survey.txtareaResponse).isVisible()) {
            await page.fill(el.survey.txtareaResponse,"PW Test - QA Comments");
            try {
                if(await page.locator(el.survey.btnTxtareaSubmit).isVisible()) {
                await page.locator(el.survey.btnTxtareaSubmit).click();
                console.log("Question type: Textarea");
                }
            }
            catch(error) {
                await page.locator('div[class="fieldset ng-scope normal center"] [class*="text-buttons"] button').click();
                console.log("Question type: Textarea");
            }
        }

        // option type questions
        else if(await page.locator(el.survey.lblQuestionText).isVisible()) {
            const choiceCount = await page.locator(el.survey.divQuesChoice).count();
            const intNum = this.getRandomInt(1,choiceCount);
            const quesElement = await page.locator(el.survey.lblQuestionText);
            let strClassName = await quesElement.evaluate(element => element.className);
            let questType;
            switch(strClassName) {
                case 'fieldset ng-scope normal center':
                    questType = await page.locator('//div[@class="fieldset ng-scope normal center"]/ul/li'+'['+intNum+']');
                    break;
                case 'fieldset ng-scope center normal':
                    questType = await page.locator('//div[@class="fieldset ng-scope center normal"]/ul/li'+'['+intNum+']');
                    break;    
                case 'fieldset ng-scope tall center':
                    questType = await page.locator('//div[@class="fieldset ng-scope tall center"]/ul/li'+'['+intNum+']');
                    break;
                default:
                    questType = await page.locator('//div[@class="fieldset ng-scope normal center"]/ul/li'+'['+intNum+']');
                    break;
            }

            if(intNum!=0)
                await questType.click();
            else
                await page.click(el.survey.divQuesChoice,'[1]');
            console.log("Question type: Choice Type");
        }

         //dropdown2 type questions
         /* else if(await page.locator(el.survey.drpQuestion1).isVisible()) {
            const choiceCount = await page.locator(el.survey.drpQuestionOption1).count();
            const intNum = Math.floor(Math.random() * choiceCount);
            await page.selectOption('[class*="select ng-scope"] select',{ index: intNum});
            console.log("Question type: Dropdown");
        } */

        await page.waitForTimeout(1000);
        
     } while(await page.locator(el.survey.btnSaveAndSubmit).isHidden());

    await page.locator(el.survey.btnSaveAndSubmit).click();
    await page.waitForTimeout(5000);
    await page.waitForSelector(el.survey.imgChkmrkCompleted,{state: 'visible'});
    console.log("------------------ END OF SURVEY -------------------");
}

getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

}
module.exports = {SurveyPage};