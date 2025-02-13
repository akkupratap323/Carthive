import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newStock, setNewStock] = useState({
    company: '',
    description: '',
    initial_price: '',
    price_2002: '',
    price_2007: '',
    symbol: '',
  });

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stocks');
        setStocks(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  const handleInputChange = (e) => {
    setNewStock({
      ...newStock,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/stocks/watchlist', newStock);
      setStocks([...stocks, newStock]);
      setNewStock({
        company: '',
        description: '',
        initial_price: '',
        price_2002: '',
        price_2007: '',
        symbol: '',
      });
    } catch (error) {
      setError(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-center text-3xl py-4">Stock Watchlist</h1>
      <form onSubmit={handleSubmit} className="p-4">
        <input
          name="company"
          placeholder="Company"
          value={newStock.company}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        />
        <input
          name="description"
          placeholder="Description"
          value={newStock.description}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        />
        <input
          name="initial_price"
          placeholder="Initial Price"
          type="number"
          value={newStock.initial_price}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        />
        <input
          name="price_2002"
          placeholder="Price 2002"
          type="number"
          value={newStock.price_2002}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        />
        <input
          name="price_2007"
          placeholder="Price 2007"
          type="number"
          value={newStock.price_2007}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        />
        <input
          name="symbol"
          placeholder="Symbol"
          value={newStock.symbol}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Add to Watchlist</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {stocks.map((stock, index) => (
          <div key={index} className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-gray-800 hover:shadow-xl border border-gray-700">
            <div className="p-4">
              <h2 className="font-bold my-4 text-lg text-white">
                {stock.company} ({stock.symbol})
              </h2>
              <p className="font-normal my-4 text-sm text-gray-400">
                {stock.description}
              </p>
              <p className="text-sm text-gray-500">
                Initial Price: {stock.initial_price}
              </p>
              <p className="text-sm text-gray-500">
                Price 2002: {stock.price_2002}
              </p>
              <p className="text-sm text-gray-500">
                Price 2007: {stock.price_2007}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
