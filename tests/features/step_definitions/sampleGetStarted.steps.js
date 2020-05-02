const { Then } = require('cucumber');

const getStartedPage = require('../../pages/sampleGetStarted.page.js');
const getStarted = new getStartedPage();


Then(/^I should get redirected to the Get Started Page$/, () => {
    getStarted.validateGetStartedPage();
});


