const express = require('express');
const path = require("path");
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../client/public');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const app = express();
app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
    res.send(`PORT ${port}`);
});

app.get('/api', (req, res) => {
    res.sendFile(HTML_FILE);
});

app.listen(port, (err) => {
    if (err) { console.log(err) };
    console.log('Listening on port ' + port);
});
