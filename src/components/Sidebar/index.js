import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';


const Sidebar = ({ animation, toggleNavbar }) => {

    return (
        <SidebarContainer initial={{ x: "150%", display: "none", opacity: '0' }} animate={animation}>
            <Icon onClick={toggleNavbar}>
                <CloseIcon >
                    <i class="fa-solid fa-xmark"></i>
                </CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home">Home</SidebarLink>
                    <SidebarLink to="about">Sobre Nosotros</SidebarLink>
                    <SidebarLink to="services">Services</SidebarLink>
                    <SidebarLink to="contact">Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar