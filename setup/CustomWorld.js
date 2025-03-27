const { World } = require('@cucumber/cucumber');
// const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld extends World{
    constructor(options) {
        super(options);
        this.sharedVariable = null; // Initialize shared variable
    }
}

// setWorldConstructor(CustomWorld);
module.exports = CustomWorld;