import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Card from "./Card";
import axios from "axios";

function ProductsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getProductList = async () => {
    try {
      let response = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
      );
      setProducts(response.data);
    } catch (error) {
      setErrorMsg("Get Product List Data Error");
    }
  };
  useEffect(() => {
    getProductList();
    setIsLoading(false);
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
      ) : (
        <section className="main-container">
          <div className="product-list">상품 리스트</div>
          <ul>
            {errorMsg ? <div>{errorMsg}</div> : <Card products={products} />}
          </ul>
          {/* {bookmarkData.length > 0 ? (
          <div>
            <div className="bookmark-list">북마크 리스트</div>
            <BookmarkList
              bookmarkData={bookmarkData}
              changeBookmark={changeBookmark}
            />
          </div>
        ) : null} */}
        </section>
      )}
    </div>
  );
}

export default ProductsList;
