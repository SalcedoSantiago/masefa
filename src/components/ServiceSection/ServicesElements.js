import styled from 'styled-components';


export const ServicesContainer = styled.div`
    padding: 120px 0;
    max-width: 1280px;
    margin: 0 auto; 
    padding-left: 2rem;
    padding-right: 2rem;
`


export const Heading = styled.h1`
    font-size: 2.3rem;
    font-family: "Montserrat", "Poppins";
    line-height: 1.1;
    font-weight: 700;
    text-align: center;
    margin-bottom: 80px;
    color: var(--black);

    @media screen and (max-width: 768px){
        font-size: 2rem;
        text-align: center;
    }
`

export const ServicesRow = styled.div`
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* align-items: center; */
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 80px;

    @media screen and (max-width: 1000px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;


export const CardService = styled.div`
    padding: 20px 10px;
    border-radius: 5px;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;

export const IconWrapper = styled.div`
    text-align: center;
    font-size: 60px;
    color: var(--blue);
    margin-bottom: 15px;
    line-height: 1;
    transition: all 0.2s ease-in-out;
    background-color: #3f51b54d;
    width: 90px;
    height: 90px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;

export const ServiceTitle = styled.h2`
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
    font-family: "Poppins";
    color: var(--blue);
    transition: all 0.2s ease-in-out;
`;


export const Row = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    gap: 40px;

    @media screen and (max-width: 760px){
        flex-direction: column;
    }
`
export const Column = styled.div`
    width: 50%;
    box-shadow: 5px 0px 25px 0px rgba(0,0,0,0.2);
    padding: 45px 40px;
    border-radius: 10px;
    @media screen and (max-width: 760px){
        width: 80%;
        margin: 0 auto;
    }
`

export const HeadingService = styled.h3`
    font-size: 1.1rem;
    font-family: "Montserrat";
    color: var(--blue);
    margin-bottom: 22px;
    line-height: 1.7;
    text-transform: uppercase;
`

export const ColumnService = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 13px;
`

export const CheckIcon = styled.div`
    font-size: 28px;
    color: var(--orange);
    line-height: 1;
`

export const SubtitleServices = styled.h3`
    margin: 0;
    font-family: "Montserrat";
    font-size: 1rem;
    font-weight: 400;
    color: var(--black);
`