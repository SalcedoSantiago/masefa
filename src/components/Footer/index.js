import {
    FooterContainer,
    FooterWrapper,
    FooterAbout,
    LogoContainer,
    LogoLink,
    InfoUs,
    IconsContainer,
    IconWrapper,
    Column,
    Row,
    HeadingSection,
    Navigate,
    Link,
    SectionCopy,
    TextCopy
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterAbout>
                    <LogoContainer>
                        <LogoLink>MASEFA</LogoLink>
                    </LogoContainer>
                    <InfoUs>
                        Sufficient particular impossible by reasonable oh
                        expression is. Yet preference unpleasant.
                    </InfoUs>
                    <IconsContainer>
                        <IconWrapper>
                            <i class="fa-brands fa-facebook-f"></i>
                        </IconWrapper>
                        <IconWrapper>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </IconWrapper>
                        <IconWrapper>
                            <i class="fa-brands fa-instagram"></i>
                        </IconWrapper>
                    </IconsContainer>
                </FooterAbout>
                <Row>
                    <Column>
                        <HeadingSection>Nosotros</HeadingSection>
                        <Navigate>
                            <Link to="about">Quienes somos?</Link>
                            <Link to="featured">Descatado</Link>
                            <Link to="work">Obras</Link>
                            <Link to="services">Servicios</Link>
                            <Link to="clients">Clientes</Link>
                        </Navigate>
                    </Column>
                    <Column>
                        <HeadingSection>Servicios</HeadingSection>
                        <Navigate>
                            <Link to="contact">Secure</Link>
                            <Link to="contact">24/7 Support</Link>
                            <Link to="contact">Customizable</Link>
                            <Link to="contact">Running Projects</Link>
                        </Navigate>
                    </Column>
                    <Column>
                        <HeadingSection>FAQ</HeadingSection>
                        <Navigate>
                            <Link to="contact">Contacto</Link>
                            <Link to="contact">+112534456</Link>
                            <Link to="contact">masefa@gmail.com</Link>
                        </Navigate>
                    </Column>
                </Row>
            </FooterWrapper>
            <SectionCopy>
                <TextCopy>
                    @ Copyright Masefa. All right reserved
                </TextCopy>
            </SectionCopy>
        </FooterContainer>
    )
}




export default Footer;