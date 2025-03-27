Feature: Attend Survey
  
  @CompleteSurvey
  Scenario Outline: Attend Survey
    Given Launch the survey "<URL>"
    Then Complete the initial steps
    And Start responding the survey questions

   Examples:
    |  URL            | 
    |  https://qa.teachers.teachupbeat.net/?hash=5de2acbe-0874-11f0-946e-125fdd404245  |
    |  https://qa.teachers.teachupbeat.net/?hash=5de3eb2d-0874-11f0-946e-125fdd404245  |
    |  https://qa.teachers.teachupbeat.net/?hash=5de4ffd1-0874-11f0-946e-125fdd404245  |
    |  https://qa.teachers.teachupbeat.net/?hash=5de61265-0874-11f0-946e-125fdd404245  |
    |  https://qa.teachers.teachupbeat.net/?hash=5de73c0e-0874-11f0-946e-125fdd404245  |