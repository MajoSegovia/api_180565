const mysql=require('mysql');


const mysqlConnection = mysql.createPool({
  host: 'sql5.freemysqlhosting.net',
  port: '3306',
  user: 'sql5450725',
  password: 'AucFdQnczN',
  database: 'sql5450725'
  });


  module.exports = mysqlConnection;
