import React from 'react';
import { MobilebarContainer, Icon, CloseIcon, MobilebarWrapper, MobilebarMenu, MobilebarLink, MobilebarLinkExt } from './MobilebarElements';

const Mobilebar = ( { isOpen, toggle }) => {
  return(
    <MobilebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobilebarWrapper>
        <MobilebarMenu>
          <MobilebarLink to='/' onClick={toggle}>Currex</MobilebarLink>
          <MobilebarLink to='/' onClick={toggle}>Currlist</MobilebarLink>
          <MobilebarLinkExt href="https://thor-portfolio.netlify.app/" target="_blank" onClick={toggle}>Portfolio</MobilebarLinkExt>
        </MobilebarMenu>
      </MobilebarWrapper>
    </MobilebarContainer>
  );
};

export default Mobilebar;