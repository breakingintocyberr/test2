const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from my server!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
