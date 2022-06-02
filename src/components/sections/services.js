import React from "react";
import styled from "styled-components";
import { IoIosHammer, IoIosCheckmarkCircle } from "react-icons/io";
/**
 * Internal dependencies
 */


const StyledSection = styled.section`
`

const ExperienceContainer = styled.div`
    ${({ theme }) => theme.flexStart};
    margin-top: 80px;
    margin-bottom: 40px;


    > div{
        width: 25%;
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
    ${({ theme }) => theme.flexStart};
    justify-content: space-between;

    > div{
      text-align: center;
      width: 50%;

      h3{
        margin-top: 40px;
        margin-bottom: 30px;
        font-weight: 600;
        font-size: 24px;
        text-align: start;
        color: var(--blue);
      }
    }

    svg{
      color: var(--orange);
      margin-right: 10px;
    }

    ul{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-left: 0;

      li{

        width: 50%;
        margin-bottom: 30px;
        font-weight: 600;
        display: flex;
        align-items: center;
      }

    }
   

`


export default () => {
  return (
    <StyledSection>
      <div className="header">
        {/* <h5 className="sub-heading">Por que nosotros?</h5> */}
        <h2 className="heading">Nuestros Servicios</h2>
      </div>
      <ExperienceContainer>
        {cardServices.map(({ imageSrc, title, description }, i) => (
          <div className="experiencie">
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
          <ul>
            <li>
              <IoIosCheckmarkCircle />
              Industria química
            </li>
            <li>
              <IoIosCheckmarkCircle />
              Industria química
            </li>
            <li>
              <IoIosCheckmarkCircle />
              Industria química
            </li>
            <li>
              <IoIosCheckmarkCircle />
              Industria química
            </li>
            <li>
              <IoIosCheckmarkCircle />
              Industria química
            </li>
          </ul>
        </div>
        <div>
          <h3>Ejecucion de soldaduras especiales en</h3>
          <ul>
            <li>
              <IoIosCheckmarkCircle />
              Industria química
            </li>
            <li>
              <IoIosCheckmarkCircle />
              Industria química
            </li>
            <li>
              <IoIosCheckmarkCircle />
              Industria química
            </li>
            <li>
              <IoIosCheckmarkCircle />
              Industria química
            </li>
          </ul>
        </div>
      </ServicesContainer>
    </StyledSection>
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