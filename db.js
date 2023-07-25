const mysql = require('mysql2/promise');

// 사용자 설정
const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'testid',
  password: 'test01!',
  database: 'testdb'
});

const getConn = async() => {
  return await pool.getConnection(async (conn) => conn);
};

module.exports = {
  getConn
};
