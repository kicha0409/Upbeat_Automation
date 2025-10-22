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
       
       // radio type questions
        if(await page.locator(el.survey.lblRadioQuesText).isVisible()) {
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
                    questType = await page.locator('(//div[@class="fieldset ng-scope normal center"])[1]//ul/li'+'['+intNum+']');
                    break;
                case 'fieldset ng-scope center normal':
                    questType = await page.locator('(//div[@class="fieldset ng-scope center normal"])[1]//ul/li'+'['+intNum+']');
                    break;    
                case 'fieldset ng-scope tall center':
                    questType = await page.locator('(//div[@class="fieldset ng-scope tall center"])[1]//ul/li'+'['+intNum+']');
                    break;
                default:
                    questType = await page.locator('(//div[@class="fieldset ng-scope normal center"])[1]//ul/li'+'['+intNum+']');
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

        //dropdown type questions
         else if(await page.locator(el.survey.drpQuestion).isVisible()) {
            const choiceCount = await page.locator(el.survey.drpQuestionOption).count();
            const intNum = Math.floor(Math.random() * choiceCount);
            // await page.selectOption('//div[@class="fieldset ng-scope normal center"]//select',{ index: intNum});
            await page.selectOption(el.survey.drpSelectOption,{ index: intNum});
            console.log("Question type: Dropdown");
        }

        await page.waitForTimeout(1000);
        
     } while(await page.locator(el.survey.btnSaveAndSubmit).isHidden());

    await page.locator(el.survey.btnSaveAndSubmit).click();
    await page.waitForTimeout(5000);
    await page.waitForSelector(el.survey.imgChkmrkCompleted,{state: 'visible'});
    console.log("------------------ END OF SURVEY -------------------");
}

