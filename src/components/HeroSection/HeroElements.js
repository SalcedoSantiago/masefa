import styled from 'styled-components';
import { css } from 'styled-components';
import { Button } from '../button';


export const HeroContainer = styled.div`
    height: 600px;
    max-height: 600px;
    
    background-color: var(--white);
    overflow: hidden;
`

export const StyledSlider = styled.div`
    height: 600px;
    max-height: 600px;

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
    height: 600px;
    max-height: 600px;

    ${({ imageUrl }) => css`
        background-image: url(${imageUrl});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    `}
`


export const HeroInfoContainer = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: 2;
    height: 600px;
    background-color: #00000094;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
`

export const HeroInfoContent = styled.div`
    padding: 0 2rem;
`;

export const HeroH1 = styled.h1`
    font-size: 48px;
    font-family: "Montserrat";
    font-weight: 700;
    color: var(--white);
    line-height: 1.5;

    @media screen and (max-width: 760px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
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
    }
    @media screen and (max-width: 480px){
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
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroInfoText = styled.p`
    font-size: 18px;
    color: var(--white);
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 760px){
        font-size: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 40px;
    justify-content: start;

    ${Button}{
        border-radius: 3px;
        font-size: 16px;
    }
`