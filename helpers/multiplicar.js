const fs = require('fs');


const crearArchivo = async( base = 5 ) => {
    
    try {
        console.log("==============");
        console.log("Tabla del:", base);
        console.log("==============");

        let salida = '';

        for( let i = 1; i <= 10 ; i++ ) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }


        fs.writeFileSync( `tabla-${ base }.txt`, salida, );
            
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
