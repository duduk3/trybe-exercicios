const express = require('express');
const bodyParser = require('body-parser');
const { env } = require('dotenv').config();

const PORT = process.env.APP_PORT;

const app = express();
app.use(bodyParser.json());


app.listen(PORT, () => console.log(`Run server http://localhost:${PORT}`));