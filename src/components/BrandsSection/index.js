import { useAppContext } from '../../context/Context'
import Fade from 'react-reveal/Fade';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


/*   */

import LogoEstado from '../../assets/images/estado.webp';
import LogoCyanamid from '../../assets/images/cyanamid.webp';
import LogoFavareto from '../../assets/images/favareto.webp';
import LogoFranz from '../../assets/images/franz.webp';
import LogoGorina from '../../assets/images/gorina.webp';
import LogoIngse from '../../assets/images/ingse.webp';

/**
 * Internal dependencies
 */
import {
  SectionStyled,
  PartnersContainer,
  WrapperImage,
  ImageLogo,
  LineSpan,
  FlexEnd,
} from './BrandsElements'




export default () => {

  const { width } = useAppContext();



  const Brands = (
    <>
      <WrapperImage>
        <ImageLogo src={LogoEstado} style={{ height: '80px' }} />
      </WrapperImage>
      <WrapperImage>
        <ImageLogo src={LogoCyanamid} style={{ height: '120px' }} />
      </WrapperImage>

      <WrapperImage>
        <ImageLogo src={LogoFavareto} style={{ height: '50px' }} />
      </WrapperImage>

      <WrapperImage>
        <ImageLogo src={LogoFranz} style={{ height: '50px' }} />
      </WrapperImage>

      <WrapperImage>
        <ImageLogo src={LogoGorina} style={{ height: '80px' }} />
      </WrapperImage>
      <WrapperImage>
        <ImageLogo src={LogoIngse} style={{ height: '120px' }} />
      </WrapperImage>
    </>
  )


  return (
    <Fade right>
      <SectionStyled id="clients">
        <PartnersContainer>
          <div className="featured">
            <h2>Nuestros Clientes <LineSpan /></h2>
          </div>
          <FlexEnd>
            {
              width <= 768 &&
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
                    <WrapperImage>
                      <ImageLogo src={LogoEstado} style={{ height: '80px' }} />
                    </WrapperImage>
                  </SwiperSlide>

                  <SwiperSlide>
                    <WrapperImage>
                      <ImageLogo src={LogoCyanamid} style={{ height: '120px' }} />
                    </WrapperImage>
                  </SwiperSlide>

                  <SwiperSlide>
                    <WrapperImage>
                      <ImageLogo src={LogoFavareto} style={{ height: '50px' }} />
                    </WrapperImage>
                  </SwiperSlide>

                  <SwiperSlide>
                    <WrapperImage>
                      <ImageLogo src={LogoFranz} style={{ height: '50px' }} />
                    </WrapperImage>
                  </SwiperSlide>
                  <SwiperSlide>
                    <WrapperImage>
                      <ImageLogo src={LogoGorina} style={{ height: '80px' }} />
                    </WrapperImage>
                  </SwiperSlide>
                  <SwiperSlide>
                    <WrapperImage>
                      <ImageLogo src={LogoIngse} style={{ height: '120px' }} />
                    </WrapperImage>
                  </SwiperSlide>
                </Swiper>
              ) ||
              <>
                <WrapperImage>
                  <ImageLogo src={LogoEstado} style={{ height: '80px' }} />
                </WrapperImage>
                <WrapperImage>
                  <ImageLogo src={LogoCyanamid} style={{ height: '120px' }} />
                </WrapperImage>

                <WrapperImage>
                  <ImageLogo src={LogoFavareto} style={{ height: '50px' }} />
                </WrapperImage>

                <WrapperImage>
                  <ImageLogo src={LogoFranz} style={{ height: '50px' }} />
                </WrapperImage>

                <WrapperImage>
                  <ImageLogo src={LogoGorina} style={{ height: '80px' }} />
                </WrapperImage>
                <WrapperImage>
                  <ImageLogo src={LogoIngse} style={{ height: '120px' }} />
                </WrapperImage>
              </>
            }
          </FlexEnd>
        </PartnersContainer>
      </SectionStyled>
    </Fade >
  );
};


// https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2021/03/logo-2.svg

