Feature: Verify Reports
  
  @Reports
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


  @ReportAccess
  Scenario Outline: Verify the user reports with different access
  Given Launch the Report
  When the report user login the report portal "<username>", "<password>"
  Then verify the report types on dashboard "<reportTypes>"
  #And verify the active report types on left pane
  #And verify the active report types on hidding the report titles

  # report types - All, Engagement, Exit, SchoolLeader, Parent, Consultation - more than one report can be given using , separater. not case sensitive (eg: EXIT, consultation)
  Examples:
      | username                               | password         | reportTypes        |   
      | mailme2kicha+test-farm@gmail.com       | Password@123     | Engagement,Exit,Consultation   |   