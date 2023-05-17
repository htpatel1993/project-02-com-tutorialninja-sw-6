package com.tutorialsninja.steps;

import com.tutorialsninja.pages.ComponentsPage;
import com.tutorialsninja.pages.DesktopPage;
import com.tutorialsninja.pages.HomePage;
import com.tutorialsninja.pages.LaptopsAndNotebooksPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class TopMenuSteps {
    @Then("^Verify user navigate to desktop page$")
    public void verifyUserNavigateToDesktopPage() {
        String expectedMessage = "Desktops";
        String actualMessage = new DesktopPage().getDesktopsText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @Then("^Verify user navigate to Laptops And Notebooks Page$")
    public void verifyUserNavigateToLaptopsAndNotebooksPage() {
        String expectedMessage = "Laptops & Notebooks";
        String actualMessage = new LaptopsAndNotebooksPage().getLaptopsAndNotebooksText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @When("^User mouse Hover On Component Link And Click$")
    public void userMouseHoverOnComponentLinkAndClick() throws InterruptedException {
        new HomePage().mouseHoverOnComponentLinkAndClick();
    }

    @Then("^Verify user navigate to Components Page$")
    public void verifyUserNavigateToComponentsPage() {
        String expectedMessage = "Components";
        String actualMessage = new ComponentsPage().getComponentsText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }
}
