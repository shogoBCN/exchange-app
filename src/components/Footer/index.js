import React from 'react';
import { MainFooterDiv, NavLinkExt } from './FooterStyle';
import { FaGithub, FaFingerprint, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <MainFooterDiv>
        <NavLinkExt href="https://thor-portfolio.netlify.app/" target="_blank"><FaFingerprint/></NavLinkExt>
        <NavLinkExt href="https://github.com/shogoBCN/" target="_blank"><FaGithub/></NavLinkExt>
        <NavLinkExt href="https://www.linkedin.com/in/thor-brueckner/" target="_blank"><FaLinkedinIn/></NavLinkExt>
      </MainFooterDiv>
    </>
  )
}

export default Footer;

