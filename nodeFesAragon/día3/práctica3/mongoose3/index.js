var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://usuario1:Iwd1N4OUT0R9HPGb@cluster0-1qwdm.mongodb.net/alumnos?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function deleteAlumnoByNumCta(nc){
  Alumno.findOneAndDelete({numeroCuenta:nc},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function main() {
  deleteAlumnoByNumCta("4444444");
}

main();    // ejecutamos main
