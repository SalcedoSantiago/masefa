import React from 'react'
import styled from "styled-components";
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from "framer-motion";
import { Button } from "./button";

import useAnimatedNavToggler from './helpers/useToggle';
import Logo from './assets/images/logo.png'
import HeaderInfo from './links';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar';

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
    flex: 1;
    align-items: center;
    padding: 20px 2rem;
    justify-content: space-between;

    @media (min-width: 768px) {
        display: none;
    }
`;

const NavToggle = styled(Button)`
    z-index: 9999;
    padding: 10px 20px;
    background-color: var(--orange);
    border-radius: 4px;
    z-index: 12;
        /* position: fixed;
        margin: 2rem;
        right: 0; */
    &.open{
        /* z-index: 12; */
        position: fixed;
        margin: 2rem;
        right: 0;
    }
    &:hover{
        background-color: #ff6600;
    }
`;


export const MobileNavLinks = motion(styled.div`
    z-index: 10;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    margin: 1.5rem 1rem;
    padding: 2rem;
    border-width: 1px;
    text-align: center;
    border-radius: 0.5rem;
    color: #ffff;
    background-color: var(--blue
        );

  ${NavLinks} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2px;

    ${Link}{
        padding-top: 20px;
        padding-bottom: 21px;
        /* border-bottom: 2px solid white; */
        &:hover{
            color: var(--orange);
        }
    }
  }
`);

const Header = () => {
    const { animation, toggleNavbar } = useAnimatedNavToggler();

    return (
        <>
            <Navbar toggleNavbar={toggleNavbar} />
            <Sidebar toggleNavbar={toggleNavbar} animation={animation} />
        </>
    )

}

export default Header;
