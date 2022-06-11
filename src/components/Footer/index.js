import Facebook from "../../assets/icons/facebook.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";


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
                            <img src={Facebook} />
                        </IconWrapper>
                        <IconWrapper>
                            <img src={Linkedin} />
                        </IconWrapper>
                        <IconWrapper>
                            <img src={Instagram} />
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