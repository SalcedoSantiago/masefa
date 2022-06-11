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
    ContactTextarea
} from './ContactElements';


const Contact = () => {
    return (
        <Fade>
            <ContactContainer id="contact">
                <Heading>Contact us</Heading>
                <ContactWrapper>
                    <FormContainer>
                        <ColumnsField>
                            <Field>
                                <ContactLabel htmlFor="name">Name:</ContactLabel>
                                <ContactInput type="text" name="name" id="name" placeholder="name" required />
                            </Field>
                            <Field>
                                <ContactLabel htmlFor="apellido">Apellido: </ContactLabel>
                                <ContactInput type="text" name="apellido" id="apellido" placeholder="apellido" required />
                            </Field>
                        </ColumnsField>
                        <ColumnsField>
                            <Field>
                                <ContactLabel htmlFor="email">Email: </ContactLabel>
                                <ContactInput type="email" name="email" id="email" placeholder="email" required />
                            </Field>
                        </ColumnsField>
                        <ColumnsField>
                            <Field>
                                <ContactLabel htmlFor="telefono">Telefono: </ContactLabel>
                                <ContactInput type="tel" name="telefono" id="telefono" placeholder="telefono" required />
                            </Field>
                        </ColumnsField>
                        <ColumnsField>
                            <Field>
                                <ContactLabel htmlFor="mensaje">Mensaje: </ContactLabel>
                                <ContactTextarea id="mensaje"></ContactTextarea>
                            </Field>
                        </ColumnsField>
                        <Button>Enviar</Button>
                    </FormContainer>
                </ContactWrapper>
            </ContactContainer>
        </Fade>
    )
}

export default Contact