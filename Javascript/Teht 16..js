let bookArray = [
    {id: 1, title: "Sivutieromaani",kirjailija: "Jukka Aalho", julkaisuvuosi: 2023},
    {id: 2, title: "Into the woods",kirjailija: "John Yorke", julkaisuvuosi: 2013},
    {id: 3, title: "Hobitti", kirjailija: "J.R.R. Tolkien", julkaisuvuosi: 1937},
];

console.log("Tietotyyppi:", typeof bookArray);

console.log("Koko bookArrayn sisalto:");
console.log(bookArray);

console.log("Ensimmainen rivi:");
console.log(bookArray[0]);

console.log("Ensimmaisen kirjan nimi:");
console.log(bookArray[0].title);

console.log("Rivien maara:");
console.log(bookArray.length);

console.log("Kaikki kirjat:");
bookArray.forEach(book => {
    console.log(book.title);
});

