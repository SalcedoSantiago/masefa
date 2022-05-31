import { createGlobalStyle } from 'styled-components';

import variables from './variables';


const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    ${variables};

    html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
    }

    #root{
        width: 100vw;
        height: 100vh;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        background-color: #F6F6F6;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        color: var(--slate);
        font-family: var(--font-sans);
        font-size: var(--fz-xl);
        line-height: 1.3;

        @media (max-width: 480px) {
        font-size: var(--fz-lg);
        }
  }
    
    section {
    margin: 0 auto;
    padding: 125px 0 100px;
    max-width: 1280px;

        @media (max-width: 768px) {
        padding: 80px 0;
        }

        @media (max-width: 480px) {
        padding: 60px 0;
        }
    }

    main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

        @media (max-width: 1080px) {
            padding: 200px 100px;
        }
        @media (max-width: 768px) {
            padding: 150px 50px;
        }
        @media (max-width: 480px) {
            padding: 125px 25px;
        }

        &.fillHeight {
            padding: 0 150px;

            @media (max-width: 1080px) {
                padding: 0 100px;
            }

            @media (max-width: 768px) {
                padding: 0 50px;
            }
            
            @media (max-width: 480px) {
                padding: 0 25px;
            }
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5{
        font-family: "Montserrat", Sans-serif;
        margin: 0 0 10px 0;
        font-weight: 600;
        color: var(--black);
        line-height: 1.1;
    }

    .header{
        text-align: center;
        margin-bottom: 60px;
    }

    .heading {
        margin: 0;
        color: var(--black);
        font-weight: 500;
        text-transform: capitalize;
        font-weight: 800;
        text-align: center;
        font-size: clamp(40px, 3vw, 80px);
        margin-bottom: 15px;
    }
    
    .sub-heading{
        margin: 0;
        font-size: 18px;
        color: #79787F;
    }

    p {
        color: #79787F;
        font-size: 16px;
        line-height: 1.8;

        & > a {
        /* ${({ theme }) => theme.inlineLink}; */
        }
    }


    img{
        width: 100%;
    }


`


export default GlobalStyle;
