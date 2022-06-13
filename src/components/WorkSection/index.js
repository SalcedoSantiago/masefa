import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useState, useEffect } from 'react';

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
import { WORKS } from './Data';
import { Heading } from '../heading';


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


const Work = () => {

    const { width } = useWindowDimensions();


    return (
        <Fade>
            <WorkContainer>
                <Heading>Nuestros Proyectos</Heading>
                <Swiper
                    spaceBetween={25}
                    slidesPerView={ width <= 480 && 2 ||  width <= 768 && 3 || width <= 768 && 4 || 1 }
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