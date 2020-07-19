

var cliente = {  "id": 12,
                 "Nombre": {
                   "primer": "Jose",
                   "segundo": null,
                   "paterno": "Sosa",
                   "materno": "Garcia"
                 },
                 "Telefonos": {
                   "celular" : "5534579875",
                   "casa":  "5521987589",
                   "oficina" : "556675745",
                   "escuela" : "77668685878"
                 },
                 "tarjetas": [
                   { "tipo": "basica", "numero": "1234567890123456"},
                   { "tipo": "platino", "numero": "012345678901245"},
                   { "tipo": "black", "numero": "77576867657676"}
                 ]};
console.log(cliente);
console.log('Selectores ');
console.log(cliente['Nombre']['paterno'][0].toLowerCase());
console.log(cliente ['Telefonos']['oficina']);
cliente["tarjetas"].forEach((tarjeta)=>{
  console.log(tarjeta["numero"])
});
console.log(cliente ['tarjetas'][['tipo']['basica']]);



console.log('++++++++++++++++++++++++++++++++++++');
var res = JSON.stringify( cliente);
console.log(res);
console.log(res[1]);

console.log('Recibir un obejto json en formade texto y convertirlo en un formato JSON');
var strPrestamo= "{\"id\":12, \"monto\" : 12000}";
console.log(strPrestamo);

var objPrestamo = JSON.parse( strPrestamo);
console.log(objPrestamo);
