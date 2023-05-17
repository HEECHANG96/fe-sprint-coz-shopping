import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Card from "../components/Card";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [apiError, setAPIError] = useState("");

  // API 불러오기
  const getProductList = async () => {
    try {
      let url = `http://cozshopping.codestates-seb.link/api/v1/products?count=2`;
      setIsLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  console.log("data: ", product);

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
        <div className="container">
          <Card product={product} />
        </div>
      ) : (
        apiError
      )}
    </div>
  );
};

export default MainPage;
