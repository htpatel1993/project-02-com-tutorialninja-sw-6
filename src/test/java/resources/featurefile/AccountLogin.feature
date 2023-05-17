Feature: Account Login Test
  As user I want to login into TutorialsNinja website

  @sanity @regression
  Scenario: verify user should navigate to login page successfully
    Given   User is on homePage
    And     User click on myaccount tab
    And     User select "login" option from my account
    Then    Verify "Returning Customer" message on account login page

  @smoke @regression
  Scenario: Verify that user should login and Logout Successfully
    Given   User is on homePage
    And     User click on myaccount tab
    And     User select "login" option from my account
    And     User enter email address "admin123456@gmail.com"
    And     User enter password "Admin@123"
    And     User click On Login Button
    And     User click on myaccount tab
    And     User select "logout" option from my account option
    Then    Verify "Account Logout" message
