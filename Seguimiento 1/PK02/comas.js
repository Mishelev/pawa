var cadenaUno;
var caracteres = ",";

for(var i = 2; i<process.argv.length;i++)
{
	cadenaUno = process.argv[i];
};
console.log("La cadena es: " + cadenaUno);

var cadenaDos = cadenaUno.split(caracteres);
var suma = 0;
var sumaFinal = 0;

for(var j = 0; j<cadenaDos.length;j++)
{
	suma = parseInt(cadenaDos[j]);
	sumaFinal += suma;
};
console.log("La suma es: " + sumaFinal);