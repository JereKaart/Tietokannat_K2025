const db = require('../db');
console.log('Borrower model loaded'); 
const Borrower = {
    getAll: (callback) => {
        return db.query('SELECT * FROM borrower', callback);  // Tässä hakemus kaikki lainanottajat
    },
    getById: (id, callback) => {
        return db.query('SELECT * FROM borrower WHERE id_borrower = ?', [id], callback);
    },
    create: (borrower, callback) => {
        return db.query('INSERT INTO borrower (fname, lname, streetaddress) VALUES (?, ?, ?)', [borrower.fname, borrower.lname, borrower.streetaddress], callback);
    },
    update: (id, borrower, callback) => {
        return db.query('UPDATE borrower SET fname = ?, lname = ?, streetaddress = ? WHERE id_borrower = ?', [borrower.fname, borrower.lname, borrower.streetaddress, id], callback);
    },
    delete: (id, callback) => {
        return db.query('DELETE FROM borrower WHERE id_borrower = ?', [id], callback);
    }
};

module.exports = Borrower;



