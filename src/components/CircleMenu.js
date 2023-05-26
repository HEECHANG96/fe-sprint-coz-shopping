import React, { useState } from "react";
import { circleMenu } from "../circleMenu/circleData";
import styled from "styled-components";

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
  cursor: pointer;
`;
const CircleMenuImg = styled.img``;
const Selected = styled.div`
  border-bottom: ${(props) =>
    props.title === props.value ? "3px solid rgb(58 28 235)" : ""};
`;

const CircleMenu = ({ checkDataType }) => {
  const [type, setType] = useState(null);

  // underline
  const [currentTab, setCurrentTab] = useState("All");
  const changeUnderLine = (event) => {
    setCurrentTab(event);
    console.log("event", currentTab);
  };

  const typeClick = (type) => {
    setType(type);
    checkDataType(type);
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
          <CircleMenuImg
            src={el.icon}
            alt={el.alt}
            value={el.alt}
            title={currentTab}
            onClick={() => changeUnderLine(el.alt)}
          />
          <Selected
            value={el.alt}
            title={currentTab}
            onClick={() => changeUnderLine(el.alt)}
          >
            {el.type}
          </Selected>
        </Type>
      ))}
    </CircleMenuContainer>
  );
};

export default CircleMenu;
