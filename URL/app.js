const mirULR = new URL('htpps://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(mirULR.host);

console.log(mirULR.pathname);

console.log(mirULR.searchParams);

console.log(typeof mirULR.searchParams)

console.log(mirULR.searchParams.get('nivel'));