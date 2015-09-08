// Modelo Block
var fs = require('fs');

var manejador = function(err,data)
{
	if(err)
	{
		console.log('Error al leer archivo...');
		return;
	}
	console.log(data);
};
// Lectura asincrona de archivos
// Parametro 1: Ruta del archivo a leer
// Parametro 2: codificacion
// Parametro 3: que funcion queres que invoque a la hora de terminar la lectrua del archivo
fs.readFile('\hola.html','utf-8', manejador);

// Finalizo con mensaje
console.log("> El programa finalizo con exito...");