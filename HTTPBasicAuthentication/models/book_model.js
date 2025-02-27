const db = require('../database');  
console.log('Book model loaded');
const Book = {
    getAll: (callback) => {
        console.log('Getting all books');
        return db.query('SELECT * FROM book', callback);
    },
    getById: (id, callback) => {
        console.log(`Getting book with ID: ${id}`);
        return db.query('SELECT * FROM book WHERE id_book = ?', [id], callback);
    },
    create: (book, callback) => {
        console.log('Creating a new book');
        return db.query('INSERT INTO book (name, author, isbn) VALUES (?, ?, ?)', [book.name, book.author, book.isbn], callback);
    },
    update: (id, book, callback) => {
        console.log(`Updating book with ID: ${id}`);
        return db.query('UPDATE book SET name = ?, author = ?, isbn = ? WHERE id_book = ?', [book.name, book.author, book.isbn, id], callback);
    },
    delete: (id, callback) => {
        console.log(`Deleting book with ID: ${id}`);
        return db.query('DELETE FROM book WHERE id_book = ?', [id], callback);
    }
};

module.exports = Book;

