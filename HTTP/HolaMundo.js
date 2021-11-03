//llamamos el modulo http 
const http = require('http');
//Establecemos la url o IP de nuestro servidor
const hostname = '10.0.0.212';
//Establecemos el puerto de escucha
const port = 3000;
//Creamos una instalacia HTTP con un reques y un response
const server = http.createServer((req, res) =>{
    //el servidor respondera un codigo 200
    res.statusCode = 200;
    //el servidor respondera con un texto plano
    res.setHeader('Content-Type', 'text/html');
    //el servidor respondera el mensaje hola mundo
    res.end('<h1>Hola Mundo</h1>');
});

server.listen(port, hostname, () =>{
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
})