const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8000;
const baseUrl = hostname + ":" + 8000;

function start(route) {
    function onRequest(req, res){
        console.log('Request receive.');
        pathname = new url.URL(req.url);
        route(pathname);
    }

    server = http.createServer(onRequest);
    server.listen(port, hostname);
    console.log('Server is running at ' + baseUrl);
}

exports.start = start;