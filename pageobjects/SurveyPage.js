const el = require("./elements/elements.js")
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
      Q10: "If you could suggest one improvement to retain teachers long-term, what would it be?",
      Q11: "How effectively do you feel the principal provides instructional support to teachers in enhancing student learning?",
      Q12: "How clear and consistent is the communication from the principal regarding school policies, expectations, and updates?",
      Q13: "How would you describe the principal’s leadership style, and how does it influence teacher motivation and morale?",
      Q14: "To what extent are teachers and staff included in decision-making processes led by the principal?",
      Q15: "How supportive is the principal in encouraging and facilitating professional development opportunities for teachers?",
      Q16: "How well does the principal recognize and celebrate the contributions of teachers and staff?",
      Q17: "How effectively does the principal handle conflicts or challenges among staff, students, or parents?",
      Q18: "How does the principal contribute to building a positive, inclusive, and collaborative school culture?",
      Q19: "How fairly and effectively does the principal allocate resources (time, budget, materials) to support teaching and learning?",
      Q20: "What actions taken by the principal would make you more likely to stay long-term and feel valued in this school?",
      Q21: "What were the main reasons that influenced your decision to leave the school?",
      Q22: "How would you describe your overall experience working at this school?",
      Q23: "What aspects of your role did you find most rewarding during your time here?",
      Q24: "What challenges or frustrations did you face that contributed to your decision to exit?",
      Q25: "How supported did you feel by school leadership and administration throughout your tenure?",
      Q26: "What changes in school policies or practices would have encouraged you to stay longer?",
      Q27: "How well were your contributions recognized and appreciated by colleagues and leadership?",
      Q28: "What professional development or growth opportunities did you feel were missing during your time here?",
      Q29: "How would you describe the school’s culture in terms of inclusively, collaboration, and communication?",
      Q30: "What suggestions would you give to help the school improve retention and make it a better workplace for teachers and staff?",
    }

    this.surveyResponses = {
      Q1: [
        "As a mid-career teacher in my 30s, I value the collaborative environment where colleagues share ideas freely, which makes teaching more engaging.",
        "Being a young teacher in my 20s, I appreciate the mentorship from senior staff that helps me grow professionally and personally.",
        "As a science teacher with 10+ years of experience, I value the school’s emphasis on student curiosity and hands-on learning.",
        "As a female teacher in my early 40s, I find the respect and trust given to educators here very motivating.",
        "Being a language teacher with 5 years of experience, I value the school’s focus on inclusivity and cultural diversity.",
      ],
      Q2: [
        "As a math teacher with large classes of 40+ students, I struggle to give individual attention, which affects learning outcomes.",
        "Being in my late 20s and relatively new to teaching, balancing administrative tasks with lesson planning is overwhelming.",
        "As a senior teacher with 15 years of experience, managing diverse learning needs without adequate support is challenging.",
        "As a female teacher in my 30s, limited access to updated teaching resources restricts creativity in lessons.",
        "Being a social studies teacher with 8 years of experience, curriculum demands often clash with the need for interactive teaching.",
      ],
      Q3: [
        "As a male teacher in my 40s, I feel leadership is approachable, but timely feedback on classroom practices would help.",
        "Being a young teacher in my 20s, I appreciate encouragement, though clearer communication channels would improve support.",
        "As a female teacher with 12 years of experience, leadership listens, but resource allocation could be more consistent.",
        "As a mid-career teacher in my 30s, I feel supported, yet recognition of teacher contributions could be stronger.",
        "Being a senior staff member, I value leadership’s openness, but quicker action on concerns would make a difference.",
      ],
      Q4: [
        "As a technology teacher in my 30s, workshops on AI and digital tools would enhance my teaching.",
        "Being a young teacher in my 20s, training in classroom management strategies would help me handle diverse groups.",
        "As a senior teacher with 15 years of experience, subject-specific research seminars would keep me updated.",
        "As a female teacher in my 40s, opportunities to collaborate with other schools would broaden my perspective.",
        "Being a mid-career language teacher, professional courses on differentiated instruction would improve my skills.",
      ],
      Q5: [
        "As a male teacher in my 30s, students often show appreciation, but formal recognition from leadership is limited.",
        "Being a young teacher in my 20s, peer recognition is strong, though structured acknowledgment would boost morale.",
        "As a female teacher with 10 years of experience, my efforts are noticed informally, but not always celebrated.",
        "As a senior teacher in my 40s, appreciation exists, but consistent recognition programs would help retention.",
        "Being a mid-career teacher, I feel valued, though more visible appreciation from management would be motivating.",
      ],
      Q6: [
        "As a female teacher in my 30s, reducing administrative workload would allow more focus on teaching.",
        "Being a young teacher in my 20s, better access to digital resources would improve lesson quality.",
        "As a senior teacher with 12 years of experience, smaller class sizes would enhance student engagement.",
        "As a male teacher in my 40s, more opportunities for collaboration across departments would strengthen teamwork.",
        "Being a mid-career teacher, transparent communication from leadership would build greater trust.",
      ],
      Q7: [
        "As a female teacher in my 30s, collaboration is strong, but communication could be more structured.",
        "Being a young teacher in my 20s, staff are supportive, though information sharing is inconsistent.",
        "As a senior teacher with 15 years of experience, teamwork is good, but meetings could be more productive.",
        "As a male teacher in my 40s, communication is open, but sometimes lacks clarity.",
        "Being a mid-career teacher, collaboration works well, though cross-department interaction could improve.",
      ],
      Q8: [
        "As a science teacher in my 30s, access to updated lab equipment would be beneficial.",
        "Being a young teacher in my 20s, interactive learning platforms would improve student engagement.",
        "As a senior teacher with 12 years of experience, additional classroom technology would support modern teaching.",
        "As a female teacher in my 40s, better access to reference books and journals would help.",
        "Being a mid-career math teacher, subject-specific teaching materials are still lacking.",
      ],
      Q9: [
        "As a female teacher in my 30s, the collaborative spirit makes me feel included.",
        "Being a young teacher in my 20s, celebrations of diversity strengthen my sense of belonging.",
        "As a senior teacher with 15 years of experience, sometimes decision-making excludes teacher input.",
        "As a male teacher in my 40s, peer support fosters belonging, but leadership could involve us more.",
        "Being a mid-career teacher, inclusive student activities make me feel part of the community.",
      ],
      Q10: [
        "As a female teacher in my 30s, clear career growth opportunities would encourage long-term commitment.",
        "Being a young teacher in my 20s, competitive compensation and benefits would help retention.",
        "As a senior teacher with 12 years of experience, reducing workload would maintain work-life balance.",
        "As a male teacher in my 40s, stronger recognition and appreciation programs would improve morale.",
        "Being a mid-career teacher, consistent professional development opportunities would ensure growth.",
      ],
      Q11: [
        "As a female teacher in my early 30s with 7 years of experience in English, I feel the principal provides strong instructional guidance, though more subject-specific resources would further enhance student learning.",
        "As a male math teacher in my late 20s, I appreciate the principal’s encouragement to adopt innovative methods, but clearer direction on curriculum priorities would help.",
        "As a senior science teacher in my 40s with 15 years of experience, the principal’s support for lab-based learning has been valuable, though consistency across departments could improve.",
        "As a young social studies teacher in my 20s, I find the principal approachable and supportive, but more structured mentoring would strengthen instructional support.",
        "As a female language teacher in my mid-30s, I value the principal’s emphasis on student-centered teaching, though additional training opportunities would be beneficial.",
      ],

      Q12: [
        "As a male teacher in my 40s, communication from the principal is generally clear, but updates on policy changes sometimes arrive too late.",
        "As a female teacher in my late 20s, I appreciate the transparency in communication, though more frequent staff meetings would help alignment.",
        "As a mid-career science teacher in my 30s, communication is consistent, but clarity on long-term goals could be improved.",
        "As a senior teacher with 12 years of experience, I find communication effective, though feedback loops for staff input are limited.",
        "As a young teacher in my 20s, I value the principal’s openness, but structured channels for announcements would reduce confusion.",
      ],

      Q13: [
        "As a female teacher in my 30s, the principal’s collaborative leadership style motivates me to contribute actively to school initiatives.",
        "As a male teacher in my 40s, I find the leadership supportive, though sometimes decisions feel top-down without teacher input.",
        "As a mid-career teacher in my 30s, the principal’s encouragement of innovation boosts morale, though recognition could be more visible.",
        "As a young teacher in my 20s, the principal’s approachable style helps me feel included, though clearer expectations would reduce stress.",
        "As a senior teacher with 15 years of experience, the leadership style is balanced, but more empowerment of experienced staff would be appreciated.",
      ],

      Q14: [
        "As a female teacher in my early 30s, I feel partially included in decision-making, though more structured involvement would strengthen trust.",
        "As a male teacher in my late 20s, I appreciate being consulted occasionally, but consistent participation would make me feel valued.",
        "As a senior teacher in my 40s, decisions often involve leadership only, and broader teacher input could improve outcomes.",
        "As a mid-career teacher in my 30s, I am included in curriculum discussions, but operational decisions rarely involve staff.",
        "As a female teacher with 10 years of experience, inclusion in decision-making is limited, and more collaborative forums would help.",
      ],

      Q15: [
        "As a young teacher in my 20s, the principal encourages professional growth, though more workshops on classroom management would be useful.",
        "As a male teacher in my 40s, I appreciate support for attending external conferences, though funding is limited.",
        "As a female teacher in my 30s, professional development opportunities are encouraged, but subject-specific training is lacking.",
        "As a senior teacher with 12 years of experience, the principal promotes growth, though structured career pathways would be more motivating.",
        "As a mid-career teacher in my 30s, I value the encouragement, but more collaboration with other schools would broaden exposure.",
      ],
      Q16: [
        "As a female teacher in my 30s with 8 years of experience, I feel my contributions are acknowledged occasionally, but a more formal recognition system would boost morale.",
        "As a male teacher in my 40s, appreciation from leadership is present, though consistent recognition across departments would make it stronger.",
        "As a young teacher in my 20s, peer recognition is motivating, but leadership acknowledgment is limited.",
        "As a senior teacher with 15 years of experience, my efforts are valued informally, yet structured appreciation programs would help retention.",
        "As a mid-career teacher in my 30s, recognition exists, but more visible appreciation from the principal would encourage long-term commitment.",
      ],

      Q17: [
        "As a female teacher in my 30s, the principal handles conflicts fairly, though quicker resolutions would reduce stress.",
        "As a male teacher in my 40s, I find conflict resolution effective, but sometimes decisions lack transparency.",
        "As a young teacher in my 20s, the principal is approachable, but more structured processes for resolving issues would help.",
        "As a senior teacher with 12 years of experience, conflicts are addressed, though follow-up communication could be stronger.",
        "As a mid-career teacher in my 30s, the principal manages challenges well, but involving staff more in solutions would improve outcomes.",
      ],

      Q18: [
        "As a female teacher in my 30s, the principal promotes inclusivity, which makes the school culture collaborative and welcoming.",
        "As a male teacher in my 40s, I appreciate the principal’s efforts to build a positive environment, though more cross-department activities would help.",
        "As a young teacher in my 20s, the principal’s encouragement of teamwork makes me feel included and supported.",
        "As a senior teacher with 15 years of experience, the culture is positive, but leadership could involve experienced staff more in shaping initiatives.",
        "As a mid-career teacher in my 30s, inclusivity is strong, though communication about cultural initiatives could be clearer.",
      ],

      Q19: [
        "As a female teacher in my 30s, resources are allocated fairly, though more investment in digital tools would enhance teaching.",
        "As a male teacher in my 40s, I find allocation effective, but sometimes budget priorities don’t align with classroom needs.",
        "As a young teacher in my 20s, resource distribution is supportive, though newer teachers could benefit from additional materials.",
        "As a senior teacher with 12 years of experience, allocation is fair, but transparency in decisions would build trust.",
        "As a mid-career teacher in my 30s, resources are adequate, though more focus on subject-specific needs would improve outcomes.",
      ],

      Q20: [
        "As a female teacher in my 30s, consistent career growth opportunities would encourage me to stay long-term.",
        "As a male teacher in my 40s, stronger recognition and appreciation programs would improve retention.",
        "As a young teacher in my 20s, competitive compensation and benefits would make me feel valued.",
        "As a senior teacher with 15 years of experience, reducing workload and administrative tasks would support long-term commitment.",
        "As a mid-career teacher in my 30s, structured professional development pathways would ensure growth and retention.",
      ],

      Q21: [
        "As a female teacher in my 30s with 7 years of experience, I decided to leave mainly due to workload pressures and limited work-life balance.",
        "As a male teacher in my 40s, the lack of career growth opportunities influenced my decision to exit.",
        "As a young teacher in my 20s, I felt compensation was not competitive compared to other schools.",
        "As a senior teacher with 15 years of experience, administrative demands outweighed teaching satisfaction.",
        "As a mid-career teacher in my 30s, limited recognition and appreciation contributed to my decision to move on.",
      ],

      Q22: [
        "As a female teacher in my 30s, my overall experience was positive, with supportive colleagues but challenging workloads.",
        "As a male teacher in my 40s, I enjoyed teaching here, though leadership communication could have been stronger.",
        "As a young teacher in my 20s, I valued the collaborative culture, but felt underprepared for diverse classroom needs.",
        "As a senior teacher with 12 years of experience, the school provided stability, though innovation was limited.",
        "As a mid-career teacher in my 30s, the experience was rewarding, but professional growth opportunities were scarce.",
      ],

      Q23: [
        "As a female teacher in my 30s, the most rewarding aspect was seeing students grow academically and personally.",
        "As a male teacher in my 40s, mentoring younger staff was fulfilling.",
        "As a young teacher in my 20s, building strong relationships with students was the highlight.",
        "As a senior teacher with 15 years of experience, contributing to curriculum development was rewarding.",
        "As a mid-career teacher in my 30s, collaborating with colleagues on innovative projects was most satisfying.",
      ],

      Q24: [
        "As a female teacher in my 30s, balancing administrative tasks with teaching was frustrating.",
        "As a male teacher in my 40s, limited resources for subject-specific teaching posed challenges.",
        "As a young teacher in my 20s, adapting to diverse student needs without adequate training was difficult.",
        "As a senior teacher with 12 years of experience, lack of recognition for long service was discouraging.",
        "As a mid-career teacher in my 30s, unclear communication from leadership often created stress.",
      ],

      Q25: [
        "As a female teacher in my 30s, I felt moderately supported, though more structured feedback would have helped.",
        "As a male teacher in my 40s, leadership was approachable, but action on concerns was slow.",
        "As a young teacher in my 20s, I appreciated encouragement, but mentoring was limited.",
        "As a senior teacher with 15 years of experience, support was present, but recognition was inconsistent.",
        "As a mid-career teacher in my 30s, leadership provided guidance, though resource allocation could improve.",
      ],

      Q26: [
        "As a female teacher in my 30s, reducing administrative workload would have encouraged me to stay.",
        "As a male teacher in my 40s, clearer career progression pathways would have made retention easier.",
        "As a young teacher in my 20s, competitive pay and benefits would have influenced me to remain.",
        "As a senior teacher with 12 years of experience, consistent recognition programs would have mattered.",
        "As a mid-career teacher in my 30s, more professional development opportunities would have motivated me to continue.",
      ],

      Q27: [
        "As a female teacher in my 30s, contributions were appreciated informally, but formal recognition was lacking.",
        "As a male teacher in my 40s, peer recognition was strong, though leadership acknowledgment was limited.",
        "As a young teacher in my 20s, appreciation from students was motivating, but leadership recognition was rare.",
        "As a senior teacher with 15 years of experience, contributions were valued, but not celebrated consistently.",
        "As a mid-career teacher in my 30s, recognition existed, but structured programs would have improved morale.",
      ],

      Q28: [
        "As a female teacher in my 30s, subject-specific workshops were missing during my tenure.",
        "As a male teacher in my 40s, opportunities for external conferences were limited.",
        "As a young teacher in my 20s, training in classroom management would have been helpful.",
        "As a senior teacher with 12 years of experience, advanced research seminars were lacking.",
        "As a mid-career teacher in my 30s, collaboration with other schools would have enriched professional growth.",
      ],

      Q29: [
        "As a female teacher in my 30s, inclusivity in staff activities made me feel included.",
        "As a male teacher in my 40s, collaboration was strong, though leadership decisions sometimes excluded staff.",
        "As a young teacher in my 20s, peer support fostered belonging, but formal involvement was limited.",
        "As a senior teacher with 15 years of experience, inclusivity was present, though recognition of senior staff was minimal.",
        "As a mid-career teacher in my 30s, the culture was positive, but communication gaps occasionally created exclusion.",
      ],

      Q30: [
        "As a female teacher in my 30s, structured career growth opportunities would improve retention.",
        "As a male teacher in my 40s, stronger recognition and appreciation programs would help.",
        "As a young teacher in my 20s, competitive compensation would encourage long-term commitment.",
        "As a senior teacher with 12 years of experience, reducing workload would support retention.",
        "As a mid-career teacher in my 30s, consistent professional development pathways would ensure growth and loyalty.",
      ],
    }
  }

  async launchSurvey(url) {
    await page.goto(url)
    await page.waitForLoadState("load")
  }

  async completeInitialSteps() {
    await page.locator(el.survey.btnLetsGo).click()
    const begin = page.locator(el.survey.btnBegin)
    await begin.waitFor()
    await page.locator(el.survey.btnBegin).click()
    const cont = page.locator(el.survey.btnContinue)
    await cont.waitFor()
    await page.locator(el.survey.btnContinue).click()
    // await page.waitForTimeout(10000);
  }

  async surveyQues() {
    let Ques = await page.innerText(el.survey.lblTotalQues)
    let quesArray = Ques.split("/")
    let totalQues = quesArray[1].split(" ")
    await page.waitForTimeout(2000)
    /* let ele = page.locator(el.survey.frmSurvey);
    let cName;
    cName = await ele.evaluate(element => element.className); */

    do {
      // radio type questions
      if (await page.locator(el.survey.lblRadioQuesText).isVisible()) {
        const choiceCount = await page
          .locator(el.survey.lblRadioQuesOptions)
          .count()
        const intNum = this.getRandomInt(1, choiceCount)
        if (intNum != 0)
          await page.click(el.survey.lblRadioQuesOptions + "[" + intNum + "]")
        else await page.click(el.survey.lblRadioQuesOptions + "[1]")
        console.log("Question type: Radio")
      }

      // textarea questions
      else if (await page.locator(el.survey.txtareaResponse).isVisible()) {
        const questiontext = await page
          .locator(el.survey.txtareaQuestion)
          .innerText()
        const currentKey = Object.keys(surveyQuestions).find((key) =>
          questiontext.trim().includes(surveyQuestions[key])
        )

        if (currentKey) {
          // Pick a random response from the array
          const responses = surveyResponses[currentKey]
          const randomIndex = Math.floor(Math.random() * responses.length)
          const response = responses[randomIndex]

          // Fill the response
          await page.fill(el.survey.txtareaResponse, response)
        } else {
          await page.fill(el.survey.txtareaResponse, "PW Test - QA Comments")
        }

        // await page.fill(el.survey.txtareaResponse,"PW Test - QA Comments");
        try {
          if (await page.locator(el.survey.btnTxtareaSubmit).isVisible()) {
            await page.locator(el.survey.btnTxtareaSubmit).click()
            console.log("Question type: Textarea")
          }
        } catch (error) {
          await page
            .locator(
              'div[class="fieldset ng-scope normal center"] [class*="text-buttons"] button'
            )
            .click()
          console.log("Question type: Textarea")
        }
      }

      // option type questions
      else if (await page.locator(el.survey.lblQuestionText).isVisible()) {
        const choiceCount = await page.locator(el.survey.divQuesChoice).count()
        const intNum = this.getRandomInt(1, choiceCount)
        const quesElement = await page.locator(el.survey.lblQuestionText)
        let strClassName = await quesElement.evaluate(
          (element) => element.className
        )
        let questType
        switch (strClassName) {
          case "fieldset ng-scope normal center":
            questType = await page.locator(
              '(//div[@class="fieldset ng-scope normal center"])[1]//ul/li' +
                "[" +
                intNum +
                "]"
            )
            break
          case "fieldset ng-scope center normal":
            questType = await page.locator(
              '(//div[@class="fieldset ng-scope center normal"])[1]//ul/li' +
                "[" +
                intNum +
                "]"
            )
            break
          case "fieldset ng-scope tall center":
            questType = await page.locator(
              '(//div[@class="fieldset ng-scope tall center"])[1]//ul/li' +
                "[" +
                intNum +
                "]"
            )
            break
          default:
            questType = await page.locator(
              '(//div[@class="fieldset ng-scope normal center"])[1]//ul/li' +
                "[" +
                intNum +
                "]"
            )
            break
        }

        if (intNum != 0) await questType.click()
        else await page.click(el.survey.divQuesChoice, "[1]")
        console.log("Question type: Choice Type")
      }

      //dropdown2 type questions
      /* else if(await page.locator(el.survey.drpQuestion1).isVisible()) {
            const choiceCount = await page.locator(el.survey.drpQuestionOption1).count();
            const intNum = Math.floor(Math.random() * choiceCount);
            await page.selectOption('[class*="select ng-scope"] select',{ index: intNum});
            console.log("Question type: Dropdown");
        } */

      //dropdown type questions
      else if (await page.locator(el.survey.drpQuestion).isVisible()) {
        const choiceCount = await page
          .locator(el.survey.drpQuestionOption)
          .count()
        const intNum = Math.floor(Math.random() * choiceCount)
        // await page.selectOption('//div[@class="fieldset ng-scope normal center"]//select',{ index: intNum});
        await page.selectOption(el.survey.drpSelectOption, { index: intNum })
        console.log("Question type: Dropdown")
      }

      await page.waitForTimeout(1000)
    } while (await page.locator(el.survey.btnSaveAndSubmit).isHidden())

    await page.locator(el.survey.btnSaveAndSubmit).click()
    await page.waitForTimeout(5000)
    await page.waitForSelector(el.survey.imgChkmrkCompleted, {
      state: "visible",
    })
    console.log("------------------ END OF SURVEY -------------------")
  }

  async surveyQuesUpdated() {
    let Ques = await page.innerText(el.survey.lblTotalQues)
    let quesArray = Ques.split("/")
    let totalQues = quesArray[1].split(" ")
    await page.waitForTimeout(2000)
    let ele = page.locator(el.survey.frmSurvey)
    // let cName;
    // cName = await ele.evaluate(element => element.className);
    let quesNo = 1
    let matQues = 1
    let previousQuesmatrix = false
    do {
      // text area question
      if (quesNo === 1) {
        if (await page.locator(el.survey.txtQuestionFirst).isVisible()) {
          await this.fillSurveyResponse(
            await page.locator(el.survey.txtQuestionFirstText).innerText(),
            el.survey.txtQuestionFirst
          )
          try {
            if (await page.locator(el.survey.btnTxtareaSubmit).isVisible()) {
              await page.locator(el.survey.btnTxtareaSubmit).click()
              console.log("Question type: Textarea")
            }
            // added else if
            else if (await page.locator('//form[@id="form-desktop-view"]//div[contains(@id,"question")][1]//button').isVisible()) {
              await page.locator('//form[@id="form-desktop-view"]//div[contains(@id,"question")][1]//button').click()
              console.log("Question type: Textarea")
            }
          } catch (error) {
            await page.locator(el.survey.btnTextareacontinue).click()
            console.log("Question type: Textarea")
          }
          previousQuesmatrix = false
        }

        // option type questions
        else if (await page.locator(el.survey.optQuestionFirst).isVisible()) {
          const choiceCount = await page
            .locator(el.survey.optQuestionFirstCount)
            .count()
          const intNum = this.getRandomInt(1, choiceCount)

          if (intNum != 0)
            await page
              .locator(`${el.survey.optQuestionFirstCount}[${intNum}]`)
              .click()
          else
            await page.locator(`${el.survey.optQuestionFirstCount},[1]`).click()
          console.log("Question type: Choice Type")
          previousQuesmatrix = false
        }

        //dropdown type questions
        else if (await page.locator(el.survey.drpQuestionFirst).isVisible()) {
          const choiceCount = await page
            .locator(el.survey.drpQuestionFirstCount)
            .count()
          const intNum = Math.floor(Math.random() * choiceCount)
          // await page.selectOption('//div[@class="fieldset ng-scope normal center"]//select',{ index: intNum});
          await page.selectOption(el.survey.drpQuestionFirst, { index: intNum })
          console.log("Question type: Dropdown")
          previousQuesmatrix = false
        }

        // matrix question
        else if (await page.locator(el.survey.matQuestionFirst).isVisible()) {
          // count the number of question
          const matQuesCount = await page
            .locator(
              `(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"]`
            )
            .count()
          // count the options
          let i
          const matOptionscount = await page
            .locator(
              `(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][1]//div[@class="matrix-option-cell ng-scope"]`
            )
            .count()
          for (i = 1; i <= matQuesCount; i++) {
            const intNum = this.getRandomInt(1, matOptionscount)
            if (intNum != 0)
              await page
                .locator(
                  `(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][${i}]//div[@class="matrix-option-cell ng-scope"][${intNum}]`
                )
                .click()
            else
              await page
                .locator(
                  `(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][${i}]//div[@class="matrix-option-cell ng-scope"][1]`
                )
                .click()
          }
          const isPageNumbervisible = await page
            .locator(
              '(//h3[@class="matrix-stem ng-binding"])[1]/following-sibling::div'
            )
            .isVisible()
          if (!isPageNumbervisible) {
            previousQuesmatrix = true
          } else {
            let quesNumber = await page
              .locator(
                '(//h3[@class="matrix-stem ng-binding"])[1]/following-sibling::div'
              )
              .innerText()
            let findQuestNumber = quesNumber.split(" ")
            if (Number(findQuestNumber[1]) === Number(findQuestNumber[3]))
              previousQuesmatrix = true
            else previousQuesmatrix = false
            const btnName = await page
              .locator(el.survey.btnmatrixNext)
              .innerText()
            if (btnName.includes("Continue")) {
              await page
                .locator(
                  `(//div[contains(@class,"matrix-pagination")])[${matQues}]//button[contains(@class,"matrix-next")]`
                )
                .click()
              matQues = matQues + 1
            } else
              await page
                .locator(
                  `(//div[contains(@class,"matrix-pagination")])[${matQues}]//button[contains(@class,"matrix-next")]`
                )
                .click()
          }
        }
        if (previousQuesmatrix) quesNo = 1
        else quesNo = 2
      } else if (quesNo === 2) {
        if (await page.locator(el.survey.txtQuestionSecond).isVisible()) {
          await this.fillSurveyResponse(
            await page.locator(el.survey.txtQuestionSecondText).innerText(),
            el.survey.txtQuestionSecond
          )
          // await page.fill(el.survey.txtQuestionSecond,"PW Test - QA Comments");
          try {
            if (await page.locator(el.survey.btnTxtareaSubmit).isVisible()) {
              await page.locator(el.survey.btnTxtareaSubmit).click()
              console.log("Question type: Textarea")
            }
          } catch (error) {
            await page.locator(el.survey.btnTextareacontinue).click()
            console.log("Question type: Textarea")
          }
          previousQuesmatrix = false
        }

        // option type questions
        else if (await page.locator(el.survey.optQuestionSecond).isVisible()) {
          const choiceCount = await page
            .locator(el.survey.optQuestionSecondCount)
            .count()
          const intNum = this.getRandomInt(1, choiceCount)

          if (intNum != 0)
            await page
              .locator(`${el.survey.optQuestionSecondCount}[${intNum}]`)
              .click()
          else
            await page
              .locator(`${el.survey.optQuestionSecondCount},[1]`)
              .click()
          console.log("Question type: Choice Type")
          previousQuesmatrix = false
        }

        //dropdown type questions
        else if (await page.locator(el.survey.drpQuestionSecond).isVisible()) {
          const choiceCount = await page
            .locator(el.survey.drpQuestionSecondCount)
            .count()
          const intNum = Math.floor(Math.random() * choiceCount)
          // await page.selectOption('//div[@class="fieldset ng-scope normal center"]//select',{ index: intNum});
          await page.selectOption(el.survey.drpQuestionSecond, {
            index: intNum,
          })
          console.log("Question type: Dropdown")
          previousQuesmatrix = false
        }

        // matrix question
        else if (await page.locator(el.survey.matQuestonSecond).isVisible()) {
          // count the number of question
          const matQuesCount = await page
            .locator(
              `(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"]`
            )
            .count()
          // count the options
          let i
          const matOptionscount = await page
            .locator(
              `(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][1]//div[@class="matrix-option-cell ng-scope"]`
            )
            .count()
          for (i = 1; i <= matQuesCount; i++) {
            const intNum = this.getRandomInt(1, matOptionscount)
            if (intNum != 0)
              await page
                .locator(
                  `(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][${i}]//div[@class="matrix-option-cell ng-scope"][${intNum}]`
                )
                .click()
            else
              await page
                .locator(
                  `(//div[contains(@class,"matrix-grid options-")])[${matQues}]//div[@class="matrix-row ng-scope"][${i}]//div[@class="matrix-option-cell ng-scope"][1]`
                )
                .click()
          }
          const isPageNumbervisible = await page
            .locator(
              '(//h3[@class="matrix-stem ng-binding"])[1]/following-sibling::div'
            )
            .isVisible()
          if (!isPageNumbervisible) {
            previousQuesmatrix = true
          } else {
            let quesNumber = await page
              .locator(
                '(//h3[@class="matrix-stem ng-binding"])[1]/following-sibling::div'
              )
              .innerText()
            let findQuestNumber = quesNumber.split(" ")
            if (Number(findQuestNumber[1]) === Number(findQuestNumber[3]))
              previousQuesmatrix = true
            else previousQuesmatrix = false
            const btnName = await page
              .locator(el.survey.btnmatrixNext)
              .innerText()
            if (btnName.includes("Continue")) {
              await page
                .locator(
                  `(//div[contains(@class,"matrix-pagination")])[${matQues}]//button[contains(@class,"matrix-next")]`
                )
                .click()
              matQues = matQues + 1
            } else
              await page
                .locator(
                  `(//div[contains(@class,"matrix-pagination")])[${matQues}]//button[contains(@class,"matrix-next")]`
                )
                .click()
          }
        }
        if (previousQuesmatrix) quesNo = 1
        else quesNo = 2
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
      await page.waitForTimeout(1000)
    } while (await page.locator(el.survey.btnSaveAndSubmit).isHidden())

    await page.locator(el.survey.btnSaveAndSubmit).click()
    await page.waitForTimeout(5000)
    await page.waitForSelector(el.survey.imgChkmrkCompleted, {
      state: "visible",
    })
    console.log("------------------ END OF SURVEY -------------------")
  }

  async fillSurveyResponse(question, txtFeild) {
    const questiontext = question
    const currentKey = Object.keys(this.surveyQuestions).find((key) =>
      questiontext.trim().includes(this.surveyQuestions[key])
    )

    if (currentKey) {
      // Pick a random response from the array
      const responses = this.surveyResponses[currentKey]
      const randomIndex = Math.floor(Math.random() * responses.length)
      const response = responses[randomIndex]

      // Fill the response
      await page.fill(txtFeild, response)
    } else {
      await page.fill(txtFeild, "PW Test - QA Comments");
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
module.exports = { SurveyPage }
