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
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink>Home</SidebarLink>
                    <SidebarLink>Home</SidebarLink>
                    <SidebarLink>Home</SidebarLink>
                    <SidebarLink>Home</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar