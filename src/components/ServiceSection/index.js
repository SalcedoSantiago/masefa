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

const Services = () => {

    return (
        <Fade>
            <ServicesContainer>
                <Heading>Nuestros Servicios</Heading>
                <ServicesRow>
                    {services.map(({ title, Icon }, index) =>
                        <CardService key={index}>
                            <IconWrapper>
                               +
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
                                    +
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
                                    +
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