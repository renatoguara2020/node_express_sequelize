const express = require('express')
const http = require('http');
port = 3000;

function handle(request, response) {

    response.end("<h1>Bem vindo ao node com Express!!!!</h1>")

}
const server = http.createServer(handle);

server.listen(3000, (req, res) =>{

   console.log("Servidor rodando na porta 3000")

});