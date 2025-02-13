const { getStoredItems, storeItems } = require('../data/items');

exports.getItems = async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    res.json({ items: storedItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve items' });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    const item = storedItems.find((item) => item.id === req.params.id);
    if (item) {
      res.json({ item });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve item' });
  }
};

exports.addItem = async (req, res) => {
  try {
    const existingItems = await getStoredItems();
    const itemData = req.body;
    const newItem = {
      ...itemData,
      id: Math.random().toString(),
    };
    const updatedItems = [newItem, ...existingItems];
    await storeItems(updatedItems);
    res.status(201).json({ message: 'Stored new item.', item: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add item' });
  }
};
