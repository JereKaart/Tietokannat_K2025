const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Tervetuloa API:hin!');
});

let users = [];

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({
        message: 'Käyttäjä lisätty',
        user: user
    });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Serveri käynnissä portissa ${PORT}`);
});
