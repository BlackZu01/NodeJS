const { helloWorld, saludar } = require('./saludos');

console.log(saludar('María'));
console.log(helloWorld());

// [+] Diferentes tipos de console

console.warn('Esto es un aviso');

console.error('Ha ocurrido un error');

console.error(new Error('Error de tipo int!'));

console.log(process.env)