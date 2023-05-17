Feature: Laptops And Notebooks  Test
  As a user i want to place an order successFully

  @sanity @regression
  Scenario: verify Product Arrange In Alphabetical Order
    Given    User is on homePage
    When     User select currency "£Pound Sterling"
    And      User mouse Hover On Laptops And Notebooks Link And Click
    And      User select menu option "Show AllLaptops & Notebooks"
    And      User select Sort By Option "Price (High > Low)"
    Then     Verify all product shorted in Price (High > Low) order

  @smoke @regression
  Scenario: verify That User Place Order Successfully
    Given    User is on homePage
    When     User select currency "£Pound Sterling"
    And      User mouse Hover On Laptops And Notebooks Link And Click
    And      User select menu option "Show AllLaptops & Notebooks"
    And      User select Sort By Option "Price (High > Low)" on Show AllLaptops & Notebooks page
    And      User select product "MacBook"
    Then     Verify "MacBook" as a product name on  product page
    And      User click On Add To Cart Button on  product page
    Then     Verify "Success: You have added MacBook to your shopping cart" message on product page
    And      User click On ShoppingCart Link Into Message
    Then     Verify "Shopping Cart  (0.00kg)" message on shopping cart page
    Then     Verify product name "MacBook" on shopping cart page
    And      User change quantity to "2"
    And      User click On quantity Update Button
    Then     Verify  success "Success: You have modified your shopping cart" message on shopping cart page
    Then     Verify total price is "£737.45" on shopping cart page

