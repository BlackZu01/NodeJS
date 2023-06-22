// const curso = require('./info.json');


// console.log(curso);

let curso = {
    "title": "Aprendiendo Node con FreeCodeCamp",
    "couple": "María Solá",
    "career": "Matemáticas",
    "programming languages": [
        "Python",
        "Golang",
        "Ruby",
        "Java",
        "Javascript"
    ],
    "public-rep": true
};

console.log(curso);

let infoCurso = JSON.stringify(curso);

console.log(infoCurso);
console.log(typeof infoCurso);

let infoCursoObjeto = JSON.parse(infoCurso);

console.log(infoCursoObjeto);