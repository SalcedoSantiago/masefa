import styled from 'styled-components';
import { css } from "styled-components/macro"; //eslint-disable-line
import { Button } from '../button'

export const WorkContainer = styled.section`
    max-width: 1280px;
    padding: 120px 2rem;
    margin: 0 auto;
`;


export const CardRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 15px;
    margin-bottom: 60px;
    margin-top: 60px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
    }
`;

export const InfoContainer = styled.div`
    /* opacity: 0; */
    /* background-color: #1E1D24D9; */
    /* height: 18rem;   */
    /* align-items: center; */
    /* flex-direction: column; */
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    /* padding: 0px 50px 0px 50px; */
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    margin-bottom: 50px;
    padding-top: 15px;
`

export const Card = styled.div`
    /* background-color: #808080; */
    width: 100%;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 40px;
    transition: all 0.4s ease-in-out;

    &:hover{
        transition: all 0.4s ease-in-out;

        ${InfoContainer}{
            opacity: 1;
            transition: all 0.4s ease-in-out;

        }
    }
`;

export const BgImage = styled.div`
   ${props => css`background-image: url("${props.imageSrc}");`}
    height: 13rem;
    align-items: center;
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-size: cover;
    border-radius: 4px;
`;




export const InfoH2 = styled.h2`
    font-size: 1rem;
    text-align: start;
    font-family: "Montserrat";
    /* color: #FFFFFF; */
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    color: var(--blue);

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

export const InfoP = styled.p`
    font-size: 14px;
    font-weight: 400;
    /* color: #fff; */
    text-align: start;

    text-decoration: none;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;

    ${Button}{
        font-weight: 600;
        width: 200px;

        @media screen and (max-width: 768px ) {
            width: 60%;
        }

        @media screen and (max-width: 480px ) {
            width: 100%;
        }
    }
`;