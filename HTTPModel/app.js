const http = require('http');

const server = http.createServer((req, res) => {
    // Prev process
    console.log('New solicitude');
    res.end('Hello, world!') // After all process, we close sending a response from the server with this line
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}...`);
});