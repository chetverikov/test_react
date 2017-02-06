const BaseService = require('./../lib/bases/BaseService');

class Departments extends BaseService {
  constructor(locator) {
    const model = locator.resolve('sequelize').model('department');

    super(locator, model);
  }
}

module.exports = Departments;