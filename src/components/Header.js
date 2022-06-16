import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo2.svg" alt="Tesla-logo" />
      </a>
      <Menu>
        <AnchorLink href="#Model3" offset="100">
          Model 3
        </AnchorLink>
        <AnchorLink href="#ModelY" offset="100">
          Model Y
        </AnchorLink>
        <AnchorLink href="#ModelS" offset="100">
          Model S
        </AnchorLink>
        <AnchorLink href="#ModelX" offset="100">
          Model X
        </AnchorLink>
        <AnchorLink href="#Panels" offset="100">
          Solar Roof
        </AnchorLink>
        <AnchorLink href="#Roof" offset="100">
          Solar Panels
        </AnchorLink>
      </Menu>
      <RightMenu>
        <p>
          <a href="#">Shop</a>
        </p>
        <p>
          <a href="#">Account</a>
        </p>
        <a onClick={() => setBurgerStatus(true)}>Menu</a>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <Scroll>
          <li>
            <AnchorLink href="#Model3" offset="100">
              Model 3
            </AnchorLink>
          </li>
          <li>
          <AnchorLink href="#ModelY" offset="100">
          Model Y
        </AnchorLink>
          </li>
          <li>
          <AnchorLink href="#ModelS" offset="100">
          Model S
        </AnchorLink>
          </li>
          <li>
          <AnchorLink href="#ModelX" offset="100">
          Model X
        </AnchorLink>
          </li>
          <li>
          <AnchorLink href="#Panels" offset="100">
          Solar Roof
        </AnchorLink>
          </li>
          <li>
          <AnchorLink href="#Roof" offset="100">
          Solar Panels
        </AnchorLink>
          </li>
          <li>
          <AnchorLink href="#Access" offset="100">
          Accessories
        </AnchorLink>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
          <li>
            <a href="#">Commercial Energy</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <Countries>
            <Country />
            <CountryWrap>
              <a href="#">Nigeria</a>
              <p>English</p>
            </CountryWrap>
          </Countries>
          <h2>hj</h2>
          {/* <li><a href="#">Model S</a></li>
            <li><a href="#">Model 3</a></li>
            <li><a href="#">Model X</a></li>
            <li><a href="#">Model Y</a></li> */}
        </Scroll>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  img {
    padding: 0 20px;
    height: 13px;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 500;
    padding: 10px 15px;
    flex-wrap: nowrap;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    &:hover {
      background-color: rgba(62, 62, 62, 0.1);
      padding: 10px 15px;
      border-radius: 20px;
    }
  }

  @media (max-width: 1199px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: rgba(62, 62, 62, 0.1);
      padding: 10px 15px;
      border-radius: 20px;
    }
}
p {

    @media (max-width: 768px) {
    display: none;
    color: red;
}
`;

const CustomMenu = styled.div`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 30px 30px 0px 40px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;

  li {
    padding: 12px 0 12px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    font-size: 0.9rem;
    font-weight: 500;
    font-family: "Gotham Book", sans-serif;
    transition: all 0.3s ease;
    &:hover {
      background-color: rgba(62, 62, 62, 0.1);
      padding: 12px 0 12px 10px;
      border-radius: 10px;
    }
    }
  }
`;

const Scroll = styled.div`
  margin-bottom: 20px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0px; /* remove scrollbar space /
  background: transparent; / optional: just make scrollbar invisible /
  }
  / optional: show position indicator in red */
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
  h2 {
    opacity: 0;
  }
`;

const CountryWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  a {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 7px;
  }
  p {
    font-size: 0.7rem;
  }
`;

const CustomClose = styled(CloseIcon)`
  background: rgba(50, 50, 50, 0);
  border-radius: 100%;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(50, 50, 50, 0.07);
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Countries = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  &:hover {
    background-color: rgba(62, 62, 62, 0.1);
    padding: 0 10px;
    border-radius: 10px;
  }
`;
const Country = styled(LanguageIcon)``;
