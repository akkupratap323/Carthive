import React, { useEffect, useState } from 'react';
import { FollowerPointerCard } from "./ui/following-pointer";

export default function NewsCard() {




  const NewsComponent = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() ).padStart(2, '0'); // Months are zero-based
      const day = String(today.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      const apiKey = '8fc15f108930477680fc60e6e9f7d534'; // Replace with your actual API key
      const query = 'tesla'; // Or any other keyword you're interested in
      const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&from=${formattedDate}&sortBy=publishedAt&apiKey=${apiKey}`;
      
    console.log(year, month, day,formattedDate);

      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log('Fetched data:', data); // Log the API response
          if (Array.isArray(data.articles)) {
            setArticles(data.articles);
          } else {
            throw new Error('No articles found or articles is not an array');
          }
        } catch (error) {
          console.error('Fetch error:', error); // Log the error
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {articles.map((article, index) => (
          <FollowerPointerCard
            key={index}
            title={<TitleComponent title={article.author} avatar={article.urlToImage} />}
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt="thumbnail"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700">
                  {article.title}
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500">
                  {article.description}
                </h2>
                <div className="flex flex-row justify-between items-center mt-10">
                  <span className="text-sm text-gray-500">
                    {new Date(article.publishedAt).toDateString()}
                  </span>
                  <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FollowerPointerCard>
        ))}
      </div>
    );
  };

  const TitleComponent = ({ title, avatar }) => (
    <div className="flex space-x-2 items-center">
      {avatar && (
        <img
          src={avatar}
          height="20"
          width="20"
          alt="thumbnail"
          className="rounded-full border-2 border-white"
        />
      )}
      <p>{title}</p>
    </div>
  );

  return <NewsComponent />;
}
