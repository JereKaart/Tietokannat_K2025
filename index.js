const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'netuser',
    password: 'netpass',
    database: 'Opintorekisteri'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Tietokantayhteys luotu!');
});

app.post('/opiskelija', (req, res) => {
    const { etunimi, sukunimi, syntymapaiva } = req.body;
    const sql = 'INSERT INTO Opiskelija (etunimi, sukunimi, syntymapaiva) VALUES (?, ?, ?)';
    db.query(sql, [etunimi, sukunimi, syntymapaiva], (err, result) => {
        if (err) throw err;
        res.status(201).send({ message: 'Opiskelija lisätty!', id: result.insertId });
    });
});

app.get('/opiskelijat', (req, res) => {
    db.query('SELECT * FROM Opiskelija', (err, results) => {
        if (err) throw err;
        res.status(200).json(results);
    });
});

app.put('/opiskelija/:id', (req, res) => {
    const { etunimi, sukunimi, syntymapaiva } = req.body;
    const sql = 'UPDATE Opiskelija SET etunimi = ?, sukunimi = ?, syntymapaiva = ? WHERE id = ?';
    db.query(sql, [etunimi, sukunimi, syntymapaiva, req.params.id], (err, result) => {
        if (err) throw err;
        res.status(200).send({ message: 'Opiskelija päivitetty!' });
    });
});

app.delete('/opiskelija/:id', (req, res) => {
    const sql = 'DELETE FROM Opiskelija WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.status(200).send({ message: 'Opiskelija poistettu!' });
    });
});

app.post('/opintojakso', (req, res) => {
    const { nimi, opintopisteet } = req.body;
    const sql = 'INSERT INTO Opintojakso (nimi, opintopisteet) VALUES (?, ?)';
    db.query(sql, [nimi, opintopisteet], (err, result) => {
        if (err) throw err;
        res.status(201).send({ message: 'Opintojakso lisätty!', id: result.insertId });
    });
});

app.get('/opintojaksot', (req, res) => {
    db.query('SELECT * FROM Opintojakso', (err, results) => {
        if (err) throw err;
        res.status(200).json(results);
    });
});

app.put('/opintojakso/:id', (req, res) => {
    const { nimi, opintopisteet } = req.body;
    const sql = 'UPDATE Opintojakso SET nimi = ?, opintopisteet = ? WHERE id = ?';
    db.query(sql, [nimi, opintopisteet, req.params.id], (err, result) => {
        if (err) throw err;
        res.status(200).send({ message: 'Opintojakso päivitetty!' });
    });
});

app.delete('/opintojakso/:id', (req, res) => {
    const sql = 'DELETE FROM Opintojakso WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.status(200).send({ message: 'Opintojakso poistettu!' });
    });
});

app.post('/arviointi', (req, res) => {
    const { opiskelija_id, opintojakso_id, arvosana } = req.body;
    const sql = 'INSERT INTO Arviointi (opiskelija_id, opintojakso_id, arvosana) VALUES (?, ?, ?)';
    db.query(sql, [opiskelija_id, opintojakso_id, arvosana], (err, result) => {
        if (err) throw err;
        res.status(201).send({ message: 'Arviointi lisätty!', id: result.insertId });
    });
});

app.get('/arvioinnit', (req, res) => {
    db.query('SELECT * FROM Arviointi', (err, results) => {
        if (err) throw err;
        res.status(200).json(results);
    });
});

app.put('/arviointi/:id', (req, res) => {
    const { opiskelija_id, opintojakso_id, arvosana } = req.body;
    const sql = 'UPDATE Arviointi SET opiskelija_id = ?, opintojakso_id = ?, arvosana = ? WHERE id = ?';
    db.query(sql, [opiskelija_id, opintojakso_id, arvosana, req.params.id], (err, result) => {
        if (err) throw err;
        res.status(200).send({ message: 'Arviointi päivitetty!' });
    });
});

app.delete('/arviointi/:id', (req, res) => {
    const sql = 'DELETE FROM Arviointi WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.status(200).send({ message: 'Arviointi poistettu!' });
    });
});

app.listen(3000, () => {
    console.log('Palvelin käynnistetty portissa 3000');
});

