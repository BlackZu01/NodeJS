const http = require('http');
const { infoCursos } = require('./cursos');

const server = http.createServer((req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            return handleGET(req, res);
        
        case 'POST':
            return handlePOST(req, res);
        
        case 'DELETE':
            return handleDELETE(req, res);

        case 'PUT':
            return handlePUT(req, res);

        default:
            res.statusCode = 501;
            res.end(`This method cannot be handle by the server: ${method}`);
            break;
            
    }
});

const handleGET = (req, res) => {
    const path = req.url;

    if (path === '/') {
        return res.end('Welcome to my first server & API with NodeJS')
    } else if (path === '/cursos') {
        return res.end(JSON.stringify(infoCursos)); //Convierte en JSON un objeto de Javascript
    } else if (path === '/cursos/programacion') {
        return res.end(JSON.stringify(infoCursos.programacion));
    } else if (path === '/cursos/matematicas') {
        return res.end(JSON.stringify(infoCursos.matematicas)); 
    } else if (path === '/cursos/matematicas/algebra') {
        return res.end(JSON.stringify(infoCursos.matematicas[1]));
    }

    res.statusCode = 404;
    return res.end('Requested source not found...');
}

const handlePOST = (req, res) => {
    const path = req.url;

    if (path === '/cursos/programacion') {
        body = '';

        req.on('data', content => {
            body += content;
        })

        req.on('end', () => {
            body = JSON.parse(body);

            console.log(body);
            console.log(typeof body);
            res.end('Server received a POST request for /cursos/programacion')
        })


        // return res.end('Server received a POST request for /cursos/programacion');
    }
}

const handleDELETE = (req, res) => {
    const path = req.url;

    if (path === '/cursos/matematicas/algebra') {
        return res.end('Server received a DELETE request for /cursos/matematicas/algebra');
    }
}   

const handlePUT = (req, res) => {
    const path = req.url;

    if (path === '/cursos/matematicas') {
        return res.end('The server has received a PUT request for /cursos/matematicas');
    }
}

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`);
})