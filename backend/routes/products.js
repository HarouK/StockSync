const express = require('express');
const router = express.Router();

const db = require('../db/db');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM products';

    db.query(query, (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                error: 'Failed to fetch products'
            });
        } else {
            res.json(results);
        }
    });
});

module.exports = router;