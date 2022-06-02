import React from 'react'
import styled from "styled-components";
import { Button } from "../button";


const StyledSection = styled.section`
    max-width: 1080px;

    .header{
        margin-bottom: 80px;
    }

`

const FormContainer = styled.div`
    margin: 0 auto;
    margin-right: 40px;
    width: 50%;
    font-family: "Poppins";
`


const Columns = styled.div`
    display: flex;
    margin-bottom: 20px;

    &:last-child{
        margin-right: 0!important;
    }
`
const Field = styled.div`
    margin-right: 30px;
    width: 300px;
    flex: 1;
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
    width: 50%;
    font-family: "Montserrat";
    padding-left: 30px;

    h3{
        font-weight: 700;
        font-size: 26px;
        text-align: center;
        font-family: "Montserrat";
        color: var(--blue);
        margin-bottom: 30px;
    }

    .featured{
        font-size: 18px;
        text-align: center;
        color: var(--blue);
        font-size: 20px;
        margin-top: 60px;
    }

`

const Contact = () => {

    return (
        <StyledSection>
            <div className="header">
                <h2 className='heading'>Contacto</h2>

            </div>
            <Columns>
                <FormContainer>
                    <form>
                        <Columns>
                            <Field>
                                <label for="name">Name: </label>
                                <input type="text" name="name" id="name" placeholder="name" required />
                            </Field>
                            <Field>
                                <label for="apellido">Apellido: </label>
                                <input type="text" name="apellido" id="apellido" placeholder="apellido" required />
                            </Field>
                        </Columns>
                        <Columns>
                            <Field>
                                <label for="email">Email: </label>
                                <input type="email" name="email" id="email" placeholder="email" required />
                            </Field>
                        </Columns>
                        <Columns>
                            <Field>
                                <label for="telefono">Telefono: </label>
                                <input type="tel" name="telefono" id="telefono" placeholder="telefono" required />
                            </Field>
                        </Columns>
                        <Columns>
                            <Field>
                                <label for="mensaje">Mensaje: </label>
                                <textarea
                                    id="mensaje"

                                ></textarea>
                            </Field>
                        </Columns>
                        <Button end style={{ marginRight: '30px' }}>Enviar</Button>
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
    )
}

export default Contact