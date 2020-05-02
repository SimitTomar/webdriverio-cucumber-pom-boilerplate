Feature: Validate the Search functionality of webdriverIO Site

  @webdriverIOScenario1
  Scenario: As a user, I should get relevant Search Results on searching for valid keywords from the webdriverIO Homepage's Search Bar

    Given I am on the webdriverIO homepage
    When I search for the Get Started keyword
    Then I should get redirected to the Get Started Page


  @webdriverIOScenario2
  Scenario Outline: As a user, I should get No Search Results Found Message in the search panel on searching for invalid keywords

    Given I am on the webdriverIO homepage
    When I search for an invalid <search keyword>
    Then I should get No Results Found Message

    Examples:
      | search keyword    |
      | specialCharacters |
      | invalidNumbers    |