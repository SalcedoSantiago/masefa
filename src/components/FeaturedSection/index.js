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
                                    {cards.map(({ title, description, imageSrc }, index) => (
                                        <SwiperSlide key={index}>
                                            <FeaturedCard>
                                                <IconWrapper>
                                                    test
                                                </IconWrapper>
                                                <CardH2>{title}</CardH2>
                                                <CardP>{description}</CardP>
                                            </FeaturedCard>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>)
                            ||
                            (
                                cards.map(({ title, description, imageSrc }, index) => (
                                    <FeaturedCard key={index}>
                                        <IconWrapper>
                                            test
                                        </IconWrapper>
                                        <CardH2>{title}</CardH2>
                                        <CardP>{description}</CardP>
                                    </FeaturedCard>
                                ))
                            )
                        }
                    </FeaturedWrapper>
                </FeaturedContainer>
            </BgFeaturedContainer >
        </Fade >
    )
}

export default Featured


