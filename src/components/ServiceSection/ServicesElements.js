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