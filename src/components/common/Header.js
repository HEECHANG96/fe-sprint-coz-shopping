import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderSection = styled.header`
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 9999;
`;
const LogoTitleSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 76px;
  cursor: pointer;
`;
const Title = styled.h1`
  margin-left: 15px;
`;
const HamburgerMenuSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin-right: 76px;
  position: relative;

  &:hover {
    > div {
      display: block;
    }
  }
`;
const Dropdown = styled.div`
  display: none;
  width: 200px;
  position: absolute;
  background: #ffffff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  filter: drop-shadow(rgba(0, 0, 0, 0.18) 0px 4px 10px);
  margin: 220px -18px 0px 0px;
  z-index: 1;
  cursor: pointer;
  margin-right: 62px;

  &::after {
    border: 1px solid blue;
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 15px 15px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -10px;
    left: 150px;
  }
`;

const MenuList = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 16px;
  padding-left: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderSection>
      <LogoTitleSection
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="logo" src="../images/logo.png" alt="logo" />
        <Title>COZ Shopping</Title>
      </LogoTitleSection>
      <HamburgerMenuSection>
        <FontAwesomeIcon icon={faBars} className="faBars" />
        <Dropdown>
          <MenuList>정희창님, 안녕하세요!</MenuList>
          <MenuList>
            <div
              className=""
              onClick={() => {
                navigate("/products/list");
              }}
            >
              <img src="../images/product.png" alt="shopping list" />
              상품리스트
            </div>
          </MenuList>
          <MenuList>
            <div
              className=""
              onClick={() => {
                navigate("/bookmark");
              }}
            >
              <img src="../images/bookmark.png" alt="bookmark page" />
              북마크 페이지
            </div>
          </MenuList>
        </Dropdown>
      </HamburgerMenuSection>
    </HeaderSection>
  );
};

export default Header;
