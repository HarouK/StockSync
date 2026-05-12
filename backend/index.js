const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./db/db');
const productsRoutes = require('./routes/products');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/products', productsRoutes);

app.get('/', (req, res) => {
    res.send('StockSync API Running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});