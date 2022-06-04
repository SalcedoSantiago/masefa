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

    a{
        text-decoration: none;
        cursor: pointer;
    }

    .info-contact{
        display: flex;
        align-items: center;
        
        p{
        display: inline-block;
        font-size: 14px;
        margin-right: 20px;
        margin-top: 0;
        color: var(--white);
        margin-bottom: 0;
        display: flex;
        align-items: center;

        a{
            color:  var(--white);
        }
        svg{
            width: 18px;
            height: 18px;
            margin-right: 7px;
            path{
                fill: var(--white);
            }
        }
    }
    }

    .social-links{
        display: flex;
        align-items: center;

        p{
            margin-left: 18px;
            display: inline;
            color: var(--white);
            margin-top: 0;
            margin-bottom: 0;
            line-height: 1;

            a{
                color: var(--white);
            }
        }

        svg{
            width: 18px;
            height: 18px;
            path{
                fill: var(--white);
            }
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
                    <Link href="/#nosotros">Sobre Nosotros</Link>
                    <Link href="/#servicios">Servicios</Link>
                    <Link href="/#equipo">Equipo</Link>
                    <Link href="/#contact">Contacto</Link>
                </NavLinks>
            </NavLinksContainer>
        </StyledNavigation>
    )



    return (
        <HeaderContainer>
            <InfoContainer>
                <div>
                    <div className='info-contact'>
                        <p>
                            <IoIosMail />
                            <a href='#'>
                                masefa@gmail.com
                            </a>
                        </p>
                        <p>
                            <IoMdPin /> 1st Floor New World
                        </p>
                        <p>
                            <IoIosCall />
                            <a>
                                +880 320 432 242
                            </a>
                        </p>
                    </div>
                    <div className='social-links'>
                        <p>
                            <a>
                                <IoLogoFacebook />
                            </a>
                        </p>
                        <p>
                            <a>
                                <IoLogoTwitter />
                            </a>
                        </p>
                        <p>
                            <a>
                                <IoLogoLinkedin />
                            </a>
                        </p>
                        <p>
                            <a>
                                <IoLogoWhatsapp />
                            </a>
                        </p>
                    </div>
                </div>
            </InfoContainer>
            {links}
        </HeaderContainer>
    )
}






export default Header;
