const BaseCollection = require('../../lib/bases/BaseCollection');

class Departments extends BaseCollection {
  constructor(locator) {
    super(locator, locator.resolve('serviceDepartments'))
  }
}

module.exports = Departments;
