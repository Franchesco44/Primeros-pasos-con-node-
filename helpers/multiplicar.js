const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    
    try {
        
        let salida = '';
        
        for( let i = 1; i <= hasta ; i++ ) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            
        }
        if( listar ) {
            
            console.log("==============".blue);
            console.log("Tabla del:".yellow, colors.yellow ( base ));
            console.log("==============".blue);
            console.log(salida);
        
        }
        //imprime esto en la consola si se lo requiere con -l



        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida, );
            
        // en vez de console.log se suele utilizar resolve
        // y si se utiliza async como promesa, el console.log se remplaza usando 'return'
        return(`tabla-${ base }.txt creado`);
    } catch (err) {
        throw err
    }
    // despues del catch coloque el throw err para devolver el error

    

}

module.exports = {
    crearArchivo
}
