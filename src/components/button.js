import styled from "styled-components";




export const Button = styled.button`
    padding: 20px 30px 20px 30px;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    background-color: var(--orange);
    border-style: none;
    border-radius: 0px 0px 0px 0px;
    cursor: pointer;

    .arrow{
        padding-left:5px;
    }

    &:hover{
        background-color: var(--blue);
    }

`



export const LinkButton = styled.button`
    color: var(--orange);
    border: none;
    font-size: 18px;
    /* transition: var(--transition); */
    padding: 0;

    &:hover{
        border-bottom: 2px solid;
    }
`