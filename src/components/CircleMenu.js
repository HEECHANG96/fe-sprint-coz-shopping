import React, { useState } from "react";
import { circleMenu } from "../circleMenu/circleData";
import styled, { css } from "styled-components";

const CircleMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 26.5px;
`;
const Type = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  margin-top: 24px;
  margin-right: 36px;
  margin-bottom: 52px;

  ${(props) => {
    props.underline &&
      css`
        text-decoration: underline;
      `;
  }}
`;

const CircleMenu = ({ checkDataType }) => {
  const [type, setType] = useState(null);
  const [isUnderline, setIsUnderline] = useState(false);

  const typeClick = (type) => {
    setType(type);
    checkDataType(type);
  };

  const handleClick = () => {
    setIsUnderline(true);
  };

  return (
    <CircleMenuContainer>
      {circleMenu.map((el) => (
        <Type
          key={el.id}
          onClick={() => {
            typeClick(el.alt);
          }}
        >
          <img onClick={() => handleClick()} src={el.icon} alt={el.alt} />
          <div underline={isUnderline}>{el.type}</div>
        </Type>
      ))}
    </CircleMenuContainer>
  );
};

export default CircleMenu;
