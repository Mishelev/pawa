// Este codigo ejecuta sin problemas
// debido a que la function declaration
// es cargada antes que cualquier otro 
// codigo cargue por lo tanto carga antes
saludar ("mishel");
function saludar (name)
{
	console.log("hola "+ name);
}

// Este codigo marca error debido aque solo
// podemos usar la funcion exprecion despide
// despues de haberla creado
despide ("adrian");
var despide = function (name)
{
	console.log("adios"+name);
};