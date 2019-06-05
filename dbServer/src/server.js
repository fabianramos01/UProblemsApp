const express = require('express');
const app = express();
// const axios = require('axios');
const morgan = require('morgan');
const path = require('path')

var routes = require('./routes');

var port = 3030;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('port', process.env.PORT || port);

app.use(express.static(path.join(__dirname, 'pages')));

app.use(morgan('short'));

app.use(routes);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.render('index.html');
});  

app.listen(app.get('port'), () => console.log(`Example app listening on port ${app.get('port')}!`));