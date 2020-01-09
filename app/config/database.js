module.exports = {
  development: {
    dialect: 'postgres',
    host: 'rajje.db.elephantsql.com',
    username: 'lahbxdpi',
    password: 'VV4uQNGVemiNV0aySJwPU1WvSvDle7Jv',
    database: 'lahbxdpi',
    port: '5432',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    dialect: 'postgres',
    host: 'rajje.db.elephantsql.com',
    username: 'lahbxdpi',
    password: 'VV4uQNGVemiNV0aySJwPU1WvSvDle7Jv',
    database: 'lahbxdpi',
    port: '5432',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
}
