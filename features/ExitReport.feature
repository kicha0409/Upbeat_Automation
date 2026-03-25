Feature: Verify Exit Report

  @ExitReport1
  Scenario Outline: Verify Exit Report functionality
    Given Launch the Report
    When the report user login the report portal "<username>", "<password>"
    And the user clicks on Exit Report in sidebar
    Then navigates to Exit Report
    When the user clicks on the district tile
    Then verify whether the exit report is loaded
    And select the interval "<adminInterval>"
    And verify the content on the header
    And verify the metrics section
    And verify the charts section
    And verify the data table section


    Examples:
      | username                       | password     | adminInterval |
      | mailme2kicha+test-em@gmail.com | Password@123 | SY 2023-2024|
