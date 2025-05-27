Feature: Attend Survey
  
  @CompleteSurvey
  Scenario Outline: Attend Survey
    Given Launch the survey "<URL>"
    Then Complete the initial steps
    And Start responding the survey questions

   Examples:
    |  URL            | 
    |  https://qa.teachers.teachupbeat.net?hash=0603c8b6-fe41-11ef-946e-125fdd404245 |
    |  https://qa.teachers.teachupbeat.net?hash=0604b56b-fe41-11ef-946e-125fdd404245 |
    |  https://qa.teachers.teachupbeat.net?hash=0603c8b6-fe41-11ef-946e-125fdd404245 |
    |  https://qa.teachers.teachupbeat.net?hash=0604b56b-fe41-11ef-946e-125fdd404245 |
    |  https://qa.teachers.teachupbeat.net?hash=0603c8b6-fe41-11ef-946e-125fdd404245 |
    |  https://qa.teachers.teachupbeat.net?hash=0604b56b-fe41-11ef-946e-125fdd404245 |
    |  https://qa.teachers.teachupbeat.net?hash=0603c8b6-fe41-11ef-946e-125fdd404245 |
    |  https://qa.teachers.teachupbeat.net?hash=0604b56b-fe41-11ef-946e-125fdd404245 |
    |  https://qa.teachers.teachupbeat.net?hash=0603c8b6-fe41-11ef-946e-125fdd404245 |
    |  https://qa.teachers.teachupbeat.net?hash=0604b56b-fe41-11ef-946e-125fdd404245 |