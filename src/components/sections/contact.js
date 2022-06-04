import React from 'react'
import styled from "styled-components";
import { Button } from "../button";
import Fade from 'react-reveal/Fade';


const StyledSection = styled.section`
    max-width: 1280px;
    padding-left: 2rem;
    padding-right: 2rem;

    .header{
        margin-bottom: 80px;
    }

`

const FormContainer = styled.div`
    margin: 0 auto;
    font-family: "Poppins";
    order: 1;

    @media (min-width: 1024px) {
        order: 0;
    }
`


const Columns = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    gap: 30px;

    > div{
        width: 100%;
        @media (min-width: 1024px) {
            width: calc(50% - 1rem);
        }
    }

    &:last-child{
        margin-right: 0!important;
    }
`
const Field = styled.div`
    margin-right: 0;
    width: 300px;
    flex: 1;
    
    @media (min-width: 1024px) {
        margin-right: 30px;
    }

    label{
        display: block;
        font-weight: 500;
        font-family: "Poppins";
    }

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
`

const InfoContact = styled.div`
    font-family: "Montserrat";
    padding-left: 30px;
    order: 0;

    @media (min-width: 1024px) {
        order: 1;
    }

    h3{
        font-weight: 700;
        font-size: 26px;
        text-align: center;
        font-family: "Montserrat";
        color: var(--blue);
        margin-bottom: 30px;
    }
    .text{
        text-align: center;
        @media (min-width: 1024px) {
            text-align: start;
        }
    }

    .featured{
        font-size: 18px;
        text-align: center;
        color: var(--blue);
        font-size: 20px;
        margin-top: 60px;
    }
`

const PrimaryButton = styled(Button)`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    @media (min-width: 1024px) {
        width: auto;
    }
 `


const Contact = () => {

    return (
        <Fade>
            <StyledSection id="contact">
                <div className="header">
                    <h2 className='heading'>Contacto</h2>
                </div>
                <Columns>
                    <FormContainer>
                        <form>
                            <Columns>
                                <Field>
                                    <label htmlFor="name">Name: </label>
                                    <input type="text" name="name" id="name" placeholder="name" required />
                                </Field>
                                <Field>
                                    <label htmlFor="apellido">Apellido: </label>
                                    <input type="text" name="apellido" id="apellido" placeholder="apellido" required />
                                </Field>
                            </Columns>
                            <Columns>
                                <Field>
                                    <label htmlFor="email">Email: </label>
                                    <input type="email" name="email" id="email" placeholder="email" required />
                                </Field>
                            </Columns>
                            <Columns>
                                <Field>
                                    <label htmlFor="telefono">Telefono: </label>
                                    <input type="tel" name="telefono" id="telefono" placeholder="telefono" required />
                                </Field>
                            </Columns>
                            <Columns>
                                <Field>
                                    <label htmlFor="mensaje">Mensaje: </label>
                                    <textarea
                                        id="mensaje"

                                    ></textarea>
                                </Field>
                            </Columns>
                            <PrimaryButton end="true" style={{ marginRight: '30px' }}>Enviar</PrimaryButton>
                        </form>
                    </FormContainer>
                    <InfoContact>
                        <div>

                            <h3>Contactese con nosotros!</h3>
                            <p className='text'>
                                Envianos tu consulta y a la brevedad nos pondremos en contacto
                            </p>
                        </div>
                        <div>
                            <p className='featured'>
                                Gracias por elegirnos!!!
                            </p>
                        </div>
                    </InfoContact>
                </Columns>
            </StyledSection>
        </Fade>
    )
}

export default Contact