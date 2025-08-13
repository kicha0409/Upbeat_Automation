Feature: Attend Survey
  
  @CompleteSurvey
  Scenario Outline: Attend Survey
    Given Launch the survey "<URL>"
    Then Complete the initial steps
    And Start responding the survey questions

   Examples:
    |  URL            | 
    |  https://qa.teachers.teachupbeat.net/?hash=6137b7d7-d257-11ee-adef-12e2e326eaff&lang=en&preview=true  |
