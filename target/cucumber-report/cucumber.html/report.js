$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Account Login Test",
  "description": "As user I want to login into TutorialsNinja website",
  "id": "account-login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7857946600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify that user should login and Logout Successfully",
  "description": "",
  "id": "account-login-test;verify-that-user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User click on myaccount tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User select \"login\" option from my account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter email address \"admin123456@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter password \"Admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click On Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on myaccount tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select \"logout\" option from my account option",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify \"Account Logout\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginPageSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 50743800,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.userClickOnMyaccountTab()"
});
formatter.result({
  "duration": 1107565900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 13
    }
  ],
  "location": "AccountLoginPageSteps.userSelectOptionFromMyAccount(String)"
});
formatter.result({
  "duration": 437299900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123456@gmail.com",
      "offset": 26
    }
  ],
  "location": "AccountLoginPageSteps.userEnterEmailAddress(String)"
});
formatter.result({
  "duration": 119440000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin@123",
      "offset": 21
    }
  ],
  "location": "AccountLoginPageSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 79500500,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 663286100,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.userClickOnMyaccountTab()"
});
formatter.result({
  "duration": 1076677100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logout",
      "offset": 13
    }
  ],
  "location": "AccountLoginPageSteps.userSelectOptionFromMyAccountOption(String)"
});
formatter.result({
  "duration": 702983500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 8
    }
  ],
  "location": "AccountLoginPageSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 25242900,
  "status": "passed"
});
formatter.after({
  "duration": 584255100,
  "status": "passed"
});
formatter.uri("AccountRegister.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a user i want to register on TutorialsNinja website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4980439800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify That User Should register And Logout Successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-register-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User click on myaccount tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User select \"Register\" option from my account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter first name \"Prime\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter last name \"testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter email \"prime\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter telephone number \"07988112233\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enter password \"test123\" on register page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enter confirm password \"test123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select \"Yes\" on subscription",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click On Privacy Policy CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click On Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify  \"Your Account Has Been Created!\" message displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click On Continue Button on MyAccount page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on myaccount tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User select \"Logout\" option from my account",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify \"Account Logout\" message on my account page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User click On Continue Button on MyAccount page",
  "keyword": "And "
});
formatter.match({
  "location": "AccountLoginPageSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 38700,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.userClickOnMyaccountTab()"
});
formatter.result({
  "duration": 1083299100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 13
    }
  ],
  "location": "AccountLoginPageSteps.userSelectOptionFromMyAccount(String)"
});
formatter.result({
  "duration": 21256811800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 23
    }
  ],
  "location": "AccountRegisterSteps.userEnterFirstName(String)"
});
formatter.result({
  "duration": 77516000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 22
    }
  ],
  "location": "AccountRegisterSteps.userEnterLastName(String)"
});
formatter.result({
  "duration": 67398900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime",
      "offset": 18
    }
  ],
  "location": "AccountRegisterSteps.userEnterEmail(String)"
});
formatter.result({
  "duration": 77742700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07988112233",
      "offset": 29
    }
  ],
  "location": "AccountRegisterSteps.userEnterTelephoneNumber(String)"
});
formatter.result({
  "duration": 76645000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 21
    }
  ],
  "location": "AccountRegisterSteps.userEnterPasswordOnRegisterPage(String)"
});
formatter.result({
  "duration": 63377500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 29
    }
  ],
  "location": "AccountRegisterSteps.userEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 68447200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 13
    }
  ],
  "location": "AccountRegisterSteps.userSelectOnSubscription(String)"
});
formatter.result({
  "duration": 21706800,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterSteps.userClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "duration": 36357600,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 1087557000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 9
    }
  ],
  "location": "AccountRegisterSteps.verifyMessageDisplayed(String)"
});
formatter.result({
  "duration": 31068600,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterSteps.userClickOnContinueButtonOnMyAccountPage()"
});
formatter.result({
  "duration": 1462167000,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.userClickOnMyaccountTab()"
});
formatter.result({
  "duration": 1076451600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 13
    }
  ],
  "location": "AccountLoginPageSteps.userSelectOptionFromMyAccount(String)"
});
formatter.result({
  "duration": 748477600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 8
    }
  ],
  "location": "AccountRegisterSteps.verifyMessageOnMyAccountPage(String)"
});
formatter.result({
  "duration": 22622400,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterSteps.userClickOnContinueButtonOnMyAccountPage()"
});
formatter.result({
  "duration": 1447186600,
  "status": "passed"
});
formatter.after({
  "duration": 614393500,
  "status": "passed"
});
formatter.uri("Desktops.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop Test",
  "description": "As a user i want to Added product to shopping cart successFully",
  "id": "desktop-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5358761900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify That User Should register And Logout Successfully",
  "description": "",
  "id": "desktop-test;verify-that-user-should-register-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User select currency \"£Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User mouse Hover On Desktops Link And Click",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User select menu option \"Show AllDesktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User select Sort  Option \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select Product By Name \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify \"HP LP3065\" product message",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User select date \"30\" \"November\" \"2023\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enter quantity \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click On Add To CartButton",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify \"Success: You have added HP LP3065 to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click On Shopping Cart Link Into Message",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify \"Shopping Cart\" message on cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User match product name \"HP LP3065\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User verify delivery date  \"2023-11-30\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User Get model name as \"Product 21\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Verify total price is \"£74.73\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginPageSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 22
    }
  ],
  "location": "DesktopSteps.userSelectCurrency(String)"
});
formatter.result({
  "duration": 1817220100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userMouseHoverOnDesktopsLinkAndClick()"
});
formatter.result({
  "duration": 171008000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 25
    }
  ],
  "location": "DesktopSteps.userSelectMenuOption(String)"
});
formatter.result({
  "duration": 2576914700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 26
    }
  ],
  "location": "DesktopSteps.userSelectSortOption(String)"
});
formatter.result({
  "duration": 1511152700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 29
    }
  ],
  "location": "DesktopSteps.userSelectProductByName(String)"
});
formatter.result({
  "duration": 1848401600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 8
    }
  ],
  "location": "DesktopSteps.verifyProductMessage(String)"
});
formatter.result({
  "duration": 19897800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 18
    },
    {
      "val": "November",
      "offset": 23
    },
    {
      "val": "2023",
      "offset": 34
    }
  ],
  "location": "DesktopSteps.userSelectDate(String,String,String)"
});
formatter.result({
  "duration": 8369025200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "DesktopSteps.userEnterQuantity(String)"
});
formatter.result({
  "duration": 238716300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnAddToCartButton()"
});
formatter.result({
  "duration": 88096500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added HP LP3065 to your shopping cart",
      "offset": 8
    }
  ],
  "location": "DesktopSteps.verify(String)"
});
formatter.result({
  "duration": 335759500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.userClickOnShoppingCartLinkIntoMessage()"
});
formatter.result({
  "duration": 658758900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 8
    }
  ],
  "location": "DesktopSteps.verifyMessageOnCartPage(String)"
});
formatter.result({
  "duration": 30441400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 25
    }
  ],
  "location": "DesktopSteps.userMatchProductName(String)"
});
formatter.result({
  "duration": 23902900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2023-11-30",
      "offset": 28
    }
  ],
  "location": "DesktopSteps.userVerifyDeliveryDate(String)"
});
formatter.result({
  "duration": 25232200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 21",
      "offset": 24
    }
  ],
  "location": "DesktopSteps.userGetModelNameAs(String)"
});
formatter.result({
  "duration": 21011100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£74.73",
      "offset": 23
    }
  ],
  "location": "DesktopSteps.verifyTotalPriceIs(String)"
});
formatter.result({
  "duration": 24620700,
  "status": "passed"
});
formatter.after({
  "duration": 610364500,
  "status": "passed"
});
formatter.uri("LaptopsAndNotebooks.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops And Notebooks  Test",
  "description": "As a user i want to place an order successFully",
  "id": "laptops-and-notebooks--test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6779470500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify That User Place Order Successfully",
  "description": "",
  "id": "laptops-and-notebooks--test;verify-that-user-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User select currency \"£Pound Sterling\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User mouse Hover On Laptops And Notebooks Link And Click",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User select menu option \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User select Sort By Option \"Price (High \u003e Low)\" on Show AllLaptops \u0026 Notebooks page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select product \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify \"MacBook\" as a product name on  product page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click On Add To Cart Button on  product page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify \"Success: You have added MacBook to your shopping cart\" message on product page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User click On ShoppingCart Link Into Message",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify \"Shopping Cart  (0.00kg)\" message on shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Verify product name \"MacBook\" on shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User change quantity to \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click On quantity Update Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify  success \"Success: You have modified your shopping cart\" message on shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Verify total price is \"£737.45\" on shopping cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginPageSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 22
    }
  ],
  "location": "DesktopSteps.userSelectCurrency(String)"
});
formatter.result({
  "duration": 1822141100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksPageSteps.userMouseHoverOnLaptopsAndNotebooksLinkAndClick()"
});
formatter.result({
  "duration": 149013300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 25
    }
  ],
  "location": "DesktopSteps.userSelectMenuOption(String)"
});
formatter.result({
  "duration": 2188747400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 28
    }
  ],
  "location": "LaptopsAndNotebooksPageSteps.userSelectSortByOptionOnShowAllLaptopsNotebooksPage(String)"
});
formatter.result({
  "duration": 482791800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 21
    }
  ],
  "location": "LaptopsAndNotebooksPageSteps.userSelectProduct(String)"
});
formatter.result({
  "duration": 1858533600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 8
    }
  ],
  "location": "LaptopsAndNotebooksPageSteps.verifyAsAProductNameOnProductPage(String)"
});
formatter.result({
  "duration": 24040000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksPageSteps.userClickOnAddToCartButtonOnProductPage()"
});
formatter.result({
  "duration": 54936600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added MacBook to your shopping cart",
      "offset": 8
    }
  ],
  "location": "LaptopsAndNotebooksPageSteps.verifyMessageOnProductPage(String)"
});
formatter.result({
  "duration": 355937800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksPageSteps.userClickOnShoppingCartLinkIntoMessage()"
});
formatter.result({
  "duration": 696486100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart  (0.00kg)",
      "offset": 8
    }
  ],
  "location": "LaptopsAndNotebooksPageSteps.verifyMessageOnShoppingCartPage(String)"
});
formatter.result({
  "duration": 35453400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 21
    }
  ],
  "location": "LaptopsAndNotebooksPageSteps.verifyProductNameOnShoppingCartPage(String)"
});
formatter.result({
  "duration": 23421500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LaptopsAndNotebooksPageSteps.userChangeQuantityTo(String)"
});
formatter.result({
  "duration": 129568700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksPageSteps.userClickOnQuantityUpdateButton()"
});
formatter.result({
  "duration": 729963500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have modified your shopping cart",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNotebooksPageSteps.verifySuccessMessageOnShoppingCartPage(String)"
});
formatter.result({
  "duration": 21845600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£737.45",
      "offset": 23
    }
  ],
  "location": "LaptopsAndNotebooksPageSteps.verifyTotalPriceIsOnShoppingCartPage(String)"
});
formatter.result({
  "duration": 21809600,
  "status": "passed"
});
formatter.after({
  "duration": 596924400,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top menu Test",
  "description": "As a user when i click on any top menu tab it will navigate to that page",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6120302500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify User Should Navigate To Laptops And Notebooks Page Successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-laptops-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User mouse Hover On Laptops And Notebooks Link And Click",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User select menu option \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify user navigate to Laptops And Notebooks Page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginPageSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksPageSteps.userMouseHoverOnLaptopsAndNotebooksLinkAndClick()"
});
formatter.result({
  "duration": 155817700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 25
    }
  ],
  "location": "DesktopSteps.userSelectMenuOption(String)"
});
formatter.result({
  "duration": 1979815400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.verifyUserNavigateToLaptopsAndNotebooksPage()"
});
formatter.result({
  "duration": 25183700,
  "status": "passed"
});
formatter.after({
  "duration": 587820800,
  "status": "passed"
});
});