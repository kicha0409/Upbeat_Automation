Feature: Verify Cosultation Report
  
  @Consultation
  Scenario Outline: Verify whether the consultation report is displayed as expected
    Given Launch the Report
    When the report user login the report portal "<username>", "<password>"
    Then the dashboard should display with the report types "<reportTypes>"
    When the user clicks on the consultation report
    Then the consultation notes should be in focus
    And click on any of the schools in the list "<adminInterval>"
    And verify the fields on the consultation report
    And verify the Area of Strength section
    And verify the Area of Improvement section
    And verify the Actions for School Leaders
    And verify the Recommended Resources
        
  Examples:
      | username                                  | password         | reportTypes    |   adminInterval   |
      |	mailme2kicha+test-allschool@gmail.com     | Password@123     | All            |   Winter 2024     |