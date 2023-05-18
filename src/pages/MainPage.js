import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Card from "../components/Card";
import BookmarkList from "../components/BookmarkList";
import { dataAction } from "../redux/actions/dataAction";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarkData, setBookmarkData] = useState([]);
  const [bookmarkedData, setBookmarkedData] = useState([]);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const { fourData } = useSelector((state) => state.data);

  // bookmark된 data들을 bookmarkData에 넣어주는 함수
  const changeBookmark = (item) => {
    setBookmarkData((bookmarkData) => {
      if (bookmarkData.includes(item)) {
        return bookmarkData.filter((id) => id !== item);
      } else {
        return [...bookmarkData, item];
      }
    });
    console.log(bookmarkData);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(dataAction.getData());
    setProducts(fourData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let bookmark = localStorage.getItem("bookmark");

    if (bookmark === null) {
      bookmark = [];
    } else {
      bookmark = JSON.parse(bookmark);
    }
    bookmark.push(bookmarkData);
    bookmark = [...bookmark];
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
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
          <Card
            products={products}
            changeBookmark={changeBookmark}
            bookmarkData={bookmarkData}
          />
          {bookmarkData.length > 0 ? (
            <div>
              <div className="bookmark-list">북마크 리스트</div>
              <BookmarkList
                bookmarkData={bookmarkData}
                changeBookmark={changeBookmark}
              />
            </div>
          ) : null}
        </section>
      )}
    </div>
  );
};

export default MainPage;
