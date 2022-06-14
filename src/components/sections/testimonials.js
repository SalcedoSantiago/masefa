import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';



import LogoEstado from '../../assets/images/estado.webp';
import LogoCyanamid from '../../assets/images/cyanamid.webp';
import LogoFavareto from '../../assets/images/favareto.webp';
import LogoFranz from '../../assets/images/franz.webp';
import LogoGorina from '../../assets/images/gorina.webp';
import LogoIngse from '../../assets/images/ingse.webp';

/**
 * Internal dependencies
 */


const SectionStyled = styled.section`
  padding: 60px 0;
  max-width: 1200px;
  margin: 0 auto;
  `


const PartnersContainer = styled.div`
  display: flex;
  align-items: center;

  .featured{

    h2{
      font-size: 20px;
      padding-right: 10px;
      color: var(--blue);
      font-weight: 700;
    }
  }
`

const WrapperImage = styled.div`
  margin-right: 15px;
  margin-left: 15px;

`

export const ImageLogo = styled.img`
  max-height: 100px;
`


export const LineSpan = styled.span`
  height: 100%;
  border-left: 1px solid #ccc;
  margin-left: 30px;

`

const FlexEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 1;
`

export default () => {
  return (
    <Fade>
      <SectionStyled>
        <PartnersContainer>
          <div className="featured">
            <h2>Nuestros Clientes <LineSpan /></h2>
          </div>
          <FlexEnd>

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
          </FlexEnd>

        </PartnersContainer>

      </SectionStyled>
    </Fade >
  );
};


// https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2021/03/logo-2.svg

