Feature: User Authentication
  In order to securely access the system
  As a user
  I want to be able to log in and log out

  Background: The user is on the home page
    Given the user has navigated to the home page

  Scenario: Successful login
    When the user attempts to log in with valid credentials
    Then the user is redirected to the dashboard
    Then choose project
    And the user sees the management dashboard

  Scenario: Logout
    Given the user is logged in and on the dashboard
    When the user logs out
    Then the user is redirected to the home page
