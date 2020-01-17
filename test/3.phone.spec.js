const chai = require('chai')
const server = require('../app/serve')

const chaiHttp = require('chai-http')
const should = chai.should()
chai.use(chaiHttp)

describe('Tests Phone', () => {
  let user_id
  let token
  it('Register sucess', done => {
    const body = {
      name: 'Victor Camara Lessa',
      email: 'anonimoteste@gmail.com',
      password: '123',
      phones: [
        {
          number: '123456789',
          ddd: '11',
        },
      ],
    }

    chai
      .request(server)
      .post('/api/signUp')
      .send(body)
      .end((err, res) => {
        if (err) return done(err)
        res.should.have.status(200)
        res.body.should.have.property('id')
        res.body.should.have.property('token')
        user_id = res.body.id
        token = res.body.token
        done()
      })
  })
  it('Get phone user', done => {
    chai
      .request(server)
      .set('authentication', `Bearer ${token}`)
      .get(`/api/phones/${user_id}`)
      .end((err, res) => {
        if (err) return done(err)
        res.should.have.status(200)
        res.body[0].should.have.property('number')
        res.body[0].number.be.eql('123456789')
        done()
      })
  })
  it('Change phone', done => {
    const body = {
      number: "965844936"
    }
    chai
      .request(server)
      .set('authentication', `Bearer ${token}`)
      .patch(`/api/phones/${user_id}`)
      .send(body)
      .end((err, res) => {
        if(err) return done(err)
        res.should.have.status(200)
        done()
      })
  })
})