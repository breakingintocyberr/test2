//import http
const express = require('express')
const http = require('http')
const port = 3000;

//create server object
const server = http.createServer((req, res) => {
    res.write("Hello from my server!");
    res.end()
});

//server listens to port
server.listen(port, (err) => {
    if(err) {
        console.log("Error occured : ", err);
    } else {
        console.log("Server started running at : " + port);
    }
})