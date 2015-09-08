
// var num1 = parseInt(process.argv[2]);
// var num2 = parseInt(process.argv[3]);
// console.log(num1+num2);
var suma=0;
var nums=0;
for(var i = 2; i<process.argv.length;i++)
{
	nums = parseInt(process.argv[i])
	suma = suma + nums;	
}
console.log(suma);