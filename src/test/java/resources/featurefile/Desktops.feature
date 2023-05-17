Feature: Desktop Test
  As a user i want to Added product to shopping cart successFully

  @sanity @regression
  Scenario: verify Product Arrange In Alphabetical Order
    Given    User is on homePage
    And      User select currency "£Pound Sterling"
    And      User mouse Hover On Desktops Link And Click
    And      User select menu option "Show AllDesktops"
    And      User select Sort By Option "Name (Z - A)"
    Then     Verify all product shorted in Z-A order

  @smoke @regression
  Scenario: verify That User Should register And Logout Successfully
    Given    User is on homePage
    And      User select currency "£Pound Sterling"
    And      User mouse Hover On Desktops Link And Click
    And      User select menu option "Show AllDesktops"
    And      User select Sort  Option "Name (A - Z)"
    And      User select Product By Name "HP LP3065"
    Then     Verify "HP LP3065" product message
    And      User select date "30" "November" "2023"
    And      User enter quantity "1"
    And      User click On Add To CartButton
    Then     Verify "Success: You have added HP LP3065 to your shopping cart"
    And      User click On Shopping Cart Link Into Message
    Then     Verify "Shopping Cart" message on cart page
    Then     User match product name "HP LP3065"
    Then     User verify delivery date  "2023-11-30"
    Then     User Get model name as "Product 21"
    Then     Verify total price is "£74.73"
