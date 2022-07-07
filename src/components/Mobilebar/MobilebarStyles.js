import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom';

export const MobilebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 50%;
  background: white;
  background: #BDD0D5;
  border-bottom: 1px solid #BDD0D5;
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
  color: #007c89;
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
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-row: repeat (3, 60px);
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
color: #007c89;
font-weight: bold;
margin-right: 60px;
cursor: pointer;
&:hover {
  outline: 1px solid #808080;
  outline-offset: -10px; 
  color: #808080;
  transition: 0.5s ease-in-out;
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
color: #007c89;
font-weight: bold;
margin-right: 60px;
cursor: pointer;
&:hover {
  outline: 1px solid #808080;
  outline-offset: -10px; 
  color: #808080;
  transition: 0.5s ease-in-out;
}
`


