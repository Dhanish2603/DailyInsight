import React, { useEffect, useState } from "react";

const PageLayout = (props) => {
  const [news, setNews] = useState([]);
  // const [name, setName] = useState("madhhffhfvesh");
  // const [password, setPassword] = useState("madhvjfghfesh");
  // const sample = async () => {
  //   const sample = await fetch("http://localhost:5000/sample", {
  //     method: "POST",
  //      mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
       
  //     }),
  //   })
  //     .then((data) => {
  //       console.log("completed");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
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
   
 data()
   
 },[props.category] )
 

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
