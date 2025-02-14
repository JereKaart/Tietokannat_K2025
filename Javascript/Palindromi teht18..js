const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Anna sana: ', (sana) => {
  sana = sana.toLowerCase().replace(/\s/g, '');  

  let kaannettySana = sana.split('').reverse().join(''); 

  if (sana === kaannettySana) {
    console.log(sana + " on palindromi");
  } else {
    console.log(sana + " ei ole palindromi.");
  }

  rl.close();
});