import styled from 'styled-components';
import { Button } from '../button';


export const ContactContainer = styled.section`
    max-width: 1280px;
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;
`;

export const ColumnsField = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
        gap: 0;
        flex-direction: column;
        margin-bottom: 15px;
    }
`;

export const ContactWrapper = styled.div`
    width: 60%;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        width: 75%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const FormContainer = styled.form`
    margin: 0 auto;
    font-family: "Poppins";
    order: 1;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        order: 0;
    }
`;


export const Field = styled.div`
    margin-right: 0;
    /* width: 300px; */
    flex: 1;   
    
    @media (max-width: 768px) {
       width: 100%;
    }
`;

export const ContactLabel = styled.label`
    display: block;
    font-weight: 500;
    font-family: "Poppins";
`;


export const ContactInput = styled.input`
    background-color: #eee;
    border: none;
    padding: 15px 15px;
    margin: 8px 0;
    width: 100%;
    padding: 10px 20px;
    font-family: "Poppins";
`;

export const ContactTextarea = styled.textarea`
    font-family: "Poppins";
    background-color: #eee;
    border: none;
    padding: 15px 15px;
    width: 100%;
    padding: 10px 20px;
    margin: 8px 0;
`


export const BtnWrapper = styled.div`
    display: flex;
    justify-content: end;

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