const Stock = require('../models/stock');

exports.getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve stocks' });
  }
};

exports.addStockToWatchlist = async (req, res) => {
  try {
    const stockData = req.body;
    const stock = new Stock(stockData);
    await stock.save();
    res.status(201).json({ message: 'Stock added to watchlist successfully', stock });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add stock to watchlist' });
  }
};