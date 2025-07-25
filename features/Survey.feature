Feature: Attend Survey
  
  @CompleteSurvey
  Scenario Outline: Attend Survey
    Given Launch the survey "<URL>"
    Then Complete the initial steps
    And Start responding the survey questions

   Examples:
    |  URL            | 
    |  https://qa.teachers.teachupbeat.net/?hash=cb11d280-d971-11ed-9b99-02ec452c4c31&lang=en&preview=true  |
