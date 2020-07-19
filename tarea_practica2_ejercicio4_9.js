//4
var incrementa = function(numero){
	return numero +1;
}

var procesar = function(x, laFuncion){
	return laFuncion(x);
}
console.log('Ejercicio 4');
console.log(incrementa(2));
console.log(procesar(procesar(3, incrementa),incrementa));

//5
var duplicar = function(numero){
	return numero + numero;
}
console.log('Ejercicio 5');
console.log(procesar(procesar(10,duplicar),incrementa));
console.log(procesar(procesar(procesar(10,incrementa),incrementa), duplicar));

var suma = function(x , y){
	return x + y;
}
var calculadora = function(x,y, funcion){
	return funcion(x,y);
}
//6
console.log('Ejercicio 6');
console.log(suma( 2, 8));
console.log(calculadora(2, 8, suma));

//7

var resta = function(x , y){
	return x - y;
}
console.log('Ejercicio 7');
console.log(calculadora(9, 8, suma));
console.log(calculadora(9, 8, resta));



//8
console.log('Ejercicio 8');
console.log(calculadora(7, 15, function(x,y){
	return x+y;
}));
console.log(calculadora(7, 15, function(x,y){
	return x-y;
}));

//9

console.log('Ejercicio 9');
console.log(calculadora(14,3, (x,y) =>{
	return x +y;
}));
console.log(calculadora(14,3, (x,y) =>{
	return x -y;
}));