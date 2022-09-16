
const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

const base = 4;

crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( error => console.log(err) );