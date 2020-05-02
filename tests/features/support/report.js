const cucumberJson = require ('wdio-cucumberjs-json-reporter').default;


const {After, Status} = require('cucumber');

After((scenarioResult)=>{
    if (scenarioResult.result.status === Status.FAILED) {
        cucumberJson.attach(browser.takeScreenshot(), 'image/png');
    }
    return scenarioResult.status;
});