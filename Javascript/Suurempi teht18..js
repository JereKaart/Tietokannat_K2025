const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Anna ensimmäinen luku: ', (luku1) => {
  rl.question('Anna toinen luku: ', (luku2) => {
    
    luku1 = parseFloat(luku1);
    luku2 = parseFloat(luku2);

    
    if (luku1 > luku2) {
      console.log("Suurempi luku on: " + luku1);
    } else if (luku2 > luku1) {
      console.log("Suurempi luku on: " + luku2);
    } else {
      console.log("Molemmat luvut ovat yhtä suuria.");
    }

    rl.close();
  });
});