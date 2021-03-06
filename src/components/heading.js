import styled from 'styled-components';



export const Heading = styled.h1`
    font-size: 2.5rem;
    font-family: "Montserrat", "Poppins";
    line-height: 1.1;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
    color: ${({ white }) => white ? '#fff' : '#000'};
    
    @media screen and (max-width: 768px){
        font-size: 2rem;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 24px;
        line-height: 1.5;
        margin-bottom: 20px;
    }  
`;


export const SubHeading = styled.h2`
    font-size: 26px;
    font-family: "Montserrat", "Poppins";
    line-height: 1.1;
    font-weight: 700;
    color: var(--blue);
    
    @media screen and (max-width: 768px){
        font-size: 24px;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }  
`