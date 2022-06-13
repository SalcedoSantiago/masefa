import { services } from './Data';
import Fade from 'react-reveal/Fade';

import {
    ServicesContainer,
    ServicesRow,
    CardService,
    IconWrapper,
    ServiceTitle,
    Row,
    Column,
    Column2,
    RowService,
    ColumnService,
    SubtitleServices,
    HeadingService,
    CheckIcon
} from './ServicesElements';
import { Heading } from '../heading';

import 'boxicons'


const Services = () => {

    return (
        <Fade>
            <ServicesContainer>
                <Heading>Nuestros Servicios</Heading>
                <ServicesRow>
                    {services.map(({ title, Icon }, index) =>
                        <CardService key={index}>
                            <IconWrapper>
                                <box-icon name='mail-send'></box-icon>

                            </IconWrapper>
                            <ServiceTitle>{title}</ServiceTitle>
                        </CardService>
                    )}
                </ServicesRow>
                <Heading>Ademas ofrecemos</Heading>
                <Row>
                    <Column>
                        <HeadingService>El rubro donde nos desarrollamos:</HeadingService>
                        {[1, 2, 3, 4, 5].map((data, index) =>
                            <ColumnService key={index}>
                                <CheckIcon>
                                    <box-icon name='mail-send'></box-icon>

                                </CheckIcon>
                                <SubtitleServices>
                                    Industria química
                                </SubtitleServices>
                            </ColumnService>
                        )}
                    </Column>
                    <Column>
                        <HeadingService>El rubro donde nos desarrollamos:</HeadingService>
                        {[1, 2, 3, 4, 5].map((data, index) =>
                            <ColumnService key={index}>
                                <CheckIcon>
                                    <box-icon name='mail-send'></box-icon>

                                </CheckIcon>
                                <SubtitleServices>
                                    Industria química
                                </SubtitleServices>
                            </ColumnService>
                        )}
                    </Column>
                </Row>
            </ServicesContainer>
        </Fade>
    )
}

export default Services