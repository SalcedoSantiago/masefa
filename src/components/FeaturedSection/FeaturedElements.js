import styled from 'styled-components';

export const BgFeaturedContainer = styled.div`
    background-color: var(--blue);
    width: 100%;
`

export const FeaturedContainer = styled.div`
    padding: 120px 0;
    max-width: 1080px;
    margin: 0 auto; 
    padding-left: 2rem;
    padding-right: 2rem;

`

export const Heading = styled.h1`
    font-size: 2.5rem;
    font-family: "Montserrat", "Poppins";
    line-height: 1.1;
    font-weight: 700;
    text-align: center;
    margin-bottom: 60px;
    color: var(--white);

    @media screen and (max-width: 768px){
        font-size: 2rem;
        text-align: center;
    }
`

export const FeaturedWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        display: block;
    }

`
export const FeaturedCard = styled.div`
    text-align: center;
    display: block;
    padding: 20px 15px 40px 15px;
`
export const IconWrapper = styled.div`
    font-size: 1.5rem;
    color: var(--orange);
    margin-bottom: 20px;
`

export const CardH2 = styled.h2`
     padding: 0px 0px 0px 0px;
    font-family: "Poppins", Sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: var(--white);

    @media screen and (max-width: 768px){
        font-size: 20px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }  
`

export const CardP = styled.p`
    font-family: "Poppins", Sans-serif;
    font-size: 14px;
    color: var(--white);
    font-weight: 400;


    @media screen and (max-width: 768px){
        margin-bottom: 20px;
    }
`