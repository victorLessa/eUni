# API Authentication

## Descriptions

- Potgers database is hosted at ElephantSQL
- Using ORM sequelize to create and make database queries
- Using pm2 to start the server on heroku

## ✋🏻 Prerequisites

- Node.js
- Yarn

## Setup

### To install dependences

```bash
yarn install
```

### To install migrations

```bash
yarn sequelize db:migrate
```

### To run server locally

```bash
yarn dev
```

### To run tests

```bash
yarn test
```

## Sign Up

### Route POST -> api/signUp

- Register users

```js
router.post('/signUp', sign_up_validate, (req, res, next) =>
  ...
)
```

- Requisition body

```json
{
  "nome": "Concrete",
  "email": "concrete@gmail.com",
  "senha": "123",
  "telefones": [
    {
      "numero": "965844936",
      "ddd": "21"
    }
  ]
}
```

- Return example

```json
{
  "id": 1,
  "data_criacao": "2019-11-11T21:44:49.871Z",
  "data_atualizacao": "2019-11-11T21:44:49.871Z",
  "ultimo_login": "11 de Novembro de 2019 às 18:44",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTczNTA4NjkwLCJleHAiOjE1NzM1MTczMzB9.AW1tlb6xxIllTHdx9zDrWdfN_ow9mTjlspSSdZvCjvE"
}
```

## Sign In

### Route POST -> api/signIn

- User access

```js
router.post('/signIn', sign_in_validate, (req, res, next) =>
  ...
)
```

- Requisition body

```js
{
	"email": "concrete@gmail.com",
	"senha": "123"
}
```

- Return example

```json
{
  "id": 1,
  "data_criacao": "2019-11-11T21:44:49.871Z",
  "data_atualizacao": "2019-11-11T21:44:49.871Z",
  "ultimo_login": "11 de Novembro de 2019 às 18:45",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTczNTA4NzMxLCJleHAiOjE1NzM1MTczNzF9.IRdd_0ZxJ0B77IW3R1E7m_DGHaZ9I_KdHVnSQa1fDBM"
}
```

## Get User

### route GET api/user/:id

- Search for user

```js
router.get('/user/:user_id', (req, res, next) => {
  ...
})
```

- Header

```js
header: {
  Authentication: 'Bearer {token}'
}
```

- Return example

```json
{
  "id": 1,
  "nome": "Concrete",
  "email": "concrete@gmail.com",
  "data_criacao": "2019-11-11T15:50:24.822Z",
  "data_atualizacao": "2019-11-11T21:37:13.440Z",
  "ultimo_login": "11 de Novembro de 2019 às 18:37"
}
or if you are more than 30 minutes logged in
{
  "message": "Sessão inválida",
  "status": 401
}
```
