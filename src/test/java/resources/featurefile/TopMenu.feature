Feature: Top menu Test
  As a user when i click on any top menu tab it will navigate to that page

  @sanity @regression
  Scenario: verify User Should Navigate To Desktops Page Successfully
    Given    User is on homePage
    When     User mouse Hover On Desktops Link And Click
    And      User select menu option "Show AllDesktops"
    Then     Verify user navigate to desktop page

  @smoke @regression
  Scenario: verify User Should Navigate To Laptops And Notebooks Page Successfully
    Given    User is on homePage
    When     User mouse Hover On Laptops And Notebooks Link And Click
    And      User select menu option "Show AllLaptops & Notebooks"
    Then     Verify user navigate to Laptops And Notebooks Page

  @regression
  Scenario:  verify User Should Navigate To Components Page Successfully
    Given    User is on homePage
    When     User mouse Hover On Component Link And Click
    And      User select menu option "Show AllComponents"
    Then     Verify user navigate to Components Page






