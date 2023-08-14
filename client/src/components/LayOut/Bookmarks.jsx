import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Bookmarks = () => {
  const [bookmark,setbookmark] = useState([]);
  let items = useSelector((state) => state.book.bookmarks);

  return (
    <div>
      {items.length &&
        bookmark.map((data, index) => {
          return (
            <div key={index} className="news-card">
              <img src={data.image} alt="News 1" />
              <div className="news-card-content">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
              {/* <button onClick={()=>addNewsHandler(data)} className="bookmark">Add to Bookmark</button> */}
            </div>
          );
        })}
    </div>
  );
};

export default Bookmarks;
