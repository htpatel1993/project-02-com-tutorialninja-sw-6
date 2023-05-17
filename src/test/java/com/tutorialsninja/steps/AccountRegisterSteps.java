package com.tutorialsninja.steps;

import com.tutorialsninja.pages.AccountRegisterPage;
import com.tutorialsninja.pages.MyAccountPage;
import com.tutorialsninja.utility.Utility;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class AccountRegisterSteps {
    @Then("^Verify \"([^\"]*)\" message on Register page$")
    public void verifyMessageOnRegisterPage(String expectedMessage) {
        String actualMessage = new AccountRegisterPage().getRegisterAccountText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @And("^User enter first name \"([^\"]*)\"$")
    public void userEnterFirstName(String firstName) {
        new AccountRegisterPage().enterFirstName(firstName);
    }

    @And("^User enter last name \"([^\"]*)\"$")
    public void userEnterLastName(String lastName) {
        new AccountRegisterPage().enterLastName(lastName);
    }

    @And("^User enter email \"([^\"]*)\"$")
    public void userEnterEmail(String email) {
        Utility ut = new Utility();
        new AccountRegisterPage().enterEmail(email + ut.getRandomString(3) + "@gmail.com");
    }

    @And("^User enter telephone number \"([^\"]*)\"$")
    public void userEnterTelephoneNumber(String phone) {
        new AccountRegisterPage().enterTelephone(phone);
    }

    @And("^User enter password \"([^\"]*)\" on register page$")
    public void userEnterPasswordOnRegisterPage(String password) {
        new AccountRegisterPage().enterPassword(password);
    }

    @And("^User enter confirm password \"([^\"]*)\"$")
    public void userEnterConfirmPassword(String confirmPassword) {
        new AccountRegisterPage().enterConfirmPassword(confirmPassword);
    }

    @And("^User select \"([^\"]*)\" on subscription$")
    public void userSelectOnSubscription(String option) {
        new AccountRegisterPage().selectSubscription(option);
    }

    @And("^User click On Privacy Policy CheckBox$")
    public void userClickOnPrivacyPolicyCheckBox() {
        new AccountRegisterPage().clickOnPrivacyPolicyCheckBox();
    }

    @And("^User click On Continue Button$")
    public void userClickOnContinueButton() {
        new AccountRegisterPage().clickOnContinueButton();
    }

    @Then("^Verify  \"([^\"]*)\" message displayed$")
    public void verifyMessageDisplayed(String expectedMessage) {
        String actualMessage = new MyAccountPage().getYourAccountHasBeenCreatedText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @And("^User click On Continue Button on MyAccount page$")
    public void userClickOnContinueButtonOnMyAccountPage() throws InterruptedException {
        new MyAccountPage().clickOnContinueButton();
    }


    @Then("^Verify \"([^\"]*)\" message on my account page$")
    public void verifyMessageOnMyAccountPage(String expectedMessage) {
        String actualMessage = new MyAccountPage().getAccountLogoutText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }
}
