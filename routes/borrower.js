const express = require('express');
const router = express.Router();
const Borrower = require('../models/borrower_model');

router.get('/', (req, res) => {
    Borrower.getAll((err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

router.get('/:id', (req, res) => {
    Borrower.getById(req.params.id, (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

router.post('/', (req, res) => {
    Borrower.create(req.body, (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

router.put('/:id', (req, res) => {
    Borrower.update(req.params.id, req.body, (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

router.delete('/:id', (req, res) => {
    Borrower.delete(req.params.id, (err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

module.exports = router;


