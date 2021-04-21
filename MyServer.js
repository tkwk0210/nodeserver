const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8000;
const baseUrl = hostname + ":" + 8000;

function start(route) {
    function onRequest(req, res){
        let sBody = 'Hello, world! <br> I am in the cloud class.';

        console.log('Request receive.');
        pathname = new url.URL();
        route(pathname);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello, world');
        res.end();
    }

    server = http.createServer(onRequest);
    server.listen(port, hostname);
    console.log('Server is running at ' + baseUrl);
}

exports.start = start;