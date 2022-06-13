import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

/**
 * Internal dependencies
 */
import {
    WorkContainer,
    CardRow,
    CardContainer,
    Card,
    BgImage,
    InfoContainer,
    InfoH2,
    InfoP,
    BtnWrapper
} from './WorkElements';
import { Button } from '../button';
import { WORKS } from './Data';
import { Heading } from '../heading';


const Work = () => {
    return (
        <Fade>
            <WorkContainer>
                <Heading>Nuestros Proyectos</Heading>
                <Swiper
                    spaceBetween={25}
                    slidesPerView={4}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {WORKS.map((card, index) => (
                        <SwiperSlide key={index} href={card.url}>
                            <Card href={card.url}>
                                <BgImage imageSrc={card.imageSrc}>
                                </BgImage>
                                <InfoContainer>
                                    <InfoH2>
                                        Unidades Compresoras Loma La Lata
                                    </InfoH2>
                                    <InfoP>
                                        Cliente: YPF
                                    </InfoP>
                                    <InfoP>
                                        Año: 2004
                                    </InfoP>
                                </InfoContainer>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <BtnWrapper>
                    {/* <Button to="show" primary="true">Show More</Button> */}
                </BtnWrapper>
            </WorkContainer>
        </Fade>
    )
}

export default Work