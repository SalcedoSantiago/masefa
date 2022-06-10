import styled from 'styled-components';
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line


export const WorkContainer = styled.section`
    max-width: 1280px;
    padding: 120px 2rem;
    margin: 0 auto;
`;

export const Heading = styled.h1`
    font-size: 2.5rem;
    font-family: "Montserrat", "Poppins";
    line-height: 1.1;
    font-weight: 700;
    text-align: center;
    margin-bottom: 80px;
    
    @media screen and (max-width: 768px){
        font-size: 2rem;
        text-align: center;
    }

    @media screen and (max-width: 480px){
    }  
`;


export const CardRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;

`;


export const CardContainer = styled.div`
    /* padding: 0 40px; */
    background-color: #808080;
    width: 100%;
`;

export const Card = styled(motion.a)`
background-color: #808080;
`;

export const BgImage = styled.div`
   ${props => css`background-image: url("${props.imageSrc}");`}
     height: 18rem;
     align-items: center;
     flex-direction: column;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     background-size: cover;
`;


export const InfoContainer = styled(motion.div)`
    background-color: #1E1D24D9;
    height: 18rem;  
    align-items: center;
    flex-direction: column;
    /* padding: 1rem 2rem; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px 50px 0px 50px;
`

export const InfoH2 = styled.h2`
    font-size: 1rem;
    font-size: 1.5rem;
    text-align: center;
    color: #FFFFFF;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
`;

export const InfoP = styled.p`
    font-size:14px;
    font-weight: 400;
    color: #fff;
    text-align: center; 
    text-decoration: none;
`