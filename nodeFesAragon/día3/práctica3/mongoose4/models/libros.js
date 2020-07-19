var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// tu código aquí

var LibrosShema = Schema({
  isbm: String,
  autor:{
    primer:String,
    paterno: String,
    materno: String
  },
  nombre: String
});

module.exports = mongoose.model('Libro', LibrosShema);
