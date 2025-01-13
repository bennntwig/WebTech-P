const http = require('http');
const url = require('url');
const pers = require('./models/persistance.js');

const server = http.createServer(function (req, res) {
    const parsedUrl = req.url;
    const queryParams = url.parse(req.url, true).query;
    console.log(queryParams);

    if (parsedUrl === "/") {

    }
    res.end(parsedUrl);
});
server.listen(8844, function () {
    console.log("Server läuft auf Port http://localhost:8844");
});

