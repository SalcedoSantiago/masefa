import styled from 'styled-components';


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
`;

export const ContactWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
`

export const FormContainer = styled.form`
    margin: 0 auto;
    font-family: "Poppins";
    order: 1;

    @media (min-width: 1024px) {
        order: 0;
    }
`;


export const Field = styled.div`
    margin-right: 0;
    width: 300px;
    flex: 1;

    input,
    textarea
    {
        background-color: #eee;
        border: none;
        padding: 15px 15px;
        margin: 8px 0;
        width: 100%;
        padding: 10px 20px;
        font-family: "Poppins";
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
   background-color: #eee;
    border: none;
    padding: 15px 15px;
    margin: 8px 0;
    width: 100%;
    padding: 10px 20px;
    font-family: "Poppins";
`

