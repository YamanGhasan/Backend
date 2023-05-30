
const path = require("path");
const express = require("express");
const app = express();
 
app.set("view engine","ejs")
app.set('views',path.join(__dirname,'/views'))
const axios = require("axios");

async function makeRequest() {
    
  var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/snorlax`); 
  var pokemonone=res.data;
 var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`); 
  var pokemontwo=res.data;
  var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/eevee`); 
  var pokemonthree=res.data;
app.get('/',(req,res) => {
  res.render('index',{
     pokemons: [
      {
        name: ` ${pokemonone.name}`,
        order:`  ${pokemonone.order}`,
      },
      {
        name: ` ${pokemontwo.name}`,
        order:` ${pokemontwo.order}`,
      },
      {
        name: ` ${pokemonthree.name}`,
        order:` ${pokemonthree.order}`,
      },
    ]
  })
});
} 
makeRequest();
app.listen(3000,()=>{ 
      console.log('http://localhost:3000')
}) 
 
