const express = require('express');
const router = express.Router();
const login = require('../models/login_model');

router.post('/', function(request, response) {
  if (request.body.username && request.body.password) {
    const username = request.body.username;
    const password = request.body.password;

    login.checkPassword(username, function(dbError, dbResult) {
      if (dbError) {
        console.error("Tietokantavirhe: ", dbError);
        return response.status(500).json(dbError);  
      } 

      if (dbResult.length > 0) {
        console.log("Käyttäjä löytyi: ", dbResult[0]);

        console.log("Tietokannan salasana: ", dbResult[0].password);
        console.log("Annettu salasana: ", password);

        if (password === dbResult[0].password) {
          console.log("Kirjautuminen onnistui");
          return response.send(true);  
        } else {
          console.log("Väärä salasana");
          return response.send(false);  
        }
      } else {
        console.log("Käyttäjää ei löydy");
        return response.send(false);  
      }
    });
  } else {
    console.log("Käyttäjätunnus tai salasana puuttuu");
    return response.send(false);  
  }
});

module.exports = router;









