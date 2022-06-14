import { useState, useEffect } from 'react';
/**
 * External dependencies
 */

import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

/**
 * Internal dependencies
 */
import { Heading } from '../heading';
import {
    BgFeaturedContainer,
    FeaturedContainer,
    FeaturedWrapper,
    FeaturedCard,
    IconWrapper,
    CardH2,
    CardP
} from './FeaturedElements';
import { cards } from './Data';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const Featured = () => {
    const { width } = useWindowDimensions();


    return (
        <Fade>
            <BgFeaturedContainer>
                <FeaturedContainer>
                    <Heading white="true">Soluciones que ofrecemos</Heading>
                    <FeaturedWrapper>
                        {width <= 768 &&
                            (
                                <Swiper
                                    slidesPerView={1}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <FeaturedCard>
                                            <IconWrapper>
                                                <svg xmlns="http://www.w3.org/2000/svg"><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>
                                            </IconWrapper>
                                            <CardH2>Soporte 24/7</CardH2>
                                            <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardP>
                                        </FeaturedCard>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <FeaturedCard>
                                            <IconWrapper>
                                                i
                                            </IconWrapper>
                                            <CardH2>Soporte 24/7</CardH2>
                                            <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardP>
                                        </FeaturedCard>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <FeaturedCard>
                                            <IconWrapper>
                                                i
                                            </IconWrapper>
                                            <CardH2>Soporte 24/7</CardH2>
                                            <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardP>
                                        </FeaturedCard>
                                    </SwiperSlide>
                                </Swiper>
                            )
                            ||
                            (
                                <>
                                    <FeaturedCard>
                                        <IconWrapper>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53"><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>
                                        </IconWrapper>
                                        <CardH2>Soporte 24/7</CardH2>
                                        <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardP>
                                    </FeaturedCard>
                                    <FeaturedCard>
                                        <IconWrapper>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" ><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>
                                        </IconWrapper>
                                        <CardH2>Soporte 24/7</CardH2>
                                        <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardP>
                                    </FeaturedCard>
                                    <FeaturedCard>
                                        <IconWrapper>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53"><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>
                                        </IconWrapper>
                                        <CardH2>Soporte 24/7</CardH2>
                                        <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardP>
                                    </FeaturedCard>
                                </>
                            )
                        }
                    </FeaturedWrapper>
                </FeaturedContainer>
            </BgFeaturedContainer >
        </Fade >
    )
}

export default Featured


