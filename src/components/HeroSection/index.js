import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import slide1 from '../../assets/images/slide-1.png'
import slide2 from '../../assets/images/slide-2.jpg'
import slide3 from '../../assets/images/slide-3.png'

import Fade from 'react-reveal/Fade';


import {
    HeroContainer,
    StyledSlider,
    BgImageSlider,
    HeroInfoContainer,
    HeroInfoWrapper,
    HeroInfoContent,
    HeroH1,
    HeroSubHeading,
    SmartText,
    HeroInfoText,
    BtnWrapper
} from './HeroElements'
import { Button } from '../button';


const Hero = () => {
    return (
        <Fade>
            <HeroContainer>
                <StyledSlider>
                    <Slider>
                        {content.map((item, index) => (
                            <BgImageSlider
                                key={index}
                                imageUrl={item}
                            >
                            </BgImageSlider>
                        ))}
                    </Slider>
                    <HeroInfoContainer>
                        <HeroInfoWrapper>
                            <HeroInfoContent>
                                <HeroH1>
                                    Montajes industriales
                                </HeroH1>
                                <HeroSubHeading>
                                    TEL: <a>(011) 342535542</a>
                                </HeroSubHeading>
                                <SmartText>
                                    The smartest working shop in the steel business
                                </SmartText>
                                <HeroInfoText>
                                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </HeroInfoText>
                                <BtnWrapper>
                                    <Button
                                        primary="true"
                                        big="true"
                                        fontbig="true"
                                        to="contact"
                                    >
                                        Contact us
                                    </Button>
                                    <Button
                                        primary="true"
                                        big="true"
                                        fontbig="true"
                                        to="about"
                                    >
                                        About us
                                    </Button>
                                </BtnWrapper>
                            </HeroInfoContent>
                        </HeroInfoWrapper>
                    </HeroInfoContainer>
                </StyledSlider>
            </HeroContainer >
        </Fade>
    );
};

const content = [
    slide1,
    slide2,
    slide3,
];

export default Hero;