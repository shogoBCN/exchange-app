import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavBrand, MobileBurger, NavMenu, NavItem, NavLinks, NavLinkExt } from './NavbarStyles';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavBrand to='/'>Currex™</NavBrand>
          <MobileBurger onClick={toggle}>
            <FaBars />
          </MobileBurger>
          <NavMenu>
            <NavItem>
              <NavLinks to="/currEx">Currex</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="/currList">
                  Currlist
              </NavLinks>
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