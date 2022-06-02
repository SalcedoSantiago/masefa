import React from 'react'
import styled from "styled-components";



const DesktopNavLinks = styled.nav`
    display: flex;
    flex-wrap: wrap;
    min-height: 20vh;
    a{
        text-decoration: none;
        color: var(--white);
        margin-right: 15px;
    }
`;

const LogoLink = styled.a`
  ${({ theme }) => theme.flexCenter};
    flex-wrap: wrap;

  img {
  }
`;

const Header = () => {

    const links = (
        <NavLinksContainer key={1}>
            <NavLinks>
                <a href="/#">Home</a>
                <a href="/#">Sobre Nosotros</a>
                <a href="/#">Servcios</a>
                <a href="/#">Contacto</a>
            </NavLinks>
        </NavLinksContainer>
    )

    const logoLink = (
        <LogoLink className='flex' href="/">
            <img id="logo" src="https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/07/logo.png" alt="test" />
        </LogoLink>
    )

    return (
        <HeaderContainer>
            <DesktopNavLinks>
                <ContainerMxlarge>
                    {logoLink}
                    <ActionContainer>
                        <Action>
                            <h2>(+1) 555 234-8765</h2>
                            <span> Call us </span>
                        </Action>
                        <Action>
                            <h2>(+1) 555 234-8765</h2>
                            <span>Mail Us Now </span>
                        </Action>
                        <Action>
                            <PrimaryButton>Contact us</PrimaryButton>
                        </Action>
                    </ActionContainer>
                </ContainerMxlarge>
                {links}
            </DesktopNavLinks>
            {/* mobile here */}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    min-height: 20vh;
`

const PrimaryButton = styled.button`
 ${({ theme }) => theme.button};
`

const ContainerMxlarge = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 0;
`

const NavLinksContainer = styled.div`
    margin-top: auto;
    background-color:#00235a;
    padding: 1.5rem 0;
    width: 100%;
`;

const NavLinks = styled.div`
    margin: 0 auto;
    max-width: 1280px;
`;

const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: end;
    align-items: center;
    gap: 10px;
    width: 75%;
`

const Action = styled.div`
    color :black;
    display: inline-block;
    text-align: left;
    position: relative;
    padding-left: 36px;
    margin-left: 50px;

    h2{
        font-weight: 700;
        font-size: 20px;

        &::before{
            content: "";
            position: absolute;
            width: 1.5rem;
            height: 2px;
            background-color: #ff6c00;
            left: -10px;
            top: 15px;
        }

    }
    span{
        color: #7777;
        font-size: 16px;
    }
`


export default Header;
