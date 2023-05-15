import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo-title-section">
        <img
          className="logo"
          src="../images/logo.png"
          onClick={() => {
            navigate("/");
          }}
          alt=""
        />
        <h1 className="title">COZ Shopping</h1>
      </div>
      <div className="hamburger-menu-section">
        <FontAwesomeIcon icon={faBars} className="faBars" />
        <div className="dropdown">
          <div className="menu-list radius">정희창님, 안녕하세요!</div>
          <div
            className="menu-list radius"
            onClick={() => {
              navigate("/products/list");
            }}
          >
            <img src="../images/product.png" alt="" />
            상품리스트
          </div>
          <div
            className="menu-list"
            onClick={() => {
              navigate("/bookmark");
            }}
          >
            <img src="../images/bookmark.png" alt="" />
            북마크 페이지
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
