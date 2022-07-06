import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom';

export const MobilebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 40%;
  background: white;
  border-bottom: 1px solid #eee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0') };
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  color: black;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0.7rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline:none;
` ;

export const MobilebarWrapper = styled.div`
  color: #fff;
`;

export const MobilebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-row: repeat (6, 60px);
  }
` 

export const MobilebarLink = styled(LinkRouter)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2 ease-in-out;
color: black;
cursor: pointer;

&:hover {
  color: rgb(51, 153, 255);
  transition: 0.2s ease-in-out;
}
`

export const MobilebarLinkExt = styled.a`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2 ease-in-out;
color: black;
cursor: pointer;

&:hover {
  color: rgb(51, 153, 255);
  transition: all 0.2s ease-in-out;
}
`


