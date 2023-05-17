package com.tutorialsninja.steps;

import com.tutorialsninja.pages.AccountLoginPage;
import com.tutorialsninja.pages.HomePage;
import com.tutorialsninja.pages.MyAccountPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class AccountLoginPageSteps {
    @Given("^User is on homePage$")
    public void userIsOnHomePage() {

    }

    @And("^User click on myaccount tab$")
    public void userClickOnMyaccountTab() throws InterruptedException {
        new HomePage().clickOnMyQAccountTab();
    }

    @And("^User select \"([^\"]*)\" option from my account$")
    public void userSelectOptionFromMyAccount(String option) {
        new HomePage().selectMyAccountOptions(option);
    }

    @Then("^Verify \"([^\"]*)\" message on account login page$")
    public void verifyMessageOnAccountLoginPage(String expectedMessage) {
        String actualMessage = new AccountLoginPage().getReturningCustomerText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @And("^User enter email address \"([^\"]*)\"$")
    public void userEnterEmailAddress(String email) {
        new AccountLoginPage().enterEmailAddress("admin123456@gmail.com");
    }

    @And("^User enter password \"([^\"]*)\"$")
    public void userEnterPassword(String password) {
        new AccountLoginPage().enterPassword(password);
    }

    @And("^User click On Login Button$")
    public void userClickOnLoginButton() {
        new AccountLoginPage().clickOnLoginButton();
    }

    @And("^User select \"([^\"]*)\" option from my account option$")
    public void userSelectOptionFromMyAccountOption(String option) {
        new HomePage().selectMyAccountOptions(option);
    }

    @Then("^Verify \"([^\"]*)\" message$")
    public void verifyMessage(String expectedMessage) {
        String actualMessage = new MyAccountPage().getAccountLogoutText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }
}
