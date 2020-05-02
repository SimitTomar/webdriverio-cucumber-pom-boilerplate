let override  = require('json-override');

let self = module.exports = {
    getOverriddenData: (completeData,defaultKey,keyToRead) => {
        //Load the Default Data
        let defaultData = completeData[defaultKey];
        let data = defaultData;

        //Check if the Non-Default Data is to be loaded
        if (!keyToRead.includes('Default'))
            data = override(defaultData, completeData[keyToRead], true);
        
        return data;

    }

};