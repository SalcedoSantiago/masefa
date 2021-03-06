import styled from 'styled-components';


export const AboutContainer = styled.section`
    padding: 120px 0;
    max-width: 1280px;
    margin: 0 auto;

    @media screen and (max-width: 768px){
        padding-left: 2rem;
        padding-right: 2rem;
    }
`

export const AboutWrapper = styled.div`
    z-index: 1;
    display: grid;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 ;
    }
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns:  minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    padding-top: 60px;

    @media screen and (max-width: 760px){
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    position: relative;
    
    @media screen and (max-width: 480px){
        padding-left: 0px;
        padding-right: 0px;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
`

export const Image = styled.img`
    flex-shrink: 0;
    width: 100%;
    z-index: 2;
    position: relative;

`

export const Layer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: -30px;
    left: -30px;
    background-color: var(--orange);
    z-index: 1;
    @media screen and (max-width: 480px){
        left: -15px;

    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    padding-left: 50px;

    @media screen and (max-width: 768px){
        padding-left: 0px;
        padding-right: 0px;
        margin-top: 30px;
    }
`;

export const AboutInfoWrapper = styled.div`
    padding-bottom: 40px;
`
export const InfoText = styled.p`
    margin-top: 16px;
    font-size: 16px;
    color: var(--black);
    font-weight: 400;
    font-family: "Poppins";

    @media screen and (max-width: 768px){
        font-size: 17px;
    }

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`


export const BtnWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px){
        display: block;
    }
`


export const AboutExperienceWrapper = styled.div`
    display: flex;
    justify-content: start;
    margin-top: 40px;
    flex-wrap: wrap;
`

export const Experience = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    padding-right: 40px;
    padding-left: 0px;

    @media screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 30px;
        padding-right: 0;
        text-align: center;
    }
`

export const Counter = styled.div`
    width: 100%;
    padding: 20px;
    margin-right: 5px;
    padding-left: 0px;
    @media screen and (max-width: 768px){
        padding: 0;
    }
`

export const CounterNumber = styled.span`
    display: block;
    color: var(--orange);
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 8px;

    @media (max-width: 768px) {
        font-size: 28px;
    }

    @media (max-width: 480px) {
        font-size: 26px;
        margin-bottom: 2px;
    }
`

export const ExperienceContent = styled.div`
    flex: 1;
`

export const ExperienceHeading = styled.h3`
    color: var(--black);
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    line-height: 1;
    text-transform: capitalize;
    @media (max-width: 768px) {
        font-size: 18px;
    }
    @media (max-width: 480px) {
        font-size: 18px;
    }
`
export const ExperienceInfo = styled.p`
    font-size: 16px;
    margin-top: 0;
    @media (max-width: 768px) {
        font-size: 14px;
        max-width: 500px;
        text-align: center;
        margin-left: 5px;
        margin-right: 5px;
    }
`