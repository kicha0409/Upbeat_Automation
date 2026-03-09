const el = require('./elements/elements.js');
class SurveyPage {

constructor() {
this.surveyQuestions = {
  Q1: "What do you value most about working at this school?",
  Q2: "What challenges do you face in your role that impact your ability to teach effectively?",
  Q3: "How supported do you feel by school leadership, and what could be improved?",
  Q4: "What professional development opportunities would help you grow in your role?",
  Q5: "How well do you feel your contributions are recognized and appreciated?",
  Q6: "What changes would make the school a better place to work for teachers?",
  Q7: "How would you describe the collaboration and communication among staff?",
  Q8: "What resources or tools do you feel are missing that would enhance your teaching experience?",
  Q9: "What aspects of the school culture make you feel included or excluded?",
  Q10: "If you could suggest one improvement to retain teachers long-term, what would it be?"
};

this.surveyResponses = {
    Q1: [
    "I appreciate the supportive environment from Principal John, who always checks in on us personally.",
    "The collaboration with colleagues like Mr. Smith in the science department makes teaching enjoyable.",
    "I value the strong parent-teacher relationships, especially with families like Asian who are very engaged.",
    "The school library, managed by Ms. Kim, is a fantastic resource for both staff and students.",
    "I feel proud of the reputation our school has in Boston, and being part of that community is rewarding."
  ],
    Q2: [
    "Large class sizes in Grade 8 make it difficult to give individual attention.",
    "Technology issues, like slow internet in Room 204, disrupt lessons.",
    "Balancing administrative tasks with teaching leaves little time for lesson planning.",
    "Students with diverse learning needs require more support staff than we currently have. African American students in particular need more resources.",
    "Noise from construction near the playground often interrupts my English classes. Teachers between age 30 and 35 are particularly affected."
],
Q3: [
"Principal Smith is approachable, but more structured feedback sessions would help. Female principal is more preferable.",
"I feel supported in terms of resources, but decision-making could be more transparent.",
"Leadership is strong, though I’d appreciate more recognition for extracurricular contributions.",
"The administration is responsive, but communication about policy changes could be clearer.",
"I feel supported, but mentorship programs led by senior staff like Mr. Sean would be beneficial. provided feedback of being male"

  ],
Q4: [
    "Workshops on integrating AI tools into teaching would be valuable. I have experience ranging 10-12 years",
"Training in differentiated instruction for special needs students.",
"Opportunities to attend national conferences like the CBSE Teachers’ Summit.",
"Sessions on classroom management strategies for large groups.",
"Collaboration with universities for advanced subject-specific training."

  ],
Q5: [
    "My efforts in organizing the annual science fair were acknowledged by the principal. I am a teacher",
"I sometimes feel overlooked compared to teachers in higher grades. I have supporting staffs",
"Parents often express gratitude, which makes me feel valued.I have experience ranging 10-12 years",
"Recognition is mostly informal; formal awards would motivate staff more. Department staffs should be more appreciated",
"I feel appreciated when students like Ananya share how my lessons helped them. School need a lot of improvement"

  ],
Q6: [
    "Reducing administrative paperwork would free up teaching time. I completed Batchelors degress",
"Improved classroom infrastructure, like better projectors. I completed Masters degress",
"More flexible scheduling for extracurricular activities. I completed Doctorate degress",
"Dedicated quiet spaces for teachers to plan and reflect. I am looking for job and have experience of 8 years.",
"Regular wellness programs to reduce stress. I completed Batchelors degress and have experience of 15 years."

  ],
Q7: [
    "Collaboration is strong, especially during weekly staff meetings. I teach for Grade 5",
"Communication between departments could be more streamlined. I teach for Grade 6",
"I enjoy working with Ms. Kavitha in the math department; we share resources often. I teach for Grade 7",
"Sometimes information is shared last-minute, which causes confusion. I teach for Grade 8",
"Overall, teamwork is good, but cross-grade collaboration could improve. I teach for Grade 9"
  ],
Q8: [
"Access to updated laptops for teachers. I am a full time teacher with 10 years of experience.",
"More interactive digital content for history lessons. I am a part time teacher with 5 years of experience.",
"Additional lab equipment for science experiments. I am looking for full time job and have experience of 12 years.",
"Better classroom furniture for younger students. I like to work as a substitute teacher and have experience of 8 years.",
"Subscription to online learning platforms like Khan Academy. I like to relieve from the job"

  ],
Q9: [
    'The holiday celebrations and potlucks make me feel like part of a family. Asian people',
'I feel excluded as a newer teacher because thats how we have always done it. African people',
'The commitment to DEI (Diversity, Equity, and Inclusion) is visible and genuine. American people',
'As a non-binary staff member, I don’t always feel the culture is inclusive. Asian-American people',
'The school spirit at pep rallies and games is infectious and welcoming. Asian people'

  ],
Q10: [
    'Implement a four-day work week or a "flex" day for planning. I live in Atlanta and commute takes 1 hour.',
'Create a clear career ladder with salary bumps for years of service. I live in Boston and have 10 years of experience.',
'Substantially reduce the busy work that doesnt impact student learning. I live in new York and have 12 years of experience.',
'Provide child care options for staff members with young children. I live in Chicago and have 8 years of experience.',
'Increase starting salaries to be more competitive with other districts. I live in Houston and have 15 years of experience.'
  ],

}
}   

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
    /* let ele = page.locator(el.survey.frmSurvey);
    let cName;
    cName = await ele.evaluate(element => element.className); */
    
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
            const questiontext = await page.locator(el.survey.txtareaQuestion).innerText();
            const currentKey = Object.keys(surveyQuestions).find(
                key => questiontext.trim().includes(surveyQuestions[key])
            );

                if (currentKey) {
                    // Pick a random response from the array
                    const responses = surveyResponses[currentKey];
                    const randomIndex = Math.floor(Math.random() * responses.length);
                    const response = responses[randomIndex];

                    // Fill the response
                    await page.fill(el.survey.txtareaResponse,response);
                    
                } else {
                    await page.fill(el.survey.txtareaResponse,"PW Test - QA Comments");
                }

              // await page.fill(el.survey.txtareaResponse,"PW Test - QA Comments");
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
                fillSurveyResponse(await page.locator(el.survey.txtQuestionFirstText).innerText(),el.survey.txtQuestionFirst);
                // await page.fill(el.survey.txtQuestionFirst,"PW Test - QA Comments");
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
                await this.fillSurveyResponse(await page.locator(el.survey.txtQuestionSecondText).innerText(),el.survey.txtQuestionSecond);
                // await page.fill(el.survey.txtQuestionSecond,"PW Test - QA Comments");
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

async fillSurveyResponse(question, txtFeild) {
    const questiontext = question;
            const currentKey = Object.keys(this.surveyQuestions).find(
                key => questiontext.trim().includes(this.surveyQuestions[key])
            );

                if (currentKey) {
                    // Pick a random response from the array
                    const responses = this.surveyResponses[currentKey];
                    const randomIndex = Math.floor(Math.random() * responses.length);
                    const response = responses[randomIndex];

                    // Fill the response
                    await page.fill(txtFeild,response);
                    
                } else {
                    await page.fill(txtFeild,"PW Test - QA Comments");
                }
        }

getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

}
module.exports = {SurveyPage};