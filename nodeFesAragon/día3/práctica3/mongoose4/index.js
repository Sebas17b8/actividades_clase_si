var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://usuario1:Iwd1N4OUT0R9HPGb@cluster0-1qwdm.mongodb.net/libros?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro() {

  var libros=[
    {isbm:"123456" , autor:{primer:"Isaac", paterno:"Asimov", materno:" ",}, nombre:"Yo Robot"},
    {isbm:"234567" , autor:{primer:"Richard", paterno:"Matheson", materno:" ",}, nombre:"Soy leyenda"},
    {isbm:"345678" , autor:{primer:"Gillan", paterno:"Flynn", materno:"",}, nombre:"Perdida"},
    {isbm:"456789" , autor:{primer:"Gabriel", paterno:"Garcia", materno:"Marquez",}, nombre:"Del amor y otros demonios"},
    {isbm:"567890" , autor:{primer:"Carlos", paterno:"Funtes", materno:" ",}, nombre:"Aura"},
    {isbm:"678901" , autor:{primer:"J. R. R.", paterno:"Tolkien", materno:"",}, nombre:"El señor de los anillos"},
    {isbm:"789012" , autor:{primer:"William", paterno:"Golding", materno:"",}, nombre:"El señor de las moscas"},
    {isbm:"890123" , autor:{primer:"J. k.", paterno:"Rowlling", materno:"",}, nombre:"Harry Potter"},
    {isbm:"901234" , autor:{primer:"Stephen", paterno:"King", materno:"",}, nombre:"It "},

  ];


  /*var lib= Libro({
    isbm: "234567",
    autor:{
      primer: "Juan",
      paterno: "Rulfo",
      materno: "perez"
    },
    nombre: "El silencio de los inocentes"
  });
*/
  Libro.collection.insert(libros, function(err, data) {
    if(err){
      console.log("-------------ERROR------------");
    }else{
      console.log("---------------Coneccion exitosa--------------------");
      console.log(data);
    }

  });
}

function buscarByIsbn(isbm) {
    Libro.find({isbm:isbm}, function(err, documentos) {
      console.log(documentos);
    });

}

function modificarLibroByIsbn(isbm, nuevoTitulo, autorp, autorpa, autorma ) {
  Libro.findOneAndUpdate({isbm:isbm},
  {nombre:nuevoTitulo}, function(err, data) {
    if(err){
      console.log(err);
    }else{
      console.log(data);
    }

  });
  Libro.findOneAndUpdate({isbm:isbm},
  {autor:{primer:autorp, paterno: autorpa, materno:autorma}},function(err, data) {
    if(err){
      console.log(err);
    }else{
      console.log(data);
    }

  });
  

}


function main() {
  //nuevoLibro();
  //buscarByIsbn(234567);
  modificarLibroByIsbn(234567, "AURA", "Carlos", "Fuentes", " ")
}

main();    // ejecutamos main
