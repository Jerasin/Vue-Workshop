// module.exports = {
//     user: "root",
//     host: "localhost",
//     port: 3306,
//     password: "Jc@123456",
//     database: "master_blog",
//     insecureAuth: true,
//   };

const Sequelize = require("sequelize");
const mysql = require('mysql2');

// Option 1: Passing parameters separately
const sequelize = new Sequelize("master_shop", "root", "Jc@123456", {
  host: "localhost",
  dialect: "mysql", /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  logging: console.log,
  // query: {
  //   raw: true
  // },
  // logging:true,
  dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true
  },
  timezone: '+07:00' //for writing to database
});

(
  async () =>{
  await sequelize.authenticate();
  }
)();

module.exports = sequelize ;
