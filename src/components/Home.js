import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        id="Model3"
        title="Model 3"
        description1="Order Online for"
        description2="Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        id="ModelY"
        name="ModelY"
        title="Model Y"
        description1="Order Online for"
        description2="Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        id="ModelS"
        title="Model S"
        description1="Order Online for"
        description2="Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        id="ModelX"
        title="Model X"
        description1="Order Online for"
        description2="Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        id="Panels"
        title="Solar Panels"
        description1="Order Online for"
        description2="Touchless Delivery"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        id="Roof"
        title="Solar Roof"
        description1="Order Online for"
        description2="Touchless Delivery"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        id="Access"
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
      <Footer>
        <a>Tesla © Ifeanyi Umeh - 2022</a>
        <a>Privacy & Legal</a>
        <a>Vehicle Recalls</a>
        <a>Contact</a>
        <a>Careers</a>
        <a>News</a>
        <a>Engage</a>
        <a>Locations</a>
      </Footer>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

const Footer = styled.div`
  display: flex;

  flex-wrap: nowrap;
  justify-content: center;
  padding-bottom: 30px;
  a {
    font-size: 0.8rem;
    padding: 10px;
    cursor: pointer;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
