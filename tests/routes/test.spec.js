/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Test, conn } = require('../../src/db.js');

const agent = session(app);
const test = {
  name: 'Test',
};

describe('Test routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Test.sync({ force: true })
    .then(() => Test.create(test)));
  describe('GET /', () => {
    it('should get 200', () =>
      agent.get('/').expect(200)
    );
  });
});
