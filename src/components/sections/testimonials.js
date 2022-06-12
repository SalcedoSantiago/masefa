import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
/**
 * Internal dependencies
 */


const SectionStyled = styled.section`
  padding: 60px 0;
  max-width: 1280px;
  margin: 0 auto

  `


const PartnersContainer = styled.div`
  display: flex;
  align-items: center;

  .featured{
    border-style: solid;
    border-width: 0px 1px 0px 0px;
    border-color: #ccc;

    h2{
      font-size: 20px;
      padding-right: 10px;
      color: var(--blue);
      font-weight: 700;
    }
  }
`




export default () => {
  return (
    <Fade>
      <SectionStyled>
        <PartnersContainer>
          <div className="featured">
            <h2>Industry Partners</h2>
          </div>
          <div>
            <img src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2021/03/logo-1.svg" />
          </div>
          <div>
            <img src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2021/03/logo-2.svg" />
          </div>

          <div>
            <img src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2021/03/logo-3.svg" />
          </div>

          <div>
            <img src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2021/03/logo-4.svg" />
          </div>

          <div>
            <img src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2021/03/logo-2.svg" />
          </div>
          <div>
            <img src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2021/03/logo-3.svg" />
          </div>
        </PartnersContainer>
      </SectionStyled>
    </Fade>
  );
};


// https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2021/03/logo-2.svg

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