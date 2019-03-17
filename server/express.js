const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`PORT ${port}`);
});

app.get('/api', (req, res) => {
    res.send(`PORT ${port}`);
});

app.listen(port, (err) => {
    if (err) { console.log(err) };
    console.log('Listening on port ' + port);
});