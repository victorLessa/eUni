const chai = require('chai')

const serve = require('../app/serve')

const chaiHttp = require('chai-http')
const should = chai.should()
chai.use(chaiHttp)

describe('Tests Event', () => {
  let token
  it('Login user', done => {
    const body = {
      email: "anonimoteste@gmail.com",
      password: '123'
    }

    chai.request(serve)
      .post('/api/signIn')
      .send(body)
      .end((err, res) => {
        if (err) return done(err)
        res.should.have.status(200)
        res.body.should.have.property('token')
        token = res.body.token
        done()
      })
  })

  it('Insert event', done => {
    const body = {
      day_week: "1",
      name: "Aula Joyse",
      description: "Pior aula",
      hours: "19:30",
      date: "2020-05-15"
    }

    chai.request(serve)
      .post('/api/events/create')
      .set('authentication', `Bearer ${token}`)
      .send(body)
      .end((err, res) => {
        if (err) return done(err)
        res.should.have.status(200)
        done()
      })
  })

  it('Get details user', done => {
    chai.request(serve)
      .get(`/api/user/details`)
      .set('authentication', `Bearer ${token}`)
      .end((err, res) => {
        if(err) return done(err)
        res.should.have.status(200)
        res.body.should.have.property('events')
        res.body.should.have.property('phones')
        done()
      })
    }) 
    
    it('Update event', done => {
      const body = {
        name: "Alter name"
      }

      chai.request(serve)
      .patch('/api/event/update/1')
      .set('authentication', `Bearer ${token}`)
      .send(body)
      .end((err, res) => {
        if(err) return done(err)
        res.should.have.status(200)
        res.body.should.have.property('message')
        res.body.message.should.be.eql('Evento atualizado com sucesso!')
        done()
      })
  })
})