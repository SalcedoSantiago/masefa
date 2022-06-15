import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useAppContext } from '../../context/Context'

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
    Client,
    Year,
    BtnWrapper
} from './WorkElements';
import { WORKS } from './Data';
import { Heading } from '../heading';


const Work = () => {
    const { width } = useAppContext();

    return (
        <Fade right>
            <WorkContainer id="work">
                <Heading>Obras Destacadas</Heading>
                <Swiper
                    spaceBetween={25}
                    slidesPerView={ width <= 480 && 2 ||  width <= 768 && 3 || width > 768 && 4 || 1 }
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
                                    <Client>
                                        Cliente: YPF
                                    </Client>
                                    <Year>
                                        Año: 2004
                                    </Year>
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