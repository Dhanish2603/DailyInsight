import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../store/context";
const PageLayout = (props) => {
  const [news, setNews] = useState([]);
  const authctx = useContext(AuthContext);
  const datasend = async (book) => {
    const { title, description, image } = book;
    const article = { title, description, image };

    await axios
      .post("http://localhost:5000/bookmark", article, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const data = () => {
    const apikey = "011a4bb168875ebd5c3bc441672271d1";
    var url =
      "https://gnews.io/api/v4/top-headlines?category=" +
      props.category +
      "&lang=en&country=us&max=100&apikey=" +
      apikey;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var articles = data.articles.slice(0, 20);
        setNews(articles);
        console.log(news);
      });
  };

  useEffect(() => {
    if(authctx.isSignIn ) 
    data();
    authctx.onFetch()
  }, [props.category,authctx.isSignIn]);

  return (
    <div className="container">
      <div className="news-section">
        {authctx.isSignIn &&
          news.map((data, index) => {
            return (
              <div key={index} className="news-card">
                <img src={data.image} alt="News 1" />
                <div className="news-card-content">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <button onClick={() => datasend(data)}>
                    add to bookmark
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PageLayout;
