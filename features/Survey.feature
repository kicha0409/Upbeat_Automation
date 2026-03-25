Feature: Attend Survey

  @CompleteSurvey
  Scenario Outline: Attend Survey
    Given Launch the survey "<URL>"
    Then Complete the initial steps
    And Start responding the survey questions

    Examples:
      | URL                                                                            |
      | https://qa.teachers.teachupbeat.net/?hash=234b1939-27f8-11f1-b2e3-122a2759f2e5 |