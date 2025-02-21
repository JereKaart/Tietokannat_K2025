const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'netuser',
    password: 'netpass',
    database: 'netdb'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Connected to the MySQL server.');
});

module.exports = connection;

