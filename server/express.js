const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send(`PORT ${port}`);
});

app.listen(port, (err) => {
    if (err) { console.log(err) };
    console.log('Listening on port ' + port);
});