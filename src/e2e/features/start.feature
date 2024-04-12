@slow
Feature: Playwright site

    @start
    Scenario: Check title
        Given I open url "https://playwright.dev"
        When I click link "Get started"
        Then I see in title "Playwright"
