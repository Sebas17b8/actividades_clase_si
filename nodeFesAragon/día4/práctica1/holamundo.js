var express = require("express");
var app = express();
app.get("/", function(request, response) {
  response.send("¡Hola mundo Express !");
});

app.post("/", function(request, response){
  response.send("Hola Post!!!!");
});
app.listen(3000, function() {
  console.log("Servidor express iniciado, en el puerto 3000.");
});
