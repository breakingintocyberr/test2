//import dependencies
const express = require('express')
const app = express();  
const port = process.env.PORT || 3000; 

//Serving static files from '/public'
app.use(express.static('public'));

//Optional route for home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

//server listens to port (starting server)
app.listen(port, (err) => {
    if(err) {
        console.log("Error occured : ", err);
    } else {
        console.log("Server started running at : http://localhost:" + port);
    }
})

//Best guess as to how to send blog button to blog.html
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/public/blog.html');
});
