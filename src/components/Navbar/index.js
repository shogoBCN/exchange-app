import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavBrand, MobileBurger, NavMenu, NavItem, NavLinks, NavLinkExt } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavBrand to='/'>Currex<span className="magooblue">™</span></NavBrand>
          <MobileBurger onClick={toggle}>
            <FaBars />
          </MobileBurger>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Currex</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/currlist">Currlist</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinkExt href="https://thor-portfolio.netlify.app/" target="_blank">Portfolio</NavLinkExt>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;