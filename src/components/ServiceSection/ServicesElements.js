import styled from 'styled-components';


export const ServicesContainer = styled.div`
    padding: 120px 0;
    max-width: 1280px;
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
    margin-bottom: 100px;
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

export const IconWrapper = styled.div`
    text-align: center;
    font-size: 60px;
    color: var(--orange);
    margin-bottom: 10px;
    line-height: 1;
    transition: all 0.2s ease-in-out;

`

export const ServiceTitle = styled.h2`
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
    font-family: "Poppins";
    color: var(--blue);
    transition: all 0.2s ease-in-out;

`

export const CardService = styled.div`
    padding: 20px 30px;
    box-shadow: 5px 13px 15px -3px rgba(0,0,0,0.1);
    border-radius: 5px;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        background-color: var(--orange);

        ${ServiceTitle},
        ${IconWrapper}
        {
            color: var(--white);
        }
    }
`

