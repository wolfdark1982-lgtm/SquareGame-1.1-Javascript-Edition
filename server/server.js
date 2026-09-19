const http = require('http');
const host = 'localhost';
const port = 8000;
const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from my JavaScript server!');
};
const server = http.createServer(requestListener);
