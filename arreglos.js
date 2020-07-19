//arreglos

var frutas = ['limon', 'Fresa', 'manzana'];
console.log(frutas);
console.log(frutas[2]);
frutas[1]= 'kiwi';
console.log(frutas);
frutas.push('naranja');
frutas.push('sandia');
frutas.push('melon');
frutas.push('platano');
console.log(frutas);
console.log(frutas.slice(3,7));
console.log(frutas.pop());
console.log(frutas);


var frutas = ['limon', 'Fresa', 'manzana'];
var colores = ['rojo ','verde', 'azul', 'amarillo'];
var cosas = [frutas, colores];
console.log(cosas);
console.log(cosas [0][1]);
console.log(cosas [1][1]);


cosas.forEach(( lista) =>{
  console.log(lista);
  lista.forEach((elemento) =>{
    console.log('elemento ' + elemento);
  });
});
