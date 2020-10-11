const express = require('express')
const port = 3000;
const app = express();
var fs = require('fs')

app.get('/', function (req, res) {

})

app.get('/all', function (req, res) {
    var contents = fs.readFileSync('country.json', 'utf8');

    res.status(200).send(contents)

})
//    etape 5 :
app.get('/names/all', function(req, res){
    var contents = fs.readFileSync('country.json', 'utf8');
console.log(contents);
contents = JSON.parse(contents)
var name = [];
for (i= 0; i<contents.length; i++){
    // console.log(contents[i].name)
    name.push(contents[i].capital);
}
    res.status(200).send(name)

})
// etape 6/7/8 il faut changé le nom a chaque fois a name.push(contents[i])
app.listen(port, function () {
    console.log("Server is running on " + port + " port");

});