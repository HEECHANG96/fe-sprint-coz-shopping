import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBookmarkedData,
  removeFromBookmark,
} from "../../redux/actions/bookmarkAction";
const Card = ({ products }) => {
  const state = useSelector((state) => state);
  const { bookmarkedData } = state;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const dispatch = useDispatch();

  // 북마크 state와 리덕스의 데이터와 싱크 맞춰주기
  useEffect(() => {
    setIsBookmarked(
      bookmarkedData.some((bookmarkedItem) => bookmarkedItem.id === products.id)
    );
  }, [bookmarkedData, products]);

  // 북마크 아이콘 클릭했을때 local state와 리덕스에 상태 업데이트해주기
  const changeBookmarkedData = (event) => {
    event.stopPropagation();
    !isBookmarked
      ? dispatch(addToBookmarkedData(bookmarkedData))
      : dispatch(removeFromBookmark(bookmarkedData));
    setIsBookmarked((prev) => !prev);
  };

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
                <div className="product-bookmark">
                  {isBookmarked ? (
                    <FontAwesomeIcon
                      icon={faStar}
                      size="lg"
                      style={{ color: "#ffea00" }}
                      onClick={changeBookmarkedData}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faStar}
                      size="lg"
                      style={{ color: "#f1f2f3" }}
                      onClick={changeBookmarkedData}
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
