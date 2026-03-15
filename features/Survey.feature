Feature: Attend Survey

  @CompleteSurvey
  Scenario Outline: Attend Survey
    Given Launch the survey "<URL>"
    Then Complete the initial steps
    And Start responding the survey questions

    Examples:
      | URL                                                                            |
      | https://qa.teachers.teachupbeat.net/?hash=effa1b0a-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=effbf0b0-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=effdd563-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=efffbc4a-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f00183ea-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f003dbf5-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f005b8bd-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f00794dc-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0097206-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f00b4d57-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f00d1f42-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f00f0ae3-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f010d4fc-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f01296cd-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0146c0c-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0162e1f-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f017ff8e-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f01a083b-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f01bdd2b-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f01d8daf-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f01f3f21-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f020f6f8-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f022c2a1-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0249f6e-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0268288-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0284e45-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f02a1c54-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f02c05a3-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f02df6d6-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f02fda5e-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0320d7b-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0344fa9-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0366fe8-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0388761-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f03a75ba-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f03c45f8-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f03e0d2c-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f03ffce4-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f041fc59-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f043c8c2-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f04595b4-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f0475785-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f049290e-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f04ae307-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f04cd516-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=f04f60a3-203a-11f1-b2e3-122a2759f2e5 |
      | https://qa.teachers.teachupbeat.net/?hash=a294c21f-2059-11f1-b2e3-122a2759f2e5 |

