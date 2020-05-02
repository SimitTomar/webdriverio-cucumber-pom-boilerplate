const { Given, When, Then } = require('cucumber');

const homePage = require('../../pages/sampleHome.page.js');
const home = new homePage();


Given(/^I am on the webdriverIO homepage$/, () => {
    home.openwebdriverIOHomepage();
});

When(/^I search for the Get Started keyword$/, () => {
    home.searchGetStarted();
});

When(/^I search for an invalid (.*)$/, (searchKeyword) => {
    home.searchInvalidKeyword(searchKeyword);
});

Then(/^I should get No Results Found Message$/, () => {
    home.validateNoResultsFoundMessage();
});