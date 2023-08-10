import React, { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within appConetextProvider");
  } else {
    return context;
  }
};

function AppContextProvider(props) {
  const [readingList, setreadingList] = useState([]);

  const addToReadingList = (data) => {
    const newNews = data;
    const newnew = [...readingList, newNews];
    setreadingList(newnew);
  };

  const removefromReadingList = (title) => {
    const oldNewsList = [...readingList];
    const newNewsList = oldNewsList.filter((data) => data.title !== title);
    setreadingList(newNewsList);
  };

  return (
    <div>
      <AppContext.Provider
        value={{ readingList, addToReadingList, removefromReadingList }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

export default AppContextProvider;
