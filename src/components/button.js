import styled from "styled-components";
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    padding: ${({ big }) => big ? '14px 48px' : '12px 30px'};
    background: ${({ primary }) => primary ? 'var(--orange) ' : 'white'};
    color: ${({ primary }) => primary ? '#fff' : 'var(--orange)'};
    font-size: ${({ fontbig }) => fontbig ? '20px' : '16px'};
    white-space: no-wrap;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => primary ? 'transparent' : 'var(--orange) '};
        outline: 2px solid var(--orange);
        color: ${({ primary }) => primary ? 'var(--orange)' : '#fff'};
    }
`



export const LinkButton = styled.button`

`