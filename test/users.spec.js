const chai = require('chai')
const server = require('../app/serve')

const chaitHttp = require('chai-http')
const should = chai.should()
chai.use(chaitHttp)

describe('Tests Users', () => {
  let user_id
  let token
  it('Register sucess', done => {
    const body = {
      nome: 'Victor Camara Lessa',
      email: 'anonimoteste@gmail.com',
      password: '123',
      telefones: [
        {
          numero: '123456789',
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
  it('Register with validation error', done => {
    const body = {
      nome: null,
      email: 'anonimoteste@gmail.com',
      password: '123',
      telefones: [
        {
          numero: '123456789',
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
        res.should.have.status(401)
        res.body.should.have.property('message')
        res.body.should.have.property('status')
        res.body.status.should.be.eql(401)
        done()
      })
  })
  it('If the email does not exist, return error with appropriate status plus "Invalid username and / or password" message', done => {
    const body = {
      email: 'anonimotestes@gmail.com',
      password: '111',
    }

    chai
      .request(server)
      .post('/api/signIn')
      .send(body)
      .end((err, res) => {
        if (err) return done(errr)
        res.should.have.status(401)
        res.body.should.have.property('message')
        res.body.should.have.property('status')
        res.body.message.should.be.eql('Usuário e/ou senha inválidos')
        res.body.status.should.be.eql(401)
        done()
      })
  })
  it('If the email exists but the password does not match, return the appropriate status 401 plus the message "Invalid username and / or password', done => {
    const body = {
      email: 'anonimoteste@gmail.com',
      password: '122',
    }

    chai
      .request(server)
      .post('/api/signIn')
      .send(body)
      .end((err, res) => {
        if (err) return done(errr)
        res.should.have.status(401)
        res.body.should.have.property('message')
        res.body.should.have.property('status')
        res.body.message.should.be.eql('Usuário e/ou senha inválidos')
        res.body.status.should.be.eql(401)
        done()
      })
  })
  it('If everything is ok, return the user', done => {
    chai
      .request(server)
      .get(`/api/user/${user_id}`)
      .set('authentication', `Bearer ${token}`)
      .end((err, res) => {
        if (err) return done(err)
        res.should.have.status(200)
        res.body.should.have.property('id')
        res.body.should.have.property('nome')
        res.body.should.have.property('email')
        res.body.should.have.property('data_criacao')
        res.body.should.have.property('data_atualizacao')
        res.body.should.have.property('ultimo_login')
        done()
      })
  })
  it('If the token does not exist, return error with appropriate status with "Unauthorized" message', done => {
    chai
      .request(server)
      .get(`/api/user/${user_id}`)
      .end((err, res) => {
        if (err) return done(err)
        res.should.have.status(401)
        res.body.message.should.be.eql('Não autorizado')
        done()
      })
  })
  it('If not the same token, return error with appropriate status and message "Unauthorized"', done => {
    chai
      .request(server)
      .get(`/api/user/${user_id}`)
      .set('authentication', 'Bearer TesteTokenError')
      .end((err, res) => {
        if (err) return done(err)
        res.should.have.status(401)
        res.body.message.should.be.eql('Não autorizado')
        done()
      })
  })
})
