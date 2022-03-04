Feature: Add-Product

  
Scenario Outline: Add Product to Cart
    Given User launched eshop login page
    When User logged in eshop using the valid emailid "<EmailID>" and the valid password "<Password>"
    And User clicks on the "<Product>" link
    And User adds product to the cart
    Then User should be able to see the listed product "<Product>" on the cart

    Examples:
      | EmailID       | Password     | Product                 |
      | standard_user | secret_sauce | Sauce Labs Bolt T-Shirt |
      | standard_user | secret_sauce | Sauce Labs Onesie |
      | standard_user | secret_sauce | Test.allTheThings() T-Shirt (Red) |
      | standard_user | secret_sauce | Sauce Labs Fleece Jacket |
      | standard_user | secret_sauce | Sauce Labs Bike Light |
      | standard_user | secret_sauce | Sauce Labs Backpack |