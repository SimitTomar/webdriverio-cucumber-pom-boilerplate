/* eslint import/no-dynamic-require: "off" */
const fs = require('fs');
const path = require('path');

class PageFactory {
    static getNativePage(name) {

        return PageFactory.createPage([
            `../locators/${name}.js`
        ]);
    }

    
    static createPage(trialPaths) {
        for (const trialPath of trialPaths) {
            if (fs.existsSync(path.join(__dirname, trialPath))) {
                const Page = require(trialPath);
                return new Page();
            }
        }
        throw new Error(`Page ${trialPaths.join(' or ')} not found!`);
    }
}

module.exports = PageFactory;
