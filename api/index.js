const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use('/', require('./routes'));
app.listen(app.get('port'), function() {
    console.log(`App running at port: http://localhost:${app.get('port')}`)
});

module.exports = app
