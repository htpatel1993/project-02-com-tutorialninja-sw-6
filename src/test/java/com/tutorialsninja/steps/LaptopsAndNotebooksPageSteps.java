package com.tutorialsninja.steps;

import com.tutorialsninja.pages.HomePage;
import com.tutorialsninja.pages.LaptopsAndNotebooksPage;
import com.tutorialsninja.pages.ProductPage;
import com.tutorialsninja.pages.ShoppingCartPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LaptopsAndNotebooksPageSteps {
    @And("^User mouse Hover On Laptops And Notebooks Link And Click$")
    public void userMouseHoverOnLaptopsAndNotebooksLinkAndClick() {
        new HomePage().mouseHoverOnLaptopsAndNotebooksLinkAndClick();
    }


    @Then("^Verify all product shorted in Price \\(High > Low\\) order$")
    public void verifyAllProductShortedInPriceHighLowOrder() {
        List<Double> originalProductsPrice = new LaptopsAndNotebooksPage().getProductsPriceList();
        // Sort By Reverse order
        Collections.sort(originalProductsPrice, Collections.reverseOrder());
        // Select sort by Price (High > Low)
        new LaptopsAndNotebooksPage().selectSortByOption("Price (High > Low)");
        // After filter Price (High > Low) Get all the products name and stored into array list
        ArrayList<Double> afterSortByPrice = new LaptopsAndNotebooksPage().getProductsPriceList();
        Assert.assertEquals(originalProductsPrice, afterSortByPrice, "Product not sorted by price High to Low");
    }

    @And("^User select Sort By Option \"([^\"]*)\" on Show AllLaptops & Notebooks page$")
    public void userSelectSortByOptionOnShowAllLaptopsNotebooksPage(String value)
    {
        new LaptopsAndNotebooksPage().selectSortByOption("Price (High > Low)");
    }

    @And("^User select product \"([^\"]*)\"$")
    public void userSelectProduct(String productName)
    {
        new LaptopsAndNotebooksPage().selectProductByName("MacBook");
    }

    @Then("^Verify \"([^\"]*)\" as a product name on  product page$")
    public void verifyAsAProductNameOnProductPage(String expectedMessage)
    {
        String actualMessage = new ProductPage().getProductText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @And("^User click On ShoppingCart Link Into Message$")
    public void userClickOnShoppingCartLinkIntoMessage() {
        new ProductPage().clickOnShoppingCartLinkIntoMessage();
    }

    @Then("^Verify \"([^\"]*)\" message on shopping cart page$")
    public void verifyMessageOnShoppingCartPage(String expectedMessage)
    {
        String actualMessage = new ShoppingCartPage().getShoppingCartText();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @Then("^Verify product name \"([^\"]*)\" on shopping cart page$")
    public void verifyProductNameOnShoppingCartPage(String expectedMessage)
    {
        String actualMessage = new ShoppingCartPage().getProductName();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @And("^User change quantity to \"([^\"]*)\"$")
    public void userChangeQuantityTo(String qty)
    {
        new ShoppingCartPage().changeQuantity(qty);
    }

    @And("^User click On quantity Update Button$")
    public void userClickOnQuantityUpdateButton() {
        new ShoppingCartPage().clickOnQtyUpdateButton();
    }

    @Then("^Verify total price is \"([^\"]*)\" on shopping cart page$")
    public void verifyTotalPriceIsOnShoppingCartPage(String expectedMessage)
    {
        String actualMessage = new ShoppingCartPage().getTotal();
        Assert.assertEquals(expectedMessage, actualMessage);
    }

    @And("^User click On Add To Cart Button on  product page$")
    public void userClickOnAddToCartButtonOnProductPage() {
        new ProductPage().clickOnAddToCartButton();
    }

    @Then("^Verify \"([^\"]*)\" message on product page$")
    public void verifyMessageOnProductPage(String expectedMessage)  {
        String actualMessage = new ProductPage().getProductAddedSuccessMessage();
        String[] actmsg = actualMessage.split("!");
        Assert.assertEquals(expectedMessage, actmsg[0]);
    }

    @Then("^Verify  success \"([^\"]*)\" message on shopping cart page$")
    public void verifySuccessMessageOnShoppingCartPage(String expectedMessage)  {
        String actualMessage = new ShoppingCartPage().getSuccessModifiedMessage();
        String[] actmsg = actualMessage.split("!");
        Assert.assertEquals(expectedMessage, actmsg[0]);
    }
}
