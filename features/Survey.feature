Feature: Attend Survey
  
  @CompleteSurvey
  Scenario Outline: Attend Survey
    Given Launch the survey "<URL>"
    Then Complete the initial steps
    And Start responding the survey questions

   Examples:
    |  URL            | 
    |  https://qa.teachers.teachupbeat.net/?hash=3b1fd54f-63a1-11f0-946e-125fdd404245&lang=en&preview=true  |
