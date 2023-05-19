import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  width: 100%;
  height: 58px;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  border-top: 1px solid rgb(199, 199, 199);

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;

const FooterLetter = styled.div`
  color: rgb(199, 199, 199);
`;
const Footer = () => {
  return (
    <FooterSection>
      <div>
        <FooterLetter>개인정보 처리방침 | 이용 약관</FooterLetter>
        <FooterLetter>All rights reserved @ Codestates</FooterLetter>
      </div>
    </FooterSection>
  );
};

export default Footer;
