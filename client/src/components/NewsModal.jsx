import React, { useState, useContext } from "react";
import axios from "axios";

import { Navigate } from "react-router-dom";
import Auth from "./Authentication/Auth";
import api from "./Api";
import AuthContext from "./store/context";

const NewsModal = ({ isOpen, isClose, news }) => {
  const auth = useContext(AuthContext);
  const sendData = async (book) => {
    const { title, description, image } = book;
    const articleData = { title, description, image };
    await axios
      .post(api+"/bookmark", articleData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Stored in Bookmark");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return auth.isLoggedIn ? (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">
          <img src={news.image} alt="News" />
        </div>
        <div className="modal-news">
          <h2>{news.title}</h2>
          <p>{news.description}</p>
          <button onClick={() => sendData(news)}>Add to Bookmark</button>
        </div>
      </div>
      <button className="closebtn" onClick={() => isClose()}>
        Close
      </button>
    </div>
  ) : (
    <div className="modal-overlay">
      <Auth />
    </div>
  );
};

export default NewsModal;
