/* eslint-disable camelcase */
module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASS,
    database: process.env.DB,
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "root",
    database: process.env.DB_PASS,
    host: process.env.DB,
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
