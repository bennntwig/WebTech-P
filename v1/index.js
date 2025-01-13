const http = require('http');
const url = require('url');
const pers = require("./models/persistance.js");

const server = http.createServer();
server.listen(8844);

const queryParams = url.parse(req.url, true).query;
