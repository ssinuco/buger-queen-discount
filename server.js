var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    let code = 200;
    let content = {msg:"Has obtenido un 50% de descuento"};

    let aNumber = Math.random();
    if(aNumber < 0.5){
        code = 500;
        content = {msg:"Esta vez no tienes descuento. Intentalo en tu próxima visita."};
    }
    
    response.writeHead(code, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(content), 'utf-8');
}).listen(process.env.PORT || 8080);
console.log('Server running/');