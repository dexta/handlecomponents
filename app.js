const express = require('express');


const host = "0.0.0.0";
const port = 8999;

const app = express();
app.use(express.static('frontend'));

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
