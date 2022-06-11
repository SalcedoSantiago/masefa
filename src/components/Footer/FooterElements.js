import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';


export const FooterContainer = styled.footer`
    background-color: var(--blue);
    padding-top: 80px;
    padding-left: 2rem;
    padding-right: 2rem;
`;


export const FooterWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 60px;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const FooterAbout = styled.div`
    padding-right: 40px;

    @media screen and (max-width: 768px){
        margin-bottom: 30px;
    }
`;

export const LogoContainer = styled.div`
    width: 300px;
    margin-bottom: 20px;
`;

export const LogoLink = styled.div`
    font-size: 1.4rem;
    color: #fff;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const InfoUs = styled.p`
    max-width: 300px;
    font-size: 14px;
    color: var(--white);
    font-family: "Poppins";
    margin-bottom: 20px;
    @media screen and (max-width: 768px){
        max-width: 100%;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`;

export const IconWrapper = styled.div`
    font-size: 1.2rem;
    color: var(--white);
    fill: var(--white);
`;

export const Row = styled.div`
    display: flex;
    align-items: start;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    width: 33%;
    @media screen and (max-width: 768px){
        margin-bottom: 25px;
    }
`;

export const HeadingSection = styled.h2`
    font-size: 1.4rem;
    color: #fff;
    @media screen and (max-width: 768px){
        margin-bottom: 10px;
        font-size: 1.8rem;
    }
`;

export const Navigate = styled.ul`
    padding: 0;
    list-style: none;
    margin: 0;
`;

export const Link = styled(LinkS)`
    list-style: none;
    text-decoration: none;
    color: #ffe;
    display: block;
    cursor: pointer;
    margin-bottom: 5px;
    font-size: 14px;
    @media screen and (max-width: 768px){
        margin-bottom: 10px;
        font-size: 16px;
    }
`;

export const SectionCopy = styled.div`
    padding: 20px 0;
    border-top: 1px solid #ddd;
    max-width: 1280px;
    margin: 0 auto;
`;

export const TextCopy = styled.p`
    font-size: 14px;
    color: var(--white);
    text-align: center;
`
