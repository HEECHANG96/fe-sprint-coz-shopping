import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-title-section">
        <img
          className="logo"
          src="https://s3-alpha-sig.figma.com/img/a646/01d8/d9897ad884e6380838afc832f8a97155?Expires=1684713600&Signature=eqV6s8pgzqLHg7nNUeBRA2TcSDPzXEbuOWyPrAWGWD5fomOBkd19hfx2tm5Be8C23Jzgn1qtiCE1LC5VDlR6OpfXx481wKjOY9z6oEm7PYTEGL5q0ymM0mQxU3VDZ6seCkB1~PKZDk8KLgjHPKmnwnTRMbA2YN~HC90fcjcEoU1gK4BgvLIWwcSyaOpWGyj9M~c0O5WtCxsUzDzq6cRRyPw4DQ5P6UY4UpPPEZQfLPAZvlqi8wTKL0CIk5kVgc7e~9UTx03nkqCV1GFMSrZQmf~egHylS8kgHr--wIZNbfgzce32M-etRkJDX2IhWOZvsG7mlbfhwTFmgGKhfGBENw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <h1 className="title">COZ Shopping</h1>
      </div>
      <FontAwesomeIcon icon={faBars} className="faBars" />
    </div>
  );
};

export default Header;
