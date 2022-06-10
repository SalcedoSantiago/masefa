import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
} from './NavbarElements'

const Navbar = ({toggleNavbar}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo >
                        Masefa
                    </NavLogo>
                    <MobileIcon onClick={toggleNavbar}>
                        +
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="about">Sobre Nosotros</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services">Servicios</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services">Servicios</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar