const express = require('express');
const app = express();
// const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path')

var routes = require('./routes');

var port = 3030;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('port', process.env.PORT || port);

app.use(morgan('short'));

app.use(routes);

app.use(cors()); 

app.listen(app.get('port'), () => console.log(`Example app listening on port ${app.get('port')}!`));