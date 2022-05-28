
const { crearArchivo } = require('./helpers/multiplicar');
const yargs = require('./config/yargs');

console.clear();

// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

// console.log( yargs);


crearArchivo(yargs.b, yargs.l, yargs.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
