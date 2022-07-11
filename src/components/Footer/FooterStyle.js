import styled from 'styled-components'

export const MainFooterDiv = styled.div`
  margin-top: 40px;
  background: #BDD0D5;
  border-bottom: 1px solid #BDD0D5;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 10;
` 
export const NavLinkExt = styled.a`
  color: #007c89;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    color: #808080;
    transition: 0.5s ease-in-out;
  }
`