const http = require('http');
const url = require('url');
const pers = require('./models/persistance.js');

const server = http.createServer(function (req, res) {
    const parsedUrl = req.url;
    const queryParams = url.parse(req.url, true).query;
    console.log(queryParams);
    let foundTut = [];
    let list = "";
    let hi = "";

    for (let i = 0; i < pers.tutorialArr.length; i++) {
        if (pers.tutorialArr[i].name.includes(queryParams.name)) {
            foundTut.push(pers.tutorialArr[i]);
            list += "<p><li><a href='../v0/tutorial.html'> " + pers.tutorialArr[i].name + "</a> (" + pers.getDauerInStundenUndMinuten(pers.tutorialArr[i].dauer) + ") </li></p>";
        }
    }
    if (foundTut.length == 0) {
        list = "Keine Tutorials gefunden!";
    }

    let html =
        `<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spring Vegetable Gnocchi | Kenji's Cooking Show</title>
        <link rel="stylesheet" href="../v0/assets/css/styles.css" type="text/css">        
    </head>
    <body>
        <header>
            <img src="../v0/assets/img/Seite-Logo.jpg" alt="Seite-Logo" width="50" height="50" class="pos-header">
            <h1>Beste Tutorials EUW </h1>
        </header>
        <nav>
            <p><a href = "list.html">Liste der Kategorien</a>  <a href = "tutorials.html">Tutorials der Kategorie "Kochen"</a>  <a href = "tutorial.html">Details zum Tutorial "asdf"</a>  <a href="form.html">Neues Tutorial erstellen</a></p>
        </nav>
    </body>
    <main>
<h2>
    Tutorials mit: ${queryParams.name}
    <ul>
        ${list}
    </ul>
</h2>

    </main>
    <aside>
        <h3>Neue Tutorials</h3>
        <ul>
            <li>Spring Vegetable Gnocchi | Kenji's Cooking Show, 07.07.2024</li>
            <li>Massaman Curry | Kenji's Cooking Show, 10.04.2024</li>
        </ul>
    </aside>
    <footer>
        <small>by BeJaMa</small>
    </footer>`;

    res.end(html);

});

server.listen(8844, function () {
    console.log("Server läuft auf Port http://localhost:8844");
});

