import React from 'react';
import { MobilebarContainer, Icon, CloseIcon, MobilebarWrapper, MobilebarMenu, MobilebarLink } from './MobilebarStyles';

const Mobilebar = ( { isOpen, toggle }) => {
  return(
    <MobilebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobilebarWrapper>
        <MobilebarMenu>
          <MobilebarLink to='/' onClick={toggle}>Currex</MobilebarLink>
          <MobilebarLink to='/currlist' onClick={toggle}>Currlist</MobilebarLink>
        </MobilebarMenu>
      </MobilebarWrapper>
    </MobilebarContainer>
  );
};

export default Mobilebar;