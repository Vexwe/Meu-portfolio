const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req,res){
    res.sendFile(__dirname + '/src/index.html')});

app.get("/bancodevisitas", function(req,res){
    res.sendFile(__dirname + "/src/bancodedados.html")});

app.listen(8080,() =>{console.log('servidor ligado')})


//para rodar o nodemon, basta digitar "npm run dev" no terminal