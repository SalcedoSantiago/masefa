import React from "react";
import styled from "styled-components";

import { IoIosPin } from 'react-icons/io'

// import { FaFacebookSquare } from "react-icons/fa";

const StyledFooter = styled.footer`
    background-color: var(--blue);
    padding-top: 120px;
    padding-bottom: 120px;
`;


const FooterContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;

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

`

const Column = styled.div`
    width: calc(25% - 1rem);
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
                </Columns>



            </FooterContainer>
        </StyledFooter>
    );
};


export default Footer;