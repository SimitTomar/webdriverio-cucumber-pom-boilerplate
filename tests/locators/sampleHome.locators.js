class homeLocators {
  constructor() {
    this.searchField = './/input[@class="ds-input"]';
    this.getStartedLink = '//*[@class="button getstarted"]';
    this.noResultsFound = './/div[@class="algolia-docsearch-suggestion--text"][contains(text(), "No results found for query")]';
  }
}

module.exports = homeLocators;
