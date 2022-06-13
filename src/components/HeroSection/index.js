import Fade from 'react-reveal/Fade';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
/**
 * Internal dependencies
 */

import slide1 from '../../assets/images/slide-1.png'
import slide2 from '../../assets/images/slide-2.jpg'
import slide3 from '../../assets/images/slide-3.png'
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
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {content.map((item, index) => (
                            <SwiperSlide
                                key={index}
                            >
                                <BgImageSlider
                                    imageUrl={item}
                                >
                                </BgImageSlider>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <HeroInfoContainer>
                        <HeroInfoContent>
                            <HeroH1>
                              Servicios a su servicio
                            </HeroH1>
                            {/* <HeroSubHeading>
                                TEL: <a> (011) 342535542</a>
                            </HeroSubHeading> */}
                            <SmartText>
                                Una empresa de oficio integral
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