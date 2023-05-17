import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Card from "../components/Card";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [apiError, setAPIError] = useState("");
  const [bookmarkData, setBookmarkData] = useState([]);

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
          <div>상품 리스트</div>
          <Card
            products={products}
            changeBookmark={changeBookmark}
            bookmarkData={bookmarkData}
          />
        </section>
      ) : (
        apiError
      )}
    </div>
  );
};

export default MainPage;
