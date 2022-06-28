const express = require('express');
const bodyParser = require('body-parser');

const PORTA = process.env(APP_PORT)

const app = express();
app.use(bodyParser.json());

app.listen(PORTA, () => console.log(`Run server http://localhost:${PORTA}`))