const request = require('supertest');
const proxy = require('../helper');
const router = require('../../controllers/account');

proxy.use(router);

describe('GET /account/get_userinfo', () => {

  const user = {
    userName: 'user1'
  };

  const userNew = {
    userName: 'user3'
  };

  const userRes = {
    code: 0,
    data: {
      code: 0,
      userId: 5,
      userName: 'user1',
      realName: 'realName1',
      idNumber: 'idNumber1', 
      email: 'email1', 
      phone: 'phone1'
    }
  };

  const userNewRes = {
    code: -1,
    error: {
      code: -1
    } 
  };

  it('returns code 0 on successful user information get', (done) => {
    request(proxy)
      .get('/account/get_userinfo')
      .query(user)
      .expect(userRes)
      .expect(200, done);
  });

  it('returns code -1 if userName does not exist', (done) => {
    request(proxy)
      .get('/account/get_userinfo')
      .query(userNew)
      .expect(userNewRes)
      .expect(200, done);
  });
});
