import React, { useState } from "react";
import ProductsList from "../components/ProductsList";

const MainPage = () => {
  const [bookmarkData, setBookmarkData] = useState([]);

  // bookmark된 data들을 bookmarkData에 넣어주는 함수
  const changeBookmark = (item) => {
    setBookmarkData((bookmarkData) => {
      if (bookmarkData.includes(item)) {
        return bookmarkData.filter((id) => id !== item);
      } else {
        return [...bookmarkData, item];
      }
    });
  };

  return (
    <div className="mainpage">
      <ProductsList />
    </div>
  );
};

export default MainPage;
