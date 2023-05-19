import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import ProductData from "../components/ProductData";
import CircleMenu from "../components/CircleMenu";

const ProductListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allProduct, setAllProduct] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [dataType, setDataType] = useState(allProduct);

  const getAllProductList = async () => {
    try {
      let response = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products"
      );
      setAllProduct(response.data);
    } catch (error) {
      setErrorMsg("Get All Product Data Error");
    }
  };

  const checkDataType = (type) => {
    if (type === "All") {
      setDataType(allProduct);
    } else {
      const filtered = allProduct.filter((el) => el.type === type);
      setDataType(filtered);
    }
  };

  useEffect(() => {
    getAllProductList();
    setIsLoading(false);
  }, []);

  return (
    <div>
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
        <>
          <CircleMenu checkDataType={checkDataType} />
          <ProductData products={dataType} />
        </>
      )}
    </div>
  );
};

export default ProductListPage;
