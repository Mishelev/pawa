// Modelo Bloqueante
// De una lectura de archivos

// Cargando
// file stream module
var fs = require('fs');

// Leyendo el archivo
var content = 
	fs.readFileSync("\hola.html",'utf-8');
// Imprimimos
console.log(content);
// Mensaje final
console.log('Este programa Finalizo con Exito');
