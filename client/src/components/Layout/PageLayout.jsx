import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
const PageLayout = (props) => {
  const [news, setNews] = useState([]);
  const { readingList, addToReadingList, removefromReadingList } =
    useAppContext();
  console.log("list:", readingList);

  const readingListCheck = (title) => {
    const Check = readingList.some((data) => data.title == title);
    return Check;
  };
  const data = () => {
    // const apikey = "011a4bb168875ebd5c3bc441672271d1";
    // var url =
    //   "https://gnews.io/api/v4/top-headlines?category=" +
    //   props.category +
    //   "&lang=en&country=us&max=100&apikey=" +
    //   apikey;

    // fetch(url)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     var articles = data.articles.slice(0, 20);
    //     setNews(articles);
    //     console.log(news);
    //   });
    var apiKey = "c700e8681666442db14668f53864034e";
    var url = props.category
      ? `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=` +
        apiKey
      : "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=" +
        apiKey;
    console.log(url);
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var articles = data.articles;
        setNews(articles);
      });
  };
  // };
  useEffect(() => {
    data();
  }, [props.category]);

  return (
    <div className="container">
      <div className="news-section">
        {news.map((data, index) => {
          return (
            <div key={index} className="news-card">
              <img src={data.urlToImage} alt="News 1" />
              <div className="news-card-content">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
              {readingListCheck(data.title) ? (
                <button
                  className="add-list"
                  onClick={() => removefromReadingList(data.title)}
                >
                  Remove from reading list
                </button>
              ) : (
                <button
                  className="add-list"
                  onClick={() => addToReadingList(data)}
                >
                  Add to reading list
                </button>
              )}
              {/* <button onClick={()=>addNewsHandler(data)} className="bookmark">Add to Bookmark</button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageLayout;
