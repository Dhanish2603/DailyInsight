import React, { useEffect, useState } from "react";

const PageLayout = () => {
  const [news, setNews] = useState([]);

  const data = () => {
    var apikey = "011a4bb168875ebd5c3bc441672271d1";
    var category = "general";
    var url =
      "https://gnews.io/api/v4/top-headlines?category=" +
      category +
      "&lang=en&country=us&max=10&apikey=" +
      apikey;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var articles = data.articles.slice(0, 5);
        setNews(articles);
        console.log(news);
      });
  };
  useEffect(() => {
    data();
  
    
  }, [])
  

  return (
    <div>
      <div className="news-section">
        {news.map((data, index) => {
          return (
            <div key={index} className="news-card">
              <img src={data.image} alt="News 1" />
              <div className="news-card-content">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageLayout;
