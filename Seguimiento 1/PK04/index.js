// Closures
function retornaFunctionSaludo()
{
	var mensaje = "Hola a todos";
	var functionSaludo = function()
	{
		console.log(mensaje);
	};
	return functionSaludo;
};

var saludando = retornaFunctionSaludo();
// Ejecutando funcion saludando
saludando();
