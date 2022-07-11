import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
  background: #BDD0D5;
  border-bottom: 1px solid #BDD0D5;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  //position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 90%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavBrand = styled(LinkRouter)`
  color: #007c89;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #007c89;
  }
`

export const MobileBurger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -0.75rem;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #007c89;
  }
`

export const NavMenu = styled.ul`
  display: flex; 
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkRouter)`
  color: #007c89;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    outline: 1px solid #808080;
    outline-offset:-10px; 
    color: #808080;
    transition: 0.5s ease-in-out;
  }
`

export const NavLinkExt = styled.a`
  color: #007c89;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    outline: 1px solid #808080;
    outline-offset:-10px; 
    color: #808080;
    transition: 0.5s ease-in-out;
  }
`

