Feature: Verify and Generate District Presentation
  
  @DistrictPresentation
  Scenario Outline: Verify and generate the district presentation on coach login
    Given Launch the Report
    When the report user login the report portal "<username>", "<password>"
    Then navigate to Engagement Report
    And click on District tab
    And select the district
    When the coach user clicks on District Presentation link
    Then the presentation popup should display
    And verify the cover Slide page
    And verify Principal Feedback page
    And verify Goals and Focus areas
    And verify Areas of Growth
    And verify Highlights
    And verify Action Plan
    And verify Featured Schools
    
  Examples:
    | username                          | password         | 
    | kmoorthy+QTMA@teachupbeat.com     | Password@123     |