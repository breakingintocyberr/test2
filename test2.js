//import dependencies
const express = require('express')
const http = require('http')
const app = express();  
const port = process.env.PORT || 3000; 

//create server object
const server = http.createServer((req, res) => {
    res.write("Welcome to my server!");
    res.end()
});

//server listens to port
server.listen(port, (err) => {
    if(err) {
        console.log("Error occured : ", err);
    } else {
        console.log("Server started running at : http://localhost:" + port);
    }
})

app.get('/');
app.use(express.static('public'));
