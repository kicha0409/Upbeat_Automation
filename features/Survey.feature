Feature: Attend Survey
  
  @CompleteSurvey
  Scenario Outline: Attend Survey
    Given Launch the survey "<URL>"
    Then Complete the initial steps
    And Start responding the survey questions

   Examples:
    |  URL            | 
    |  https://staging.teachers.teachupbeat.net?hash=7bba22ef-136e-11f0-946e-125fdd404245	  |