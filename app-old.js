
const http = require ('http') ;

http.createServer((req, res) => {


    // res.writeHead( 200, { 'content-type': 'application/json'})
    // res.hasHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead( 200, { 'content-type': 'application/csv'})

    // res.write( 'id, nombre' );
    // res.write( '1, jenny' );
    // res.write( '2, maria' );
    // res.write( '3, karen' );

    res.write( 'Hola Mundo' );
    res.end();
})
.listen( 8080 );

console.log('escuchando el puerto', 8080 );