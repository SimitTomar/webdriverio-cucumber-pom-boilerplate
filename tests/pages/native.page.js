const PageFactory = require('./page.factory.js');

class NativePage {

  constructor() {
    this.page = {};
  }

  getPage(name) {
    if (!(name in this.page)) {
      this.page.name = PageFactory.getNativePage(name);
    }
    return this.page.name;
  }
}

module.exports = NativePage;
