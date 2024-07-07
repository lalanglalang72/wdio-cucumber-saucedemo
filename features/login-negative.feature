@saucedemo @login @negative
Feature: Saucedemo Negative Login

    Background:
        Given user is on Saucedemo Login Page

    @negative-tc
    Scenario Outline: Successful Login
        And user input username with "<username>"
        And user input password with "<password>"
        When user click login button
        Then should see an error message

        Examples:
        | username      | password      |
        | invalid_user | secret_sauce  |
        | standard_user | invalid_password |

