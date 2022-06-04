import React from "react";
import styled from "styled-components";
import { IoIosHammer, IoIosCheckmarkCircle } from "react-icons/io";
import Fade from 'react-reveal/Fade';
/**
 * Internal dependencies
 */


const StyledSection = styled.section`
`

const ExperienceContainer = styled.div`
    ${({ theme }) => theme.flexStart};
    margin-top: 80px;
    margin-bottom: 40px;
    padding: 0 2rem;


    > div{
        width: 50%;
        margin-bottom: 40px;

        @media (min-width: 1024px) {
            width: calc(25% - .5rem);
        }
    }

    .experiencie{
        /* padding-right: 40px; */
        text-align: center;

        p,
        h4,
        .counter
        {
            text-align: inherit;
        }

      svg{
        width: 40px;
        height: 40px;
        color: var(--orange);
        margin-bottom: 10px;
        width: 20%;
        height: 20%;
      }

        h4{
            color: var(--black);
            font-size: 18px;
            font-weight: 600;
            margin: 0;
            line-height: 2.1;
            text-transform: capitalize;
        }
        
    }
`

const ServicesContainer = styled.div`
    margin-top: 50px;
    padding: 0 2rem;
    ${({ theme }) => theme.flexStart};
    justify-content: space-between;

    > div{
      text-align: center;
      width: 100%;

        @media (min-width: 1024px) {
            width: calc(50% - .5rem);
        }

      h3{
        margin-top: 40px;
        margin-bottom: 30px;
        font-weight: 600;
        font-size: 24px;
        text-align: center;
        color: var(--blue);
        line-height: 1.5;
      }
    }

    svg{
      color: var(--orange);
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }

    .columns{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-left: 0;


      > div {
        width: 50%;
        margin-bottom: 30px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 500px) {
            width: calc(100% - .5rem);
        }

      }

    }
   

`


export default () => {
  return (
    <Fade>
      <StyledSection>
        <div className="header">
          <h2 className="heading">Nuestros Servicios</h2>
        </div>
        <ExperienceContainer>
          {cardServices.map(({ imageSrc, title, description }, i) => (
            <div className="experiencie" key={i}>
              <IoIosHammer />
              <div className="content">
                <h4>Running Project</h4>
              </div>
            </div>
          ))}
        </ExperienceContainer>
        <ServicesContainer>
          <div>
            <h3>El rubro donde nos desarrollamos</h3>
            <div className="columns">
              <div>
                <IoIosCheckmarkCircle className="check-icon" />
                Industria química
              </div>
              <div>
                <IoIosCheckmarkCircle className="check-icon" />
                Industria química
              </div>
              <div>
                <IoIosCheckmarkCircle className="check-icon" />
                Industria química
              </div>
              <div>
                <IoIosCheckmarkCircle className="check-icon" />
                Industria química
              </div>
              <div>
                <IoIosCheckmarkCircle className="check-icon" />
                Industria química
              </div>
            </div>
          </div>
          <div>
            <h3>Ejecucion de soldaduras especiales en</h3>
            <div className="columns">
              <div>
                <IoIosCheckmarkCircle className="check-icon" />
                Industria química
              </div>
              <div>
                <IoIosCheckmarkCircle className="check-icon" />
                Industria química
              </div>
              <div>
                <IoIosCheckmarkCircle className="check-icon" />
                Industria química
              </div>
              <div>
                <IoIosCheckmarkCircle className="check-icon" />
                Industria química
              </div>
            </div>
          </div>
        </ServicesContainer>
      </StyledSection>
    </Fade>
  );
};


const cardServices = [
  {
    imageSrc: 'https://img2.freepng.es/20180328/gge/kisspng-check-mark-cheque-clip-art-check-5abb46ab8338c7.0866514015222227635375.jpg',
    title: "Secure",
    description: "We provide discounts on the most popular services and on the season services, so you could definitely receive any help without delay."
  },
  {
    imageSrc: 'https://img2.freepng.es/20180328/gge/kisspng-check-mark-cheque-clip-art-check-5abb46ab8338c7.0866514015222227635375.jpg',
    title: "24/7 Support",
    description: "We provide discounts on the most popular services and on the season services, so you could definitely receive any help without delay."
  },
  {
    imageSrc: 'https://img2.freepng.es/20180328/gge/kisspng-check-mark-cheque-clip-art-check-5abb46ab8338c7.0866514015222227635375.jpg',
    title: "Customizable",
    description: "We provide discounts on the most popular services and on the season services, so you could definitely receive any help without delay."
  },
  {
    imageSrc: 'https://img2.freepng.es/20180328/gge/kisspng-check-mark-cheque-clip-art-check-5abb46ab8338c7.0866514015222227635375.jpg',
    title: "Reliable",
    description: "We provide discounts on the most popular services and on the season services, so you could definitely receive any help without delay."
  },
];