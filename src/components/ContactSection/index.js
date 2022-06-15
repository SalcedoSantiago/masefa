import Fade from 'react-reveal/Fade';
import { Heading } from '../heading';
import { Button } from '../button';
import {
    ContactContainer,
    FormContainer,
    ColumnsField,
    Field,
    ContactWrapper,
    ContactLabel,
    ContactInput,
    ContactTextarea,
    BtnWrapper
} from './ContactElements';


const Contact = () => {
    return (
        <Fade>
            <ContactContainer id="contact">
                <Heading style={{ marginBottom: '80px' }}>Contact us</Heading>
                <ContactWrapper>
                    <FormContainer>
                        <ColumnsField>
                            <Field>
                                <ContactLabel htmlFor="name">Nombre:</ContactLabel>
                                <ContactInput type="text" name="name" id="name" placeholder="Nombre" required />
                            </Field>
                            <Field>
                                <ContactLabel htmlFor="apellido">Apellido: </ContactLabel>
                                <ContactInput type="text" name="apellido" id="apellido" placeholder="Apellido" required />
                            </Field>
                        </ColumnsField>
                        <ColumnsField>
                            <Field>
                                <ContactLabel htmlFor="email">Email: </ContactLabel>
                                <ContactInput type="email" name="email" id="email" placeholder="Email" required />
                            </Field>
                        </ColumnsField>
                        <ColumnsField>
                            <Field>
                                <ContactLabel htmlFor="telefono">Telefono: </ContactLabel>
                                <ContactInput type="tel" name="telefono" id="telefono" placeholder="Telefono" required />
                            </Field>
                        </ColumnsField>
                        <ColumnsField>
                            <Field>
                                <ContactLabel htmlFor="mensaje">Mensaje: </ContactLabel>
                                <ContactTextarea id="mensaje"
                                    placeholder='Mensaje'
                                ></ContactTextarea>
                            </Field>
                        </ColumnsField>
                        <BtnWrapper>
                            <Button>Enviar</Button>
                        </BtnWrapper>
                    </FormContainer>
                </ContactWrapper>
            </ContactContainer>
        </Fade>
    )
}

export default Contact