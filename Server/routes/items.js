const express = require('express');
const { getItems, getItemById, addItem } = require('../controllers/items');

const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItemById);
router.post('/', addItem);

module.exports = router;
