import React from 'react'
import styled from "styled-components";
import { IoIosMail, IoIosResize } from 'react-icons/io'
import { motion } from "framer-motion";

import useAnimatedNavToggler from './helpers/useToggle';
import Logo from './assets/images/logo.png'
import HeaderInfo from './links';

const HeaderContainer = styled.header`
    width: 100%;
`


const StyledNavigation = styled.div`
    background-color:#00235a;
    width: 100%;
    padding: 1.5rem 0;
`

const NavLinksContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 60px;
    
`;

const Link = styled.a`
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-family: 'Poppins';
    font-size: 16px;
    color: white;
`



const LogoLink = styled.a`
    img{
        width: 160px;
    }

`

const DesktopNavContainer = styled.nav`
    @media (max-width: 768px) {
        display: none;
    }
`


const MobileNavLinksContainer = styled.nav`
    display: flex;
    flex:1;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        display: none;
    }
`;

const NavToggle = styled.button`
    
    

`;


export const MobileNavLinks = motion(styled.div`
    position: fixed;
    top:0;
    margin-top: 10px;
    margin-right: 20px;
    margin-left: 20px;
    border: 1px solid red;
    text-align: center;
    border-radius: 20px;
    color: gray;
    background-color: white;


  ${Link} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`);

const Header = () => {
    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

    const logoLink = (
        <LogoLink href="/">
            <img id="logo" src={Logo} alt="test" />
        </LogoLink>
    )

    const navsLinks =
        <NavLinks>
            <Link href="/#">Home</Link>
            <Link href="/#nosotros">Sobre Nosotros</Link>
            <Link href="/#servicios">Servicios</Link>
            <Link href="/#equipo">Equipo</Link>
            <Link href="/#contact">Contacto</Link>
        </NavLinks>

    const links = (
        <StyledNavigation>
            <NavLinksContainer key={1}>
                <div>
                    {logoLink}
                </div>
                {navsLinks}
            </NavLinksContainer>
        </StyledNavigation>
    )

    return (
        <HeaderContainer>
            <DesktopNavContainer>
                <HeaderInfo />
                {links}
            </DesktopNavContainer>
            <MobileNavLinksContainer>
                {logoLink}
                <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} >
                    {navsLinks}
                </MobileNavLinks>
                <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
                    {showNavLinks ? <IoIosResize /> : <IoIosMail />}
                </NavToggle>
            </MobileNavLinksContainer>
        </HeaderContainer>
    )
}






export default Header;
