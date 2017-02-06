const server = require('../../../../server');
const supertest = require('supertest');
const test = require('ava');
const helpers = require('../../../helpers');

let locator;

test.before(() => {
  locator = server._locator;

  return locator.resolve('sequelize')
    .sync({force: true})
    .then(() => server.listen());
});

test.after.always(() => {
  server._httpServer.close();
  return locator.resolve('sequelize').drop();
});

test('should return list of departments', t => {
  return locator.resolve('serviceDepartments')
    .create({name: 'Bobo'})
    .then(department =>
      supertest(server._httpServer)
        .get(`/departments`)
        .expect(200)
        .expect(response => {
          t.true(Array.isArray(response.body));
          t.truthy(response.body.find(dept => dept.id === department.id));
        })
    );
});

test('should return department by id', t => {
  return locator.resolve('serviceDepartments')
    .create({name: 'Bobo'})
    .then(department =>
      supertest(server._httpServer)
        .get(`/departments/${department.id}`)
        .expect(200)
        .expect(response => {
          t.true(typeof response.body === 'object' && response.body !== null);
          t.true(response.body.id === department.id);
          t.true(response.body.name === department.name);
        })
    );
});

test('should return updated department by id', t => {
  const forUpdate = {
    name: 'Barbos'
  };

  return locator.resolve('serviceDepartments')
    .create({name: 'Bobo'})
    .then(department =>
      supertest(server._httpServer)
        .put(`/departments/${department.id}`)
        .send(forUpdate)
        .expect(200)
        .expect(response => {
          t.true(typeof response.body === 'object' && response.body !== null);
          t.true(response.body.id === department.id);
          t.true(response.body.name === forUpdate.name);
        })
    );
});

