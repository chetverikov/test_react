const BaseCollection = require('../../lib/bases/BaseCollection');

class Employees extends BaseCollection {
  constructor(locator) {
    super(locator, locator.resolve('serviceEmployees'))
  }
}

module.exports = Employees;
