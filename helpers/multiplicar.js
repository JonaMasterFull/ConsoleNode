const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            const total = base * i;
            consola += `${ colors.blue( base ) } ${ colors.bold('x')} ${ colors.red( i )} = ${ colors.magenta(total)}\n`;
            salida += `${ base } x ${ i } = ${ total }\n`
        }

        if ( listar ){
            console.log('==================='.red);
            console.log(colors.yellow(`   Tabla del ${ base }`));
            console.log(colors.red('==================='));
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return colors.cyan(`Tabla del ${ colors.gray(base)} fue`);
    
       
    } catch (error) {
        throw error;
    }
    


} 

module.exports = {
    crearArchivo
}