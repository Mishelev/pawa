// Creando dos function expressions
var functionSaludar = function(name)
{
	console.log("Hola %s", name);
};

var functionDespide = function(name)
{
	console.log("Adios %s", name);
};

// Creando una declaracion de funcion
// Handler -> Manejador
// Manejador: Funcion que procesa datos
function mensaje(name, handler)
{
	name = name.toUpperCase();
	handler(name);	
};
// Invocar la funcion mensaje
mensaje("itgam", functionDespide);
