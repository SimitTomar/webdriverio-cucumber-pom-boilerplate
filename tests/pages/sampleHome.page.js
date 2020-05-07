const NativePage = require('./native.page.js');
const webdriverIOHomePageData = require('../files/testData/sampleHome.data.js');

class sampleHomePage extends NativePage {

  get webdriverIOHomePageElement() {
    return this.getPage('sampleHome.locators');
  }

  openwebdriverIOHomepage() {
    browser.url(webdriverIOHomePageData['url']);
  }

  searchGetStarted() {

    const searchField = $(this.webdriverIOHomePageElement.searchField)
    searchField.click()
    searchField.setValue(webdriverIOHomePageData['getStartedSearchQuery'])

    const getStartedLink = $(this.webdriverIOHomePageElement.getStartedLink)
    getStartedLink.click()

  }

  searchInvalidKeyword(searchKeyword) {
    const searchField = $(this.webdriverIOHomePageElement.searchField)
    searchField.click()
    searchField.setValue(webdriverIOHomePageData[searchKeyword])
  }

  validateNoResultsFoundMessage() {
    const noResultsFound = $(this.webdriverIOHomePageElement.noResultsFound)
      noResultsFound.waitForDisplayed();
  }

}

module.exports = sampleHomePage;
