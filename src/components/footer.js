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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    >div{
        width: calc(25% - 2rem)
    }

    .links{
        a{
            display: block;
            svg{
                width: 30px;
                height: 30px;
                padding:20px;
                background-color: var(--orange);
                
                fill{
                    color: #fff;
                }
            }
        }
    }
`

const Column = styled.div`
    width: calc(25% - 1rem);
`

const Logo = styled.img`

`


const LinksContainer = styled.ul`

`

const Link = styled.li`
    color: #fff;
`


const Footer = () => {

    return (
        <StyledFooter>
            <FooterContainer>
                <Column>
                    <Logo />
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
                    <h3>Services</h3>
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
                    <h3>Services</h3>
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
                    <h3>Quick Contact</h3>
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

            </FooterContainer>
        </StyledFooter>
    );
};


export default Footer;