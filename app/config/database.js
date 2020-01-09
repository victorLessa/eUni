module.exports = {
  development: {
    dialect: 'postgres',
    host: 'tuffi.db.elephantsql.com',
    username: 'zalgovvb',
    password: 'Hzy1d3GUnduNAPSarK1Fn91RF10a14Lo',
    database: 'zalgovvb',
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
    host: 'tuffi.db.elephantsql.com',
    username: 'zalgovvb',
    password: 'Hzy1d3GUnduNAPSarK1Fn91RF10a14Lo',
    database: 'zalgovvb',
    port: '5432',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
}
