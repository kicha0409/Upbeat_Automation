Feature: Verify whether the engagement reports are loading for all the schools, depts and clusters within a district
  
  @EngagementReport
  Scenario: Verify Engagement Report login and dashboard
    Given Launch the Report
    When the report user login the report portal "<username>", "<password>"
    When the user navigates to Engagement report
    Then the list of report tiles should display "<districtName>"
    And navigate to each tiles verify whether the report is loaded successfully
    
  Examples:
      | username                                | password         | districtName    |   
      | mailme2kicha+tst-add@gmail.com          | Password@123     | Atlanta         |   
      
  @ExitReport    
  Scenario: Verify Exit Report login and dashboard
    Given Launch the Report
    When the report user login the report portal "<username>", "<password>"
    When the user navigates to Exit report
    Then the list of report tiles should display "<districtName>"
    And navigate to each tiles verify whether the report is loaded successfully
    
  Examples:
      | username                                | password         | districtName               |   
      | mailme2kicha+test-allschool@gmail.com   | Password@123     | QA Consultation district   |  

 @SchoolLeaders
  Scenario: Verify School Leaders Report login and dashboard
    Given Launch the Report
    When the report user login the report portal "<username>", "<password>"
    When the user navigates to School Leaders report
    Then the list of report tiles should display "<districtName>"
    And navigate to each tiles verify whether the report is loaded successfully
    
  Examples:
      | username                                | password         | districtName               |   
      | mailme2kicha+test-allschool@gmail.com   | Password@123     | QA Consultation district   |      
  