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

router.post('/', (req, res) => {
    const {
        name,
        category,
        quantity,
        price,
        reorder_level
    } = req.body;

    const query = `
    INSERT INTO products
    (name, category, quantity, price, reorder_level)
    VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        query,
        [name, category, quantity, price, reorder_level],
        (err, results) => {
            if (err) {
                console.error(err);

                res.status(500).json({
                    error: 'Failed to add product'
                });
            } else {
                res.status(201).json({
                    message: 'Product added sucessfully',
                    productId: results.insertId
                });
            }
        }
    );
});

module.exports = router;