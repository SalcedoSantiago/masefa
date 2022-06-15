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
import { FeaturedCards } from './Data';

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
                                    {FeaturedCards.map(({ icon, title, desc }, index) =>
                                        <SwiperSlide key={index}>
                                            <FeaturedCard>
                                                <IconWrapper>
                                                    <i className={`fa-solid fa-${icon}`}></i>
                                                </IconWrapper>
                                                <CardH2>{title}</CardH2>
                                                <CardP>{desc}</CardP>
                                            </FeaturedCard>
                                        </SwiperSlide>
                                    )
                                    }
                                </Swiper>
                            )
                            ||
                            (
                                <>
                                    {FeaturedCards.map(({ icon, title, desc }, index) =>
                                        <FeaturedCard key={index}>
                                            <IconWrapper>
                                                <i className={`fa-solid fa-${icon}`}></i>
                                            </IconWrapper>
                                            <CardH2>{title}</CardH2>
                                            <CardP>{desc}</CardP>
                                        </FeaturedCard>
                                    )
                                    }
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


