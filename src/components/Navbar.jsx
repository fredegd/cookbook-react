import styled, { StyleSheetManager } from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/navbar.css";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
      setShow(!show);
      console.log(show)
  }

  return (
    // this is an <ul> tag
    <>
      <StyledNav>
        <NavLink to="/">
          <Logo />
        </NavLink>

        <HamburgerMenu onClick={handleShow} show={show} setShow={setShow}/>

        <Menu show={show}>
          <MenuItem to="/" onClick={handleShow}>Home</MenuItem>
          <MenuItem to="/recipes" onClick={handleShow}>Recipes</MenuItem>
          <MenuItem to="/categories" onClick={handleShow}>Categories</MenuItem>
          <MenuItem to="/about" onClick={handleShow}>About</MenuItem>
          <MenuItem to="/contact" onClick={handleShow}>Contact</MenuItem>
        </Menu>

      </StyledNav>
    </>
  );
}

const StyledNav = styled.nav`
  width: 100%;
  height: 7em;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: yellow;
`;

const Menu = styled.ul`
  margin: 0em 1em;
  padding: 1em;
  list-style: none;
  background: mediumseagreen;
  border-radius: 1.2em;
  font-size: 1rem;
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  @media screen and (max-width: 700px) {
    margin: 0;
    padding: 0;
    border-radius: 0;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 10em;
    left: ${(props) => (props.show ? "0" : "-110%")};


    opacity: 1;
  }
  .active {
    color: yellow;
    font-weight: bold;
  }
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  padding: 0.2em;
  height: 100%;
  color: black;
  padding: 0.5em;
  /* border: 2px solid mediumseagreen; */
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
    background: yellow;
  }
`;
