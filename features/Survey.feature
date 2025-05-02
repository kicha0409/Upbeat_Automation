Feature: Attend Survey
  
  @CompleteSurvey
  Scenario Outline: Attend Survey
    Given Launch the survey "<URL>"
    Then Complete the initial steps
    And Start responding the survey questions

   Examples:
    |  URL            | 
    |  https://staging.teachers.teachupbeat.net/?hash=c10f8134-7514-11ef-adef-12e2e326eaff&lang=en&preview=true	  |
  