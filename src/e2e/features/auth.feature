Feature: User Authentication
  In order to access personal account features
  As a user of the website
  I want to be able to log in and log out

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    And I click on the login button
    Then I should be redirected to my dashboard
    And I should see a logout link

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter invalid credentials
    And I click on the login button
    Then I should see an error message
    And I should remain on the login page

  Scenario: Successful logout
    Given I am logged in
    When I click on the logout link
    Then I should be redirected to the homepage
    And I should see a login link
