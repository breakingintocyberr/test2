//import dependencies
const express = require('express')
const http = require('http')
const app = express();  
const port = process.env.PORT || 3000; 

//server listens to port
server.listen(port, (err) => {
    if(err) {
        console.log("Error occured : ", err);
    } else {
        console.log("Server started running at : http://localhost:" + port);
    }
})

//Serving static files from '/public'
app.use(express.static('public'));

//Optional route for home page
app.get('/', (req, res) => {
    res.sendFile(_dirname + '/public/index.html');
});


