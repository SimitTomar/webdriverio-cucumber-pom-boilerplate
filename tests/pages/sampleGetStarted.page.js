const NativePage = require('./native.page.js');

class sampleGetStartedPage extends NativePage {

  get webdriverIOGetStartedPageElement() {
    return this.getPage('sampleGetStarted.locators');
  }

  validateGetStartedPage(){
    const getStartedHeader = $(this.webdriverIOGetStartedPageElement.getStartedHeader)
    getStartedHeader.waitForDisplayed();
  }
}

module.exports = sampleGetStartedPage;
