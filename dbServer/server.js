const express = require('express');
const app = express();
const axios = require('axios');
const morgan = require('morgan');

var routes = require('./routes');

var port = 3030;

bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/pages');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('short'));

app.use(routes);

/*
app.use(function (req, res, next) {
    console.log('--------------------');
    console.log('Request url: ' +  req.url);
    console.log('Request IP: ' +  req.ip);
    next();
});
*/

app.post('/hi', function(req, res, next) {
    console.log(req.body);
    res.send("ok");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))