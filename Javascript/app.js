const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Tervetuloa kotisivulle!');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Käyttäjän ID: ${userId}`);
});

app.get('/users/:id/:name', (req, res) => {
    const userId = req.params.id;
    const userName = req.params.name;
    res.send(`Käyttäjän ID: ${userId}, Nimi: ${userName}`);
});

app.post('/users', (req, res) => {
    const user = req.body; 
    res.json({ message: 'Käyttäjä lisätty', user });
});

app.listen(port, () => {
    console.log(`Palvelin käynnissä portissa ${port}`);
});

