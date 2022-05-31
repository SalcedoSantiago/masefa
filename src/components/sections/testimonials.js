import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";

/**
 * Internal dependencies
 */

const Columns = styled.div`
  margin-top: 80px;
  ${({ theme }) => theme.flexCenter};
`

const StyledSection = styled.section`
`

const FeatureCotainer = styled.div`
  border: none;
  width: 100%;
  box-shadow: 0 0 35px 0 rgb(93 114 128 / 15%);
  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
  margin: -20px 20px 40px;
  padding: 30px;

    &.featured{
      margin: 20px;
    }

  @media (min-width: 768px) {
      width: calc(50% - 2rem);
  }

  @media (min-width: 1024px) {
      width: calc(30% - 2rem);
  }

  .columns{
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  div{
    margin: 0;
    @media (min-width: 768px) {
      /* margin-right: 20px; */
    }
    svg{
      margin-right: auto;
      margin-bottom: 10px;
      width: 40px;
      height: 50px;
      color: var(--orange);
    }
  }

  p{
    font-size: 12px;
    line-height: 1.643em;
    text-align: start;
    margin: 0 20px;
    margin-top: 1.25rem;
    color: rgba(113,128,150,1);
    font-weight: 500;
    line-height: 2;

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  .name{
    display: block;
    text-align: start;
    margin-top: 1rem;
    color: rgba(26,32,44,1);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
  }

  .company{
    font-size: 14px;
  }
`




export default () => {
  return (
    <StyledSection>
      <div className="header">
        <h3 className="sub-heading">Testimonials</h3>
        <h2 className="heading">Que dicen los clientes?</h2>
      </div>
      <Columns>
        {cardServices.map(({ imageSrc, title, description }, i) => (
          <FeatureCotainer key={i} className={i == 1 || i == 4 ? 'featured' : ''}>
            <div className="columns">
              <div className="card">
                <FaQuoteLeft />
                <div className="content">
                  <p>"{description}"</p>
                  <span className="name">-Lorem ipsum</span>
                  <span className="company">google company</span>
                </div>
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