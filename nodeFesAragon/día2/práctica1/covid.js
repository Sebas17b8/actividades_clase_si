const api = require('covidapi');

// you can choose which URL to use, this will not change the behaviour of the API
api.settings({
    baseUrl: 'https://disease.sh' | 'https://api.caw.sh' | 'https://corona.lmao.ninja'
})

api.all().then(console.log);
console.log('-------------------------');

api.yesterday.all().then(console.log);
/*
api.countries({country: 'mexico'}).then( (datos)=>{
  console.log("Casos en Mexico: "+ datos['cases']);
} );
*/
api.historical.countries({country: 'mexico'}).then(console.log);
