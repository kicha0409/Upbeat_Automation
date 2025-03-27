Feature: Verify Reports
  
  Scenario Outline: Verify Report login and dashboard
    Given Launch the Report
    When the report user login the report portal "<username>", "<password>"
    Then the dashboard should display with the report types "<reportTypes>"
    And verify the Hide and Show button in the left pane
    When the user clicks on Engagement report
    Then Verify the Engagement report home page "<adminInterval>"
    And Verify the Results page
    And Verify the Questions page
    And Verify the Schools page
    And Verify the Heatmap page
    And Verify the Questions page with demographics filter
    When the user clicks on Exit Report in sidebar
    Then navigates to Exit Report
    
    
  Examples:
      | username                                  | password         | reportTypes    |   adminInterval   |
      | mailme2kicha+test-allschool@gmail.com     | Password@123     | All            |   Fall 2024       |
      

  