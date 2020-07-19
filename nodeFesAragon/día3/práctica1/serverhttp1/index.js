var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Alguien entró');
    console.log(request.url);
    response.write("<h1>Hola mundo Web Node</h1>");//aqui manda un mensaje ne la pagina http

});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
