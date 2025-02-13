const express = require('express');
const { getStocks, addStockToWatchlist } = require('../controllers/stocks');

const router = express.Router();

router.get('/', getStocks);
router.post('/watchlist', addStockToWatchlist);

module.exports = router;
