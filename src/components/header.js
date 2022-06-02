import React from 'react'
import styled from "styled-components";
import { IoIosMail, IoMdPin, IoIosCall, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io'


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


const InfoContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    background-color: var(--orange);

    > div{
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span{
        color: white;
    }

    svg{
        path{
            fill: var(--white);
        }
    }

`

const LogoLink = styled.a`


    img{
        width: 160px;
    }

`

const Header = () => {

    const logoLink = (
        <LogoLink href="/">
            <img id="logo" src="http://wp.dreamitsolution.net/dreamit/dreamit-handyman/wp-content/uploads/2021/04/logo.png" alt="test" />
        </LogoLink>
    )

    const links = (
        <StyledNavigation>
            <NavLinksContainer key={1}>
                <div>
                    {logoLink}
                </div>
                <NavLinks>
                    <Link href="/#">Home</Link>
                    <Link href="/#">Sobre Nosotros</Link>
                    <Link href="/#">Servcios</Link>
                    <Link href="/#">Contacto</Link>
                </NavLinks>
            </NavLinksContainer>
        </StyledNavigation>
    )



    return (
        <HeaderContainer>
            <InfoContainer>
                <div>
                    <div>
                        <span>
                            <IoIosMail /> masefa@gmail.com
                        </span>
                        <span>
                            <IoMdPin /> 1st Floor New World
                        </span>
                        <span>
                            <IoIosCall /> +880 320 432 242
                        </span>
                    </div>
                    <div>
                        <span>
                            <IoLogoFacebook />
                        </span>
                        <span>
                            <IoLogoTwitter />
                        </span>
                        <span>
                            <IoLogoLinkedin />
                        </span>
                        <span>
                            <IoLogoWhatsapp />
                        </span>
                    </div>
                </div>
            </InfoContainer>
            {links}
        </HeaderContainer>
    )
}






export default Header;
