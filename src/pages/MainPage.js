import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Card from "../components/Card";
import BookmarkList from "../components/BookmarkList";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [apiError, setAPIError] = useState("");
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

  // API 불러오기
  const getProductList = async () => {
    try {
      let url = `http://cozshopping.codestates-seb.link/api/v1/products?count=4`;
      setIsLoading(true);
      let response = await fetch(url);
      let data = await response.json();

      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="mainpage">
      {isLoading ? (
        <div className="container">
          <ClipLoader
            color="#f88c6b"
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : !apiError ? (
        <section className="main-container">
          <div className="product-list">상품 리스트</div>
          <Card
            products={products}
            changeBookmark={changeBookmark}
            bookmarkData={bookmarkData}
          />
          {bookmarkData.length !== 0 ? (
            <div>
              <div className="bookmark-list">북마크 리스트</div>
              <BookmarkList bookmarkData={bookmarkData} />
            </div>
          ) : null}
        </section>
      ) : (
        apiError
      )}
    </div>
  );
};

export default MainPage;
