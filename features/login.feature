Feature: Login

 Scenario Outline: Login to the E-Shop Application
    Given User launched eshop login page
    When User logged in eshop using the valid emailid "<EmailID>" and the valid password "<Password>"
    Then user should see a shop home page

    Examples:
      | EmailID         | Password     |
      | standard_user   | secret_sauce |
      | problem_user    | secret_sauce |

  Scenario Outline: Login to the E-Shop Application with Locked User
    Given User launched eshop login page
    When User logged in eshop using the valid emailid "<EmailID>" and the valid password "<Password>"
    Then User should see a message of locked user

    Examples:
      | EmailID         | Password     |
      | locked_out_user | secret_sauce |

  Scenario Outline: Login to the E-Shop Application with Wrong Password
    Given User launched eshop login page
    When User logged in eshop using the invalid emailid "<EmailID>" and the invalid password "<Password>"
    Then User should not get logged in

    Examples:
      | EmailID       | Password  |
      | standard_user | Testing$1 |