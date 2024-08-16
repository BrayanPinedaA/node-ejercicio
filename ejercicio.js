var fs = require('fs');

if (!fs.existsSync('./Oswi')) {
    fs.mkdirSync('Oswi');
}

var archivo = './Oswi/ejerci.txt';

if (!fs.existsSync(archivo)) {
    fs.writeFileSync(archivo, '');
}

var uno = 'Hola, ¿cómo vas? \n';
var dos = 'Bien y tú? ';

fs.writeFileSync(archivo, uno);
fs.appendFileSync(archivo, dos);
console.log('Agregado');

var contenido = fs.readFileSync(archivo, 'utf-8');
console.log(contenido);

 if (fs.existsSync(archivo)) {
    fs.unlinkSync(archivo); 
    console.log('Archivo ejerci.txt eliminado.');
}

if (fs.existsSync('./Oswi') && fs.readdirSync('./Oswi').length === 0) {
    fs.rmdirSync('./Oswi'); 
    console.log('Carpeta Oswi eliminada.');
} else {
    console.log('No exite');
} 
