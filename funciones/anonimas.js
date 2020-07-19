function duplicar (numero){
  return numero *2;
}

var d = function(numero ){
  return numero *2;
}

console.log(duplicar(5));
console.log(d(5));

var a = function(){
  console.log('Hola SI 2020');
}

a();
var b =a;
b();

function test (x, y){
  console.log('Estamos en test function ');
  x();
  y();
}
test (a, b);

var e = function (x){
  console.log(x * 2);
}
e.nombre ="Funcion que duplica";
e(20);
console.log(e.nombre);


//funciones ocmo argumentos a otra funciones

var incrementa = function (numero){
  return numero + 1;
}

var decrementa = function (numero){
  return numero -1;
}

var duplicar = function (numero){
  return numero *2;
}

var procesar = function ( x, laFuncion){
  return laFuncion( x );
}

console.log(procesar(10, incrementa));
console.log(procesar(10, decrementa));


// funciones flecha
console.log(procesar(10,duplicar));
console.log(procesar(10, function(y){return y *2})); //duplicar
console.log(procesar(10, (y)=>{return y *2}));

console.log(procesar (10, (y)=> {return y -1}));
