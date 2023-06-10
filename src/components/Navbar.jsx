import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { cls } from "../colors";
import "./css/navbar.css";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const first = "our";
  const second = "Cookbook";

  return (
    // this is an <ul> tag
    <>
      <StyledNav>
        <NavLink to="/" style={{zIndex: `9999`}}>
          <Logo  />
        </NavLink>
        <Wrap>
        <NavTitle style={{zIndex: `9999`}}>
          <HighlightContainer>
            <Higlight>{first}&nbsp;&nbsp;&nbsp;</Higlight>
          </HighlightContainer>
          {second && (
            <HighlightContainer>
              <Higlight>{second}&nbsp;</Higlight>
            </HighlightContainer>
          )}
        </NavTitle>

        <Menu show={show}>
          <MenuItem to="/" onClick={handleShow}>
            Home
          </MenuItem>
          <MenuItem to="/recipes" onClick={handleShow}>
            Recipes
          </MenuItem>
          <MenuItem to="/categories" onClick={handleShow}>
            Categories
          </MenuItem>
          <MenuItem to="/about" onClick={handleShow}>
            About
          </MenuItem>
          <MenuItem to="/contact" onClick={handleShow}>
            Contact
          </MenuItem>
        </Menu>

        <Searchbar type="text" placeholder="search recipe..." />
        </Wrap>

        <HamburgerMenu onClick={handleShow} show={show} setShow={setShow} />

      </StyledNav>
    </>
  );
}

const NavTitle = styled.div`
  font-family: "Playfair Display SC", serif;
  font-size: 3em;

  display: none;
  transition: all 0.3s;
  @media screen and (max-width: 770px) {
    border: 2px solidred;
    display: block;
    visibility: visible;
    font-size: 0.9em;
  }
`;

const Wrap = styled.div`
width: 90%;
display: flex;
flex-direction: row;
align-items: center;
@media screen and (max-width: 770px) {
width: auto;
flex-direction: column;
align-items: center;


}
`

const Searchbar= styled.input`
margin: auto;
/* margin-top: 0.5em; */
width: 8em;
height: 1.4em;
border-radius: 1em;
@media screen and (max-width: 770px) {
margin-top: 1.2em;

}
`


const StyledNav = styled.nav`
 z-index: 9999;
  width: 100%;
  //height: 5em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;

  background-color: ${cls.col1};
  @media screen and (max-width: 950px) {
  height: 7em;

  }
`;

const Menu = styled.ul`
  padding: 1em 0;
  list-style: none;
  text-decoration: none;
  background: ${cls.col3};
  border-radius: 1.2em;
  font-size: 1rem;
  font-weight: 500;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s;
  @media screen and (max-width: 770px) {
    margin: 0;
    padding-top: 2em;
    border-radius: 0;
    font-size: 2rem;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    position: absolute;

    top: 0;
    /* top: 10.5em; */
    left: ${(props) => (props.show ? "0" : "-110%")};
    opacity: 1;
  }
  .active {
    color: ${cls.col1};
    font-weight: bold;
  }
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  padding: 0.2em;
  height: 100%;
  color: ${cls.col4};
  padding: 0.5em;
  @media screen and (max-width: 770px) {
    margin: 1em;
  }

  &:after {
    content: "";
    display: block;
    height: 5px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease;
  }
  &:hover:after {
    width: 100%;
    background: ${cls.col1};
  }
`;

const HighlightContainer = styled.span`
  position: relative;
  display: inline-block;
  &:before {
    content: "";
    display: flex;
    height: 2em;
    width: 130%;
    position: absolute;
    background: ${cls.col1};
    background-image: linear-gradient(
      135deg,
      ${cls.col1} 0%,
      ${cls.col1} 50%,
      ${cls.col2} 100%
    );
    transform: rotate(-2deg);
    top: -0.3em;
    left: -0.5em;
    border-radius: 28% 25% 20% 24%;
    @media screen and (max-width: 770px) {
      background-image: linear-gradient(
        135deg,
        ${cls.col1} 0%,
        ${cls.col2} 40%,
        ${cls.col2} 100%
      );
    }
  }
`;

const Higlight = styled.span`
  position: relative;
`;
