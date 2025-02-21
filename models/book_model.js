const db = require('../db');  // Varmista, että tämä polku on oikein
console.log('Book model loaded');
const Book = {
    getAll: (callback) => {
        return db.query('SELECT * FROM book', callback);
    },
    getById: (id, callback) => {
        return db.query('SELECT * FROM book WHERE id_book = ?', [id], callback);
    },
    create: (book, callback) => {
        return db.query('INSERT INTO book (name, author, isbn) VALUES (?, ?, ?)', [book.name, book.author, book.isbn], callback);
    },
    update: (id, book, callback) => {
        return db.query('UPDATE book SET name = ?, author = ?, isbn = ? WHERE id_book = ?', [book.name, book.author, book.isbn, id], callback);
    },
    delete: (id, callback) => {
        return db.query('DELETE FROM book WHERE id_book = ?', [id], callback);
    }
};

module.exports = Book;






