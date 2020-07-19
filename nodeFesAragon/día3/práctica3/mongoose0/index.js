var mongoose = require('mongoose');
var Alumno = require('./models/alumnos.js');

mongoose.connect('mongodb+srv://usuario1:Iwd1N4OUT0R9HPGb@cluster0-1qwdm.mongodb.net/alumnos?retryWrites=true', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));

function nuevoAlumno() {
  var alum = Alumno({
    numeroCuenta: "55665566"
  });

  alum.save(function(err, data) {
    if (err) {
      console.log("------------------------ERROR --------------------------");
      console.log(err);
    } else {
      console.log("--------------------------OK ---------------------------");
      console.log(data);
    }
  });
}


function main() {
  nuevoAlumno();
}

main(); // ejecutamos main
