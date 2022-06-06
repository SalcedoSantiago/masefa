import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.div`
    background-color: var(--blue);
    width: 100%;
    height: 80px;
`

export const NavbarContainer = styled.nav`
    max-width: 1280px;
    height: 100%;
    padding: 0 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    color: #fff;
    font-weight: 700;
`

export const MobileIcon = styled.nav`
    font-size: 2rem;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    margin-left: 20px;
`

export const NavLink = styled(LinkS)`
    color: var(--white);
    font-weight: 600;
    font-family: "Poppins";
`