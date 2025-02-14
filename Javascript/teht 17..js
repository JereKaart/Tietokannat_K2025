const bookArray = [
    {id_book: 1, nimi: "Hobitti", kirjailija: "J.R.R. Tolkien"},
    {id_book: 2, nimi: "Sinuhe egyptilainen", kirjailija: "Mika Waltari"},
    {id_book: 3, nimi: "Janiksen vuosi", kirjailija: "Arto Paasilinna"}
];

const book = {
    bookArray,

    getAllBooks() {
        console.log(this.bookArray)
    },

    getOneBook(x) {
        const foundBook = this.bookArray.find(book => book.id_book === x);
        if (foundBook) {
            console.log(foundBook);
        }
        else{
            console.log(`Kirjaa idllä $(x) ei loydy.`);
        }
    },

    addBook(id_book,nimi,kirjailija) {
        this.bookArray.push({id_book, nimi, kirjailija});
        console.log(`Kirja "${nimi}" lisatty.`);
    }
};
console.log("Kaikki kirjat:");
    book.getAllBooks();

console.log("Hae yksi kirja (id 3):");
book.getOneBook(3);

console.log("Lisataan uusi kirja:");
book.addBook(4, "Ronja, ryovarintytar", "Astrid Lindgren");

console.log("Kaikki kirjat paivityksen jalkeen:");
book.getAllBooks();

module.exports = { book };