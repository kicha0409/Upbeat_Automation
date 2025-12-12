Feature: Attend Survey
  
  @CompleteSurvey
  Scenario Outline: Attend Survey
    Given Launch the survey "<URL>"
    Then Complete the initial steps
    And Start responding the survey questions

   Examples:
    |  URL            | 
    |  https://teachers.teachupbeat.com/?hash=81ccb15f-d0bf-11f0-9963-025d18d8b5d5  |
