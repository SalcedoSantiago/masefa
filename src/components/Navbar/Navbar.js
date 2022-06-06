import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo >
                        Masefa
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
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