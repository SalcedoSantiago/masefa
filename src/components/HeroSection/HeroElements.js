import styled from 'styled-components';
import { css } from 'styled-components';


export const HeroContainer = styled.div`
    height: 650px;
    max-height: 650px;
    
    background-color: var(--white);
    overflow: hidden;
`

export const StyledSlider = styled.div`
    height: 650px;
    max-height: 650px;

    position: relative;

    > div{
        height: 100%;
        .previousButton,
        .nextButton
        {
            z-index: 2;
            svg polygon{
                fill: var(--white);
            }
        }
    }
`
export const BgImageSlider = styled.div`
    height: 650px;
    max-height: 650px;

    ${({ imageUrl }) => css`
        background-image: url(${imageUrl});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    `}
`


export const HeroInfoContainer = styled.div`
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    
`

export const HeroInfoWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 1280px;
    padding: 0 2rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
`

export const HeroInfoContent = styled.div`
    background-color: #00000094;
    padding: 30px 50px;
    max-width: 800px;
    border-radius: 3px;
`;

export const HeroH1 = styled.div`
    font-size: 48px;
    font-family: "Montserrat";
    font-weight: 700;
    color: var(--white);
    line-height: 1.5;

    @media screen and (max-width: 760px){
        font-size: 40px;
        text-align: center;
    }
    @media screen and (max-width: 480px){
        text-align: center;
        font-size: 38px;
    }
`

export const HeroSubHeading = styled.h2`
    font-size: 44px;
    font-family: "Montserrat";
    font-weight: 700;
    color: var(--white);
    line-height: 1.5;

    a{
        color: #f7b02d;
        cursor: pointer;
        &:hover{
            text-decoration-line: underline;
        }
    }

    @media screen and (max-width: 760px){
        font-size: 38px;
        text-align: center;
    }
    @media screen and (max-width: 480px){
        text-align: center;
        font-size: 34px;
    }
`;


export const SmartText = styled.p`
    font-size: 22px;
    color: var(--white);
    margin-bottom: 15px;
    font-weight: 500;

    @media screen and (max-width: 760px){
        font-size: 20px;
        text-align: center;
    }
    @media screen and (max-width: 480px){
        text-align: center;
        font-size: 18px;
    }
`

export const HeroInfoText = styled.p`
    font-size: 18px;
    color: var(--white);
    margin-bottom: 30px;
    

    @media screen and (max-width: 760px){
        font-size: 20px;
        text-align: center;
    }
    @media screen and (max-width: 480px){
        text-align: center;
        font-size: 18px;
    }
`

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`