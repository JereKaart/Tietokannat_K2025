const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book');
const borrowerRoutes = require('./routes/borrower');
const app = express();

app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/borrowers', borrowerRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;






