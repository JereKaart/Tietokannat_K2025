const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'netuser',
    password: 'netpass',
    database: 'netdb'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database.");
});

module.exports = db;



