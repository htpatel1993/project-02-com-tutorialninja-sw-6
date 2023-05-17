Feature: Register Test
  As a user i want to register on TutorialsNinja website

  @sanity @regression
  Scenario: verify User Should Navigate To register Successfully
    Given   User is on homePage
    And     User click on myaccount tab
    And     User select "Register" option from my account
    Then    Verify "Register Account" message on Register page

  @smoke @regression
  Scenario: verify That User Should register And Logout Successfully
    Given   User is on homePage
    And     User click on myaccount tab
    And     User select "Register" option from my account
    And     User enter first name "Prime"
    And     User enter last name "testing"
    And     User enter email "prime"
    And     User enter telephone number "07988112233"
    And     User enter password "test123" on register page
    And     User enter confirm password "test123"
    And     User select "Yes" on subscription
    And     User click On Privacy Policy CheckBox
    And     User click On Continue Button
    Then    Verify  "Your Account Has Been Created!" message displayed
    And     User click On Continue Button on MyAccount page
    And     User click on myaccount tab
    And     User select "Logout" option from my account
    Then    Verify "Account Logout" message on my account page
    And     User click On Continue Button on MyAccount page