@saucedemo @login @positive
Feature: Saucedemo Positive Login

    Background:
        Given user is on Saucedemo Login Page


    @positive-tc
    Scenario Outline: Successful Login
        And user input username with "<username>"
        And user input password with "<password>"
        When user click login button
        Then user should redirect to the homepage

        Examples:
        | username      | password      |
        | standard_user | secret_sauce  |
        | visual_user | secret_sauce |

