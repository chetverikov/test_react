const BaseService = require('./../lib/bases/BaseService');

class Employees extends BaseService {
  constructor(locator) {
    const model = locator.resolve('sequelize').model('employee');

    super(locator, model);
  }
}

module.exports = Employees;