const express = require('express');
const router = express.Router();

const pg = require('pg');
const client = new pg.Client({
    user: 'rpiieouhijvuqm',
    host: 'ec2-174-129-208-118.compute-1.amazonaws.com',
    database: 'd5nu1f0qoqk6uo',
    password: 'a00d339948f36ce7a4c272dbca1db9546f5a6fb9dce2382aef8e0557c777f17f',
    port: 5432,
    ssl: true
});

router.get('/', function(req, res) {
    res.json({title: 'Prueba'});
});

router.get('/getPublications', function(req, res) {
    client.connect();
    var query = client.query('SELECT * FROM "U_PUBLICATIONS"', (err, results) => {
        if (err) {
            res.status(401).json({ message: err.message});
        } else {
            res.status(200).json(results.rows);
        }
    });
});

router.get('/getPublicationId', function(req, res) {
    client.connect();
    var query = client.query('SELECT * FROM "U_PUBLICATIONS" WHERE = ${req.data.pubId}', (err, results) => {
        if (err) {
            res.status(401).json({ message: '${err.message}'});
        } else {
            res.status(200).json(results.rows);
        }
    });
});

module.exports = router;


    /*
    axios({
            method: 'POST',
            url: 'http://localhost:3031/hi',
            data: {
                foo: 'bar', // This is the body part
            }
        }).then(response => {
            res.render('index.ejs');
        })
        .catch(error => {
            console.log(error);
            res.send('error');
        });
    */