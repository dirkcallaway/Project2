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
    database: "project2_db",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
