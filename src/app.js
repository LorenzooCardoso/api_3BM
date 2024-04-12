const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.set('port', process.env.PORT || 3005);

module.exports = app;