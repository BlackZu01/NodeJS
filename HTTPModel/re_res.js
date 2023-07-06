const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('===> req (solicitud)');
    // console.log(req);

    // Solicitudes
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers)

    // Responses
    console.log('===> res (response)')
    console.log(res.statusCode); // 200: Everything's ok

    // URL: Uniform Resource Locator

    res.setHeader('contnt-type', 'application/json');
    console.log(res.getHeaders());
    res.end('Hello, I love Mari <3');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`)
});