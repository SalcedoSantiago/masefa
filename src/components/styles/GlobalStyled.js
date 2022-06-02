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


    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        background-color: #FFF;
        font-family: "Montserrat", "Poppins", sans-serif;
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
        color: var(--black);
        font-size: 2.3333333333333rem;
        font-weight: 500;
        text-transform: capitalize;
        font-weight: 800;
        text-align: center;

        &-special{
            display: block;
            color: var(--blue);
        }
    }


    .test-heading{
        text-align: start;
        font-size: 38px;
        position: relative;
        margin-left:  20px;
        padding-left: 20px;
        color: #00235A;
        font-weight: 700;

        &::before{
            content: "";
            position: absolute;
            width: 3px;
            height: 100%;
            top: 0;
            left: 0;
            background-color: var(--orange);
        }
    }
    
   

    .sub-heading{
        margin: 0;
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 700;
        color: var(--orange);
    }

    p {
        color: #7A7A7A;
        font-family: "Poppins", Sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
    }


    img{
        width: 100%;
    }


    ul{
        padding: 0;
        li{
            ${(({ theme }) => theme.listReset)};
        }
    }


`


export default GlobalStyle;
