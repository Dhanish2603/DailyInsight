import React from "react";
import {useAppContext} from "../context/AppContext";
const BookMarks = () => {
  const { readingList, addToReadingList, removefromReadingList } = useAppContext();
  const readingListCheck = (title) => {
    const Check = readingList.some((data) => data.title == title);
    return Check;
  };
  return (
    <div className="container">
      <div className="news-section">
      {readingList.map((data, key) => {
            return (
              <div key={key} className="news-card">
                <img src={data.urlToImage} alt="News 1" />
                <div className="news-card-content">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  {readingListCheck(data.title) ? <button className="add-list"  onClick={() => removefromReadingList(data.title)}>Remove from reading list</button> :                  <button
                        className="add-list"
                        onClick={() => addToReadingList(data)}>
                        Add to reading list
                      </button>}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BookMarks;
