import React from "react";
import { useSelector } from "react-redux";
import ProductsList from "../components/ProductsList";

const MainPage = () => {
  const state = useSelector((state) => state);
  const { productList, bookmarkedData } = state;

  return (
    <div className="mainpage">
      <ProductsList />
    </div>
  );
};

export default MainPage;
