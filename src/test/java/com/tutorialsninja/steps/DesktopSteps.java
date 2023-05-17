package com.tutorialsninja.steps;

import com.tutorialsninja.pages.DesktopPage;
import com.tutorialsninja.pages.HomePage;
import com.tutorialsninja.pages.ProductPage;
import com.tutorialsninja.pages.ShoppingCartPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.Collections;

public class DesktopSteps {
    @And("^User mouse Hover On Desktops Link And Click$")
    public void userMouseHoverOnDesktopsLinkAndClick() {
        new HomePage().mouseHoverOnDesktopsLinkAndClick();
    }

    @And("^User select menu option \"([^\"]*)\"$")
    public void userSelectMenuOption(String option) throws InterruptedException {
        new HomePage().selectMenu(option);
    }

    @And("^User select Sort By Option \"([^\"]*)\"$")
    public void userSelectSortByOption(String option) throws InterruptedException {

    }

    @Then("^Verify all product shorted in Z-A order$")
    public void verifyAllProductShortedInZAOrder() throws InterruptedException {
        // Get all the products name and stored into array list
        ArrayList<String> originalProductsName = new DesktopPage().getProductsNameList();
        // Sort By Reverse order
        Collections.reverse(originalProductsName);
        // Select sort by Name Z - A
        new DesktopPage().selectSortByOption("Name (Z - A)");
        ArrayList<String> afterSortByZToAProductsName = new DesktopPage().getProductsNameList();
        Assert.assertEquals(originalProductsName, afterSortByZToAProductsName, "Product not sorted into Z to A order");
    }

    @And("^User select currency \"([^\"]*)\"$")
    public void userSelectCurrency(String value) throws InterruptedException {
        new HomePage().selectCurrency("£Pound Sterling");
    }

    @And("^User select Sort  Option \"([^\"]*)\"$")
    public void userSelectSortOption(String value) throws InterruptedException {
        new DesktopPage().selectSortByOption("Name (A - Z)");
    }

    @And("^User select Product By Name \"([^\"]*)\"$")
    public void userSelectProductByName(String product) {
        new DesktopPage().selectProductByName(product);
    }

    @Then("^Verify \"([^\"]*)\" product message$")
    public void verifyProductMessage(String expectedMessage) {
        String actualMessage = new ProductPage().getProductText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @And("^User select date \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void userSelectDate(String day, String month, String yr) {
        new ProductPage().selectDeliveryDate(day, month, yr);
    }

    @And("^User enter quantity \"([^\"]*)\"$")
    public void userEnterQuantity(String qty) {
        new ProductPage().enterQuantity(qty);
    }

    @And("^User click On Add To CartButton$")
    public void userClickOnAddToCartButton() {
        new ProductPage().clickOnAddToCartButton();
    }

    @Then("^Verify \"([^\"]*)\"$")
    public void verify(String expectedMessage) {
        String actualMessage = new ProductPage().getProductAddedSuccessMessage();
        String[] actmsg = actualMessage.split("!");
        Assert.assertEquals(expectedMessage, actmsg[0]);
    }

    @And("^User click On Shopping Cart Link Into Message$")
    public void userClickOnShoppingCartLinkIntoMessage() {
        new ProductPage().clickOnShoppingCartLinkIntoMessage();
    }

    @Then("^Verify \"([^\"]*)\" message on cart page$")
    public void verifyMessageOnCartPage(String arg0) {
        Assert.assertTrue(new ShoppingCartPage().getShoppingCartText().contains(arg0));
    }

    @Then("^User match product name \"([^\"]*)\"$")
    public void userMatchProductName(String message) {
        Assert.assertEquals(new ShoppingCartPage().getProductName(), message, "Product name not matched");
    }

    @Then("^User verify delivery date  \"([^\"]*)\"$")
    public void userVerifyDeliveryDate(String arg0) {
        Assert.assertTrue(new ShoppingCartPage().getDeliveryDate().contains(arg0), "Delivery date not matched");
    }

    @Then("^User Get model name as \"([^\"]*)\"$")
    public void userGetModelNameAs(String arg0) {
        Assert.assertEquals(new ShoppingCartPage().getModel(), arg0, "Model not matched");
    }

    @Then("^Verify total price is \"([^\"]*)\"$")
    public void verifyTotalPriceIs(String arg0) {
        Assert.assertEquals(new ShoppingCartPage().getTotal(), arg0, "Total not matched");
    }
}