async surveyQuesUpdated() {
    
    let Ques = await page.innerText(el.survey.lblTotalQues);
    let quesArray = Ques.split("/");
    let totalQues = quesArray[1].split(" ");
    await page.waitForTimeout(2000);
    let ele = page.locator(el.survey.frmSurvey);
    // let cName;
    // cName = await ele.evaluate(element => element.className);
    let quesNo = 1;
    let matQues = 1;
    let previousQuesmatrix = false;
    do {
       // text area question
        if(quesNo === 1) {
            if(await page.locator(el.survey.txtQuestionFirst).isVisible()) {
                await page.fill(el.survey.txtQuestionFirst,"PW Test - QA Comments");
                try {
                    if(await page.locator(el.survey.btnTxtareaSubmit).isVisible()) {
                    await page.locator(el.survey.btnTxtareaSubmit).click();
                    console.log("Question type: Textarea");
                    }
                }
                catch(error) {
                    await page.locator(el.survey.btnTextareacontinue).click();
                    console.log("Question type: Textarea");
                }
                previousQuesmatrix = false;
            }

            // option type questions
            else if(await page.locator(el.survey.optQuestionFirst).isVisible()) {
                const choiceCount = await page.locator(el.survey.optQuestionFirstCount).count();
                const intNum = this.getRandomInt(1,choiceCount);
                
                if(intNum!=0)
                    await page.locator(`${el.survey.optQuestionFirstCount}[${intNum}]`).click();
                else
                    await page.locator(`${el.survey.optQuestionFirstCount},[1]`).click();
                console.log("Question type: Choice Type");
                previousQuesmatrix = false;
            }

            //dropdown type questions
            else if(await page.locator(el.survey.drpQuestionFirst).isVisible()) {
                const choiceCount = await page.locator(el.survey.drpQuestionFirstCount).count();
                const intNum = Math.floor(Math.random() * choiceCount);
                // await page.selectOption('//div[@class="fieldset ng-scope normal center"]//select',{ index: intNum});
                await page.selectOption(el.survey.drpQuestionFirst,{ index: intNum});
                console.log("Question type: Dropdown");
                previousQuesmatrix = false;
            }

            // matrix question
            else if(await page.locator(el.survey.matQuestionFirst).isVisible()) {
                // count the number of question
                const matQuesCount = await page.locator(`(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"]`).count();
                // count the options
                let i;
                const matOptionscount = await page.locator(`(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][1]//div[@class="matrix-option-cell ng-scope"]`).count();
                for (i=1;i<=matQuesCount;i++) {  
                    const intNum = this.getRandomInt(1,matOptionscount);
                    if(intNum!=0)
                        await page.locator(`(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][${i}]//div[@class="matrix-option-cell ng-scope"][${intNum}]`).click();
                    else
                        await page.locator(`(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][${i}]//div[@class="matrix-option-cell ng-scope"][1]`).click();
                }
                const isPageNumbervisible = await page.locator('(//h3[@class="matrix-stem ng-binding"])[1]/following-sibling::div').isVisible();
                if(!isPageNumbervisible) {
                    previousQuesmatrix = true;
                }
                else {
                    let quesNumber = await page.locator('(//h3[@class="matrix-stem ng-binding"])[1]/following-sibling::div').innerText();
                    let findQuestNumber = quesNumber.split(' ');
                    if(Number(findQuestNumber[1]) === Number(findQuestNumber[3]))
                    previousQuesmatrix = true;
                    else
                    previousQuesmatrix = false;
                    const btnName = await page.locator(el.survey.btnmatrixNext).innerText();
                    if(btnName.includes('Continue')) {
                        await page.locator(`(//div[contains(@class,"matrix-pagination")])[${matQues}]//button[contains(@class,"matrix-next")]`).click();
                        matQues = matQues + 1;
                    }
                    else
                    await page.locator(`(//div[contains(@class,"matrix-pagination")])[${matQues}]//button[contains(@class,"matrix-next")]`).click();  
                }
            }
            if(previousQuesmatrix)
                quesNo = 1;
            else
                quesNo = 2;
        }

        else if(quesNo === 2) {
            if(await page.locator(el.survey.txtQuestionSecond).isVisible()) {
                await page.fill(el.survey.txtQuestionSecond,"PW Test - QA Comments");
                try {
                    if(await page.locator(el.survey.btnTxtareaSubmit).isVisible()) {
                    await page.locator(el.survey.btnTxtareaSubmit).click();
                    console.log("Question type: Textarea");
                    }
                }
                catch(error) {
                    await page.locator(el.survey.btnTextareacontinue).click();
                    console.log("Question type: Textarea");
                }
                previousQuesmatrix = false;
            }

            // option type questions
            else if(await page.locator(el.survey.optQuestionSecond).isVisible()) {
                const choiceCount = await page.locator(el.survey.optQuestionSecondCount).count();
                const intNum = this.getRandomInt(1,choiceCount);
                
                if(intNum!=0)
                    await page.locator(`${el.survey.optQuestionSecondCount}[${intNum}]`).click();
                else
                    await page.locator(`${el.survey.optQuestionSecondCount},[1]`).click();
                console.log("Question type: Choice Type");
                previousQuesmatrix = false;
            }

            //dropdown type questions
            else if(await page.locator(el.survey.drpQuestionSecond).isVisible()) {
                const choiceCount = await page.locator(el.survey.drpQuestionSecondCount).count();
                const intNum = Math.floor(Math.random() * choiceCount);
                // await page.selectOption('//div[@class="fieldset ng-scope normal center"]//select',{ index: intNum});
                await page.selectOption(el.survey.drpQuestionSecond,{ index: intNum});
                console.log("Question type: Dropdown");
                previousQuesmatrix = false;
            }

            // matrix question
            else if(await page.locator(el.survey.matQuestonSecond).isVisible()) {
                // count the number of question
                const matQuesCount = await page.locator(`(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"]`).count();
                // count the options
                let i;
                const matOptionscount = await page.locator(`(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][1]//div[@class="matrix-option-cell ng-scope"]`).count();
                for (i=1;i<=matQuesCount;i++) {  
                    const intNum = this.getRandomInt(1,matOptionscount);
                    if(intNum!=0)
                        await page.locator(`(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][${i}]//div[@class="matrix-option-cell ng-scope"][${intNum}]`).click();
                    else
                        await page.locator(`(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][${i}]//div[@class="matrix-option-cell ng-scope"][1]`).click();
                }
                const isPageNumbervisible = await page.locator('(//h3[@class="matrix-stem ng-binding"])[1]/following-sibling::div').isVisible();
                if(!isPageNumbervisible) {
                    previousQuesmatrix = true;
                }
                else {
                    let quesNumber = await page.locator('(//h3[@class="matrix-stem ng-binding"])[1]/following-sibling::div').innerText();
                    let findQuestNumber = quesNumber.split(' ');
                    if(Number(findQuestNumber[1]) === Number(findQuestNumber[3]))
                    previousQuesmatrix = true;
                    else
                    previousQuesmatrix = false;
                    const btnName = await page.locator(el.survey.btnmatrixNext).innerText();
                    if(btnName.includes('Continue')) {
                        await page.locator(`(//div[contains(@class,"matrix-pagination")])[${matQues}]//button[contains(@class,"matrix-next")]`).click();
                        matQues = matQues + 1;
                    }
                    else
                    await page.locator(`(//div[contains(@class,"matrix-pagination")])[${matQues}]//button[contains(@class,"matrix-next")]`).click();  
                }
            }
            if(previousQuesmatrix)
                quesNo = 1;
            else
                quesNo = 2;
        }
       // radio type questions
        /* if(await page.locator(el.survey.lblRadioQuesText).isVisible()) {
            const choiceCount = await page.locator(el.survey.lblRadioQuesOptions).count();
            const intNum = this.getRandomInt(1,choiceCount);
            if(intNum!=0)
                await page.click(el.survey.lblRadioQuesOptions+'['+intNum+']');
            else
                await page.click(el.survey.lblRadioQuesOptions+'[1]');
                console.log("Question type: Radio");
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