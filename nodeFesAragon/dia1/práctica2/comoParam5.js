//comoParam5.js
var calculadora = function (x , y, funcion) {
return funcion(x,y);
}

//suma
calculadora(10,20,function (x,y) {
  return x+y;
});

//resta
calculadora(10,20,function (x,y) {
  return x-y;
});
