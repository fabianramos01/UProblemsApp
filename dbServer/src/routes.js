const express = require('express');
const router = express.Router();
const cors = require('cors');

const pg = require('pg');
const client = new pg.Client({
    user: 'rpiieouhijvuqm',
    host: 'ec2-174-129-208-118.compute-1.amazonaws.com',
    database: 'd5nu1f0qoqk6uo',
    password: 'a00d339948f36ce7a4c272dbca1db9546f5a6fb9dce2382aef8e0557c777f17f',
    port: 5432,
    ssl: true
});

client.connect();

router.use(cors());

router.get(express.json());

router.get('/publications', function(req, res) {
    var query = client.query('SELECT * FROM "U_PUBLICATIONS"', (err, results) => {
        if (err) {
            res.status(401).json({ message: err.message});
        } else {
            res.status(200).json(results.rows);
        }
    });
});

router.post('/publication', (req, res) => {
    console.log(req.body);
    res.send('Ok');
    var query = client.query('INSERT INTO U_PUBLICATIONS(id_publication, title, description, date_publication, location_publication) VALUES ( nextval("U_PUBLICATIONS_id_publication_seq"), $1, $2, TO_DATE($3, "DD/MM/YYYY"), $4)', 
        [req.body.pulication.title, req.body.pulication.description, req.body.pulication.date_publication, req.body.pulication.location_publication], (err, results) => {
        if (err) {
            res.status(401).json({ message: err.message});
        } else {
            res.status(200).json(results.rows);
        }
    });
});

module.exports = router;