const express = require('express');
const port = 3000;
const app = express();

app.get('/' , function ( req, res){
    res.status(200).send('simple text')
})
app.get('/teachersName', function ( req, res){
    res.status(200).send({thomas: "Thomas Jamais",alban: "Alban Meurice"})
})

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });
  