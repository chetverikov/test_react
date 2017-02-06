const test = require('ava');
const DepartmentsService = require('../../../services/Departments');
const EmployeesService = require('../../../services/Employees');
const helpers = require('../../helpers');
const Sequelize = require('sequelize');

let employeeService;
let departmentsService;
let locator;
let department;

test.before(() => {
  locator = helpers.getLocatorMock();

  const sequelize = locator.resolve('sequelize');


  return sequelize
    .sync({force: true})
    .then(() => {
      departmentsService = new DepartmentsService(locator);
      employeeService = new EmployeesService(locator);

      return departmentsService.create({name: 'Foo department'});
    })
    .then(row => {
      department = row
    });
});

test.after.always(() =>
  locator.resolve('sequelize').drop()
);

test('should create new employee', t => {
  const data = {
    firstName: 'Foo',
    lastName: 'Barovich',
    departmentId: department.id
  };

  return employeeService.create(data)
    .then(employee => {
      t.true(employee.firstName === data.firstName);
      t.true(employee.lastName === data.lastName);
    });
});


test('should return a employee by id', t => {
  const data = {
    firstName: 'Foo',
    lastName: 'Barovich',
    departmentId: department.id
  };

  return employeeService
    .create(data)
    .then(employee => employeeService.findById(employee.id))
    .then(employee => {
      t.true(employee.firstName === data.firstName);
      t.true(employee.lastName === data.lastName);
    })
});

test('should throw exception if passed not exist departmentId', t => {
  const data = {
    firstName: 'Foo',
    lastName: 'Barovich',
    departmentId: 989898
  };

  return employeeService
    .create(data)
    .catch(reason => {
      t.true(reason instanceof Sequelize.ForeignKeyConstraintError)
    });
});
