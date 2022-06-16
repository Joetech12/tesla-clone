import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  id,
  title,
  description1,
  description2,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg} id={id}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>
            {description1}{" "}
            <span>
              <a href="">{description2}</a>
            </span>
          </p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-image: url('/images/model-s.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 17vh;
  text-align: center;
  h1 {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    padding: 1px 0;
    border-bottom: 1px solid black;
    &:hover {
      border-bottom: 2px solid black;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
