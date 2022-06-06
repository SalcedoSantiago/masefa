import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { motion } from "framer-motion";


export const SidebarContainer = motion(styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    background-color: black;
    z-index: 999;

    @media screen and (min-width: 768px){
        display: none;
    }   
`);

export const Icon = styled.div`
    font-size: 20px;
    
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    list-style: none;
    text-decoration: none;
    cursor: pointer;
`