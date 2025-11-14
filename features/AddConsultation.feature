Feature: Verify adding a new consultation notes
  
  @ConsultationNotes
  Scenario Outline: Verify adding a new consultation notes as a coach
    Given Launch the Report
    When the report user login the report portal "<username>", "<password>"
    When the user clicks on the district tile
    Then select the interval "<adminInterval>"
    When the coach clicks on Consultation Notes button
    Then clicks on add button
    And completes the metrics page
    And clicks on Next button
    And completes discussion page
    And completes areas of oppurtunity
    And completes actions
    And completes Recommended Toolkits
    And select sharing results
    And clicks on Next button
        
  Examples:
      | username                           | password         | adminInterval   |
      |	kmoorthy+QTD@teachupbeat.com	     | Password@123     | Fall 2025       |