const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
require('colors');

console.clear();

// console.log('base: yargs', argv.inicio );
crearArchivo( argv.i, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( error => console.log(err) );