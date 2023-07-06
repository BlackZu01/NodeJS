const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Love u, Mari <3');
});

const PORT = 3000;

server.listen(PORT, (req, res) => {
    console.log('Server listening...')
});