import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ products, changeBookmark, bookmarkData }) => {
  return (
    <div>
      <ul className="card-list">
        {products &&
          products.map((product) => (
            <li className="card" key={product.id}>
              <section className="card-container">
                <img
                  className="card-image"
                  src={
                    product.type === "Brand"
                      ? product.brand_image_url
                      : product.image_url
                  }
                  alt={product.title}
                />
                <div
                  className="product-bookmark"
                  onClick={() => changeBookmark(product)}
                >
                  {bookmarkData.includes(product) ? (
                    <FontAwesomeIcon
                      icon={faStar}
                      size="lg"
                      style={{ color: "#ffea00" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faStar}
                      size="lg"
                      style={{ color: "#f1f2f3" }}
                    />
                  )}
                </div>
              </section>
              <section className="card-info">
                <div className="card-info-first">
                  {product.type === "Brand" ? (
                    <span className="card-brand-name">
                      {product.brand_name}
                    </span>
                  ) : product.type === "Category" ? (
                    <span className="card-title"># {product.title}</span>
                  ) : (
                    <span className="card-title">{product.title}</span>
                  )}
                  {product.type === "Brand" ? (
                    <span className="card-interested-customer">관심고객수</span>
                  ) : null}
                  {product.type === "Product" ? (
                    <span className="card-discount">
                      {product.discountPercentage}%
                    </span>
                  ) : null}
                </div>
                <div>
                  {product.type === "Product" ? (
                    <span className="card-price">
                      {product.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
                  ) : null}
                  {product.type === "Brand" ? (
                    <span className="card-follower">
                      {product.follower.toLocaleString()}명
                    </span>
                  ) : null}
                  {product.type === "Exhibition" ? (
                    <span className="card-exhibition">{product.sub_title}</span>
                  ) : null}
                </div>
              </section>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Card;
