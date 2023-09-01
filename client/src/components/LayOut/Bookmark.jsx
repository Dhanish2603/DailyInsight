import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../Api";
const BookMarks = () => {
  const [Articles, setArticles] = useState([]);
  const bookmarkShow = () => {
    axios
      .post(api + "/show", {
        withCredentials: true,
      })
      .then((data) => {
        setArticles(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    bookmarkShow();
    console.log(Articles);
  }, []);

  return (
    <div className="container">
      <div className="news-section">
        {Articles.map((data, index) => {
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

export default BookMarks;
