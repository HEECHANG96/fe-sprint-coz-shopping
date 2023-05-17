import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ product }) => {
  console.log("product", product);
  return (
    <div>
      <h2>상품 리스트</h2>
      <div className="card">
        {product.map((el) => {
          return (
            <div className="product-img">
              <div className="background-wrap">
                <img
                  className="product-img"
                  src={el.image_url ? el.image_url : el.brand_image_url}
                  alt="product img"
                />

                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  style={{ color: "#f1f2f3" }}
                  className="content"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
