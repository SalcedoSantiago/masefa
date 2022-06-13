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
import 'boxicons'




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
                            <box-icon type='logo' name='facebook'></box-icon>
                        </IconWrapper>
                        <IconWrapper>
                            <box-icon name='linkedin' type='logo'></box-icon>
                        </IconWrapper>
                        <IconWrapper>
                            <box-icon name='instagram' type='logo'></box-icon>
                        </IconWrapper>
                    </IconsContainer>
                </FooterAbout>
                <Row>
                    <Column>
                        <HeadingSection>About us</HeadingSection>
                        <Navigate>
                            <Link>Who are you?</Link>
                            <Link>Who are you?</Link>
                            <Link>Who are you?</Link>
                            <Link>Who are you?</Link>
                            <Link>Who are you?</Link>
                        </Navigate>
                    </Column>
                    <Column>
                        <HeadingSection>About us</HeadingSection>
                        <Navigate>
                            <Link>Healthly Food</Link>
                            <Link>Who are you?</Link>
                            <Link>Who are you?</Link>
                            <Link>Who are you?</Link>
                        </Navigate>
                    </Column>
                    <Column>
                        <HeadingSection>About us</HeadingSection>
                        <Navigate>
                            <Link>Who are you?</Link>
                            <Link>Who are you?</Link>
                            <Link>Who are you?</Link>
                            <Link>Who are you?</Link>
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