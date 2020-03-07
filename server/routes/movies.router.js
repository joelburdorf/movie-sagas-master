const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM movies';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movies query', err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    // console.log('IN POST WITH:', req.body, req.params);
    // console.log('description', req.body.description);
    // console.log('sendId', req.body.sendId);
    let id = req.body.sendId;
    let newDescription = req.body.description;
    const queryText = `UPDATE movies SET "description" = '${newDescription}' WHERE id='${id}';`;
    pool.query(queryText)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log("Error changing description", err);
            res.sendStatus(500);
        });
})

module.exports = router;