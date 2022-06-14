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
                            i
                        </IconWrapper>
                        <IconWrapper>
                            i
                        </IconWrapper>
                        <IconWrapper>
                            i
                        </IconWrapper>
                    </IconsContainer>
                </FooterAbout>
                <Row>
                    <Column>
                        <HeadingSection>About us</HeadingSection>
                        <Navigate>
                            <Link to="contact">Who are you?</Link>
                            <Link to="contact">Who are you?</Link>
                            <Link to="contact">Who are you?</Link>
                            <Link to="contact">Who are you?</Link>
                            <Link to="contact">Who are you?</Link>
                        </Navigate>
                    </Column>
                    <Column>
                        <HeadingSection>About us</HeadingSection>
                        <Navigate>
                            <Link to="contact">Healthly Food</Link>
                            <Link to="contact">Who are you?</Link>
                            <Link to="contact">Who are you?</Link>
                            <Link to="contact">Who are you?</Link>
                        </Navigate>
                    </Column>
                    <Column>
                        <HeadingSection>About us</HeadingSection>
                        <Navigate>
                            <Link to="contact">Who are you?</Link>
                            <Link to="contact">Who are you?</Link>
                            <Link to="contact">Who are you?</Link>
                            <Link to="contact">Who are you?</Link>
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