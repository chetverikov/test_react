const server = require('../../../../server');
const supertest = require('supertest');
const test = require('ava');

let sequelize;

test.before(() => {
  sequelize = server._locator.resolve('sequelize');

  return sequelize
    .sync({force: true})
    .then(() => server.listen());
});

test.after.always(() => {
  server._httpServer.close();
});

test('should response list of endpoints', t => {
  return supertest(server._httpServer)
    .get('/')
    .expect(200)
    .expect(response => {
      t.truthy(response.body['/departments']);
      t.truthy(response.body['/employees']);
    })
});

