import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BookmarkList = ({ changeBookmark, bookmarkData }) => {
  return (
    <div>
      <ul className="card-list">
        {bookmarkData &&
          bookmarkData.map((bookmarkedProduct) => (
            <li className="card" key={bookmarkedProduct.id}>
              <section className="card-container">
                <img
                  className="card-image"
                  src={
                    bookmarkedProduct.type === "Brand"
                      ? bookmarkedProduct.brand_image_url
                      : bookmarkedProduct.image_url
                  }
                  alt={bookmarkedProduct.title}
                />
                <div
                  className="product-bookmark"
                  onClick={() => changeBookmark(bookmarkedProduct)}
                >
                  {bookmarkData.includes(bookmarkedProduct) ? (
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
                  {bookmarkedProduct.type === "Brand" ? (
                    <span className="card-brand-name">
                      {bookmarkedProduct.brand_name}
                    </span>
                  ) : bookmarkedProduct.type === "Category" ? (
                    <span className="card-title">
                      # {bookmarkedProduct.title}
                    </span>
                  ) : (
                    <span className="card-title">
                      {bookmarkedProduct.title}
                    </span>
                  )}
                  {bookmarkedProduct.type === "Brand" ? (
                    <span className="card-interested-customer">관심고객수</span>
                  ) : null}
                  {bookmarkedProduct.type === "Product" ? (
                    <span className="card-discount">
                      {bookmarkedProduct.discountPercentage}%
                    </span>
                  ) : null}
                </div>
                <div>
                  {bookmarkedProduct.type === "Product" ? (
                    <span className="card-price">
                      {bookmarkedProduct.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </span>
                  ) : null}
                  {bookmarkedProduct.type === "Brand" ? (
                    <span className="card-follower">
                      {bookmarkedProduct.follower.toLocaleString()}명
                    </span>
                  ) : null}
                  {bookmarkedProduct.type === "Exhibition" ? (
                    <span className="card-exhibition">
                      {bookmarkedProduct.sub_title}
                    </span>
                  ) : null}
                </div>
              </section>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookmarkList;
