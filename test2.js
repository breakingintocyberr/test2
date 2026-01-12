//import dependencies
const http = require('http')
const port = process.env.PORT || 3000;   

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
        console.log("Server started running at : http://localhost:" + port);
    }
})