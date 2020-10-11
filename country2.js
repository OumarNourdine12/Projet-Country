const express = require('express')
const port = 3000
const app = express();
var fs = require('fs');
const { get } = require('http');

app.get('/', function (req, res) {
    var contents = fs.readFileSync('country.json', utf8);

    res.status.send(contents)
})
app.get("/country/:name", function (req, res) {    // get c'est la requete:
    var contents = fs.readFileSync('country.json', 'utf8'); // li le fiche json qui le stock dans contents
    console.log(contents); // affiche le contenu de contents 
    contents = JSON.parse(contents) // traduire depuis json en tableau
    var name = []; // tableau vide 

    contents.forEach(element => { //permet d'exécuter une fonction donnée sur chaque élément du tableau.


        if (element.name.toLowerCase() === req.params.name.toLowerCase()) {
            res.status(200).send(element) // res.status 200 la bonne reponse; send(element) envoie la reponse
            return // ça compare le nom des elements qui sont dans contents avec les element qui sont dans la requete

        }

    });
})
    //  etape 10
    app.get("/regions/:regionName", function (req, res) {
        var contents = fs.readFileSync('country.json', 'utf8');
        console.log(contents);
        contents = JSON.parse(contents)
        var name = []
        


        contents.forEach(element => {




            if (element.region.toLowerCase() === req.params.regionName.toLowerCase()) {
                
                name.push(element)

            }



        })

        res.send(name)

    })


    app.listen(port, function () {
        console.log("Server is running on " + port + " port");

    })