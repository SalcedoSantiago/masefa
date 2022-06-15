import { services, prefabricado, soldaduras } from './Data';
import Fade from 'react-reveal/Fade';

import {
    ServicesContainer,
    ServicesRow,
    CardService,
    IconWrapper,
    ServiceTitle,
    Row,
    Column,
    ColumnService,
    SubtitleServices,
    HeadingService,
    CheckIcon
} from './ServicesElements';
import { Heading } from '../heading';

const Services = () => {

    return (
        <Fade right>
            <ServicesContainer id="services">
                <Heading>Nuestros Servicios</Heading>
                <ServicesRow>
                    {services.map(({ title, Icon }, index) =>
                        <CardService key={index}>
                            <IconWrapper>
                                <i class="fa-solid fa-envelope-circle-check"></i>
                            </IconWrapper>
                            <ServiceTitle>{title}</ServiceTitle>
                        </CardService>
                    )}
                </ServicesRow>
                <Heading>Ademas ofrecemos</Heading>
                <Row>
                    <Column>
                        <HeadingService>PREFABRICADO Y MONTAJES DE CAÑERIAS PARA:</HeadingService>
                        {prefabricado.map((title, index) =>
                            <ColumnService key={index}>
                                <CheckIcon>
                                    <i className="fa-solid fa-circle-check"></i>
                                </CheckIcon>
                                <SubtitleServices>
                                    {title}
                                </SubtitleServices>
                            </ColumnService>
                        )}
                    </Column>
                    <Column>
                        <HeadingService>EJECUCIÓN DE SOLDADURAS ESPECIALES EN</HeadingService>
                        {soldaduras.map((title, index) =>
                            <ColumnService key={index}>
                                <CheckIcon>
                                    <i className="fa-solid fa-circle-check"></i>
                                </CheckIcon>
                                <SubtitleServices>
                                    {title}
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