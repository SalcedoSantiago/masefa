import { useAppContext } from '../../context/Context'
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

const Featured = () => {
    const { width } = useAppContext();

    return (
        <Fade right>
            <BgFeaturedContainer id="featured">
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
                                                <i class="fa-solid fa-envelope-circle-check"></i>
                                            </IconWrapper>
                                            <CardH2>Soporte 24/7</CardH2>
                                            <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardP>
                                        </FeaturedCard>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <FeaturedCard>
                                            <IconWrapper>
                                                <i class="fa-solid fa-envelope-circle-check"></i>
                                            </IconWrapper>
                                            <CardH2>Soporte 24/7</CardH2>
                                            <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardP>
                                        </FeaturedCard>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <FeaturedCard>
                                            <IconWrapper>
                                                <i class="fa-solid fa-envelope-circle-check"></i>
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
                                            <i class="fa-solid fa-envelope-circle-check"></i>
                                        </IconWrapper>
                                        <CardH2>Soporte 24/7</CardH2>
                                        <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardP>
                                    </FeaturedCard>
                                    <FeaturedCard>
                                        <IconWrapper>
                                            <i class="fa-solid fa-envelope-circle-check"></i>
                                        </IconWrapper>
                                        <CardH2>Soporte 24/7</CardH2>
                                        <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit</CardP>
                                    </FeaturedCard>
                                    <FeaturedCard>
                                        <IconWrapper>
                                            <i class="fa-solid fa-envelope-circle-check"></i>
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


