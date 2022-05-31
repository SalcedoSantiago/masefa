import React from "react";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";
/**
 * Internal dependencies
 */


const StyledSection = styled.section`
  
`

const Columns = styled.div`
  ${({ theme }) => theme.flexCenter};
`

const FeatureCotainer = styled.div`
  padding: 25px 25px 55px;
  border: none;
  width: 100%;
  box-shadow: 0 0 45px -10px rgb(93 114 128 / 15%);
    transition: background .3s,border .3s,border-radius .3s, box-shadow .3s;
    margin: 20px;

  @media (min-width: 768px) {
      width: calc(50% - 3rem);
  }

  @media (min-width: 1024px) {
      width: calc(33% - 3rem);
  }

  div{
    margin: 0;
    @media (min-width: 768px) {
      /* margin-right: 20px; */
    }
    svg{
      display: flex;
      margin: 0 auto;
      margin-bottom: 10px;
      margin-top: 10px;
      width: 50px;
      height: 50px;
      color:#ff6c00;
    }
  }

  h3{
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.44em;
    text-align: center;
    font-size: 1.3333333333333rem;
    text-transform: capitalize;
  }

  p{
    font-size: var(--fz-sm);
    line-height: 1.643em;
    text-align: center;
    margin: 0 20px;

    @media (min-width: 768px) {
      margin: 0;
    }
  }
`


export default () => {
  return (
    <StyledSection>
      <div className="header">
        {/* <h5 className="sub-heading">Por que nosotros?</h5> */}
        <h2 className="test-heading">Nuestros Servicios</h2>
      </div>
      <Columns>
        {cardServices.map(({ imageSrc, title, description }, i) => (
          <FeatureCotainer key={i}>
            <div className="columns">
              <div>
                <FaClock className="icon" />
              </div>
              <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </FeatureCotainer>
        ))}
      </Columns>
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
  {
    imageSrc: 'https://img2.freepng.es/20180328/gge/kisspng-check-mark-cheque-clip-art-check-5abb46ab8338c7.0866514015222227635375.jpg',
    title: "Fast",
    description: "We provide discounts on the most popular services and on the season services, so you could definitely receive any help without delay."
  },
  {
    imageSrc: 'https://img2.freepng.es/20180328/gge/kisspng-check-mark-cheque-clip-art-check-5abb46ab8338c7.0866514015222227635375.jpg',
    title: "Easy",
    description: "We provide discounts on the most popular services and on the season services, so you could definitely receive any help without delay."
  }
];