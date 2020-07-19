var Http = require( 'http' );

var server = Http.createServer(function(request,response){
    //console.log('Alguien entró');
    console.log(request.method);
    console.log("URL" + request.url);
    console.log("Headers" + request.headers);

    response.writeHead(200, {'Content-Type': 'text/html'}); // cabecera http //el codigo de 200 es que la pagina cargo correctamente
    response.write("<h1>Hola desde el node 3</h1>");// no se envía por que no se indica fin del documento
    response.end(); // al fín se envía
});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
