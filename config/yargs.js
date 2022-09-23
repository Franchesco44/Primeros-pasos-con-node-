

const argv = require('yargs')
        .option('i', {
            alias: 'inicio',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Decidis hasta donde queres que termina la tabla de multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
            .check( (argv, option) => {
            if ( isNaN( argv.inicio ) ){
                throw 'El inicio tiene que ser un numero'
            }
            return true;
        })
        .argv;

module.exports = argv;