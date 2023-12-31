import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import api from "../Api";
import AuthContext from "../store/context";
import SignIn from "../Authentication/SignIn";
import NewsModal from "../NewsModal";

const PageLayout = (props) => {
  const authCtx = useContext(AuthContext);
  const [news, setNews] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const openModal = (data) => {
    setSelectedNews(data);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setModalOpen(false);
  };

  const datasend = async (book) => {
    const { title, description, image } = book;
    const article = { title, description, image };

    await axios
      .post(api + "/bookmark", article, {
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
        var articles = data.articles;
        setNews(articles);
        console.log(news);
      });
  };

  useEffect(() => {
    data();
  }, [props.category]);

  return (
    <div className="container">
      <div className="news-section">
        {news.map((data, index) => {
          return (
            <div key={index} className="news-card">
              <img src={data.image} alt="News 1" />
              <div className="news-card-content">
                <h3>{data.title.substring(0, 30)}...</h3>
                <p>{data.description.substring(0, 70)}...</p>
              </div>
              <button className="open-button" onClick={() => openModal(data)}>
                  Read more
                </button>
            </div>
          );
        })}
        {modalOpen && (
          <NewsModal
            isOpen={openModal}
            isClose={closeModal}
            news={selectedNews}
          />
        )}
      </div>
    </div>
  );
};

export default PageLayout;
