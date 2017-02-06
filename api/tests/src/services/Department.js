const test = require('ava');
const Service = require('../../../services/Departments');
const helpers = require('../../helpers');

let service;
let locator;

test.before(() => {
  locator = helpers.getLocatorMock();

  const sequelize = locator.resolve('sequelize');

  service = new Service(locator);

  return sequelize.sync({force: true});
});

test.after.always(() =>
  locator.resolve('sequelize').drop()
);

test('should create new department', t => {
  const data = {
    name: 'Foo',
    description: 'This is description'
  };

  return service
    .create(data)
    .then(result => {
      t.true(result.name === data.name);
      t.true(result.description === data.description);
    })
});

test('should return a department by id', t => {
  const data = {
    name: 'Foo',
    description: 'This is description'
  };

  return service
    .create(data)
    .then(department => service.findById(department.id))
    .then(department => {
      t.true(department.name === data.name);
      t.true(department.description === data.description);
    })
});

test('should return updated department by id', t => {
  const data = {
    name: 'Foo',
    description: 'This is description'
  };

  const forUpdate = {
    name: 'Bar'
  };

  return service
    .create(data)
    .then(department => service.update(department.id, forUpdate))
    .then(department => {
      t.true(department.name === forUpdate.name);
      t.true(department.description === data.description);
    })
});

test('should return delete department by id', t => {
  const data = {
    name: 'Foo',
    description: 'This is description'
  };

  return service
    .create(data)
    .then(department =>
      service
        .delete(department.id)
        .then(() => service.findById(department.id))
    )
    .catch(reason => {
      const errors = locator.resolve('appErrors');

      t.true(reason instanceof errors.NotFoundError);
    })
});

test('should throw exception NotFound when update department by not exist id', t => {
  const errors = locator.resolve('appErrors');

  return service.update(999, {})
    .catch(reason => {
      t.true(reason instanceof errors.NotFoundError);
    })
});

test('should throw exception NotFound when find department by not exist id', t => {
  const errors = locator.resolve('appErrors');

  return service.findById(999)
    .catch(reason => {
      t.true(reason instanceof errors.NotFoundError);
    })
});