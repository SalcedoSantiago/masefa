import React from "react";
import styled from "styled-components";

import { IoIosPin } from 'react-icons/io'

// import { FaFacebookSquare } from "react-icons/fa";

const StyledFooter = styled.footer`
    background-color: var(--blue);
    padding-top: 120px;
`;

const FooterContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding:0 2rem;

    .links{
        display: flex;
        align-items: center;
        a{
            display: block;
            margin-right: 10px;
            svg{
                width: 30px;
                height: 30px;
                padding: 5px;
                border-radius: 5px;
                background-color: var(--orange);
                
                path{
                    fill: #fff;
                }
            }
        }
    }
`

const Columns = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 40px;

`

const Column = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: calc(33% - 1rem);
        &:first-of-type{
            width: calc(100% - 1rem);
        }
    }

    @media (min-width: 1024px) {
        &:first-of-type{
            width: calc(25% - 1rem);
        }
        width: calc(25% - 1rem);
    }
`


const Heading = styled.h3`
    color: #fff;
`



const LinksContainer = styled.ul`
`

const Link = styled.li`
    list-style: none;

    color: #fff;
`

const LogoLink = styled(Link)`
    img{
        max-width: 130px;
    }
`

const LineDivider = styled.div`
    margin: 20px 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-bottom-width: 2px;
    border-color: rgba(45, 55, 72, 1);
`

const Copyright = styled.div`
    display: flex;
    justify-content: space-between;
    
    
    p{
        color: #fff;
    }
`

const Footer = () => {

    return (
        <StyledFooter>
            <FooterContainer>
                <Columns>
                    <Column>
                        <LogoLink>
                            <a>
                                <img id="logo" src="https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/07/logo.png" alt="test" />
                            </a>
                        </LogoLink>
                        <p>
                            Sedut perspiciatis unde omnis iste natus error sitlutem acc usantium doloremque
                        </p>
                        <div className="links">
                            <a>
                                <IoIosPin />
                            </a>
                            <a>
                                <IoIosPin />
                            </a>
                            <a>
                                <IoIosPin />
                            </a>
                            <a>
                                <IoIosPin />
                            </a>
                        </div>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <LinksContainer>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                        </LinksContainer>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <LinksContainer>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                        </LinksContainer>
                    </Column>
                    <Column>
                        <Heading>Quick Contact</Heading>
                        <LinksContainer>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                            <Link>
                                <a>Primer servicio</a>
                            </Link>
                        </LinksContainer>
                    </Column>
                </Columns>
                <LineDivider></LineDivider>

                <Copyright>
                    <p>© Copyright 2020, Treact Inc.</p>
                    <p>An Internet Company.</p>
                </Copyright>
            </FooterContainer>
        </StyledFooter>
    );
};


export default Footer;