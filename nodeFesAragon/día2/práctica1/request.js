const request = require('request');
request('https://corona.lmao.ninja/v2/countries/Mexico', function (error, response, body) {
  var dato =JSON.parse(body);
  console.log(dato['deaths']);
  console.log('Muertes totales = ', dato['deaths']);
  console.log('muertes de hoy = ', dato['todayDeaths']);

});
//'body:', body
