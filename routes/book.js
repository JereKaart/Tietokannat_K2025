const express = require('express');
const router = express.Router();
const Book = require('../models/book_model');

router.get('/', (req, res) => {
    Book.getAll((err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    Book.getById(req.params.id, (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

router.post('/', (req, res) => {
    Book.create(req.body, (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

router.put('/:id', (req, res) => {
    Book.update(req.params.id, req.body, (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

router.delete('/:id', (req, res) => {
    Book.delete(req.params.id, (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

module.exports = router;




