const Departments = require('./Departments');
const Employees = require('./Employees');

module.exports = {
  register(locator) {
    locator.register('serviceDepartments', Departments, true);
    locator.register('serviceEmployees', Employees, true);
  }
};
