#!/usr/bin/env node

const http = require('http');
 
const server = http.createServer((req, res) => {
// Set the response HTTP header with HTTP status and Content type
res.writeHead(200, {'Content-Type': 'text/plain'});
// Send the response body "Hello World"
res.end('Just for testing purposes\n');
});

const port = process.env.PORT || 8080;
 
server.listen(port, () => {
console.log('Hello world listening on port', port);
});