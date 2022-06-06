import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.div`
    background-color: var(--blue);
    width: 100%;
    height: 80px;
`

export const NavbarContainer = styled.nav`
    max-width: 1280px;
    padding: 0 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const NavLogo = styled.div`
`

export const MobileIcon = styled.nav`
    display: none;

    @media screen and (max-width: 768px) {
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