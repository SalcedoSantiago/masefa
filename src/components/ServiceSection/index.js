import { IoIosHammer, IoIosCheckmarkCircle } from "react-icons/io";
import { services } from './Data';

import {
    ServicesContainer,
    Heading,
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

const Services = () => {

    return (
        <ServicesContainer>
            <Heading>Nuestros Servicios</Heading>
            <ServicesRow>
                {services.map(({ title, Icon }, index) =>
                    <CardService key={index}>
                        <IconWrapper>
                            <IoIosHammer />
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
                                <IoIosCheckmarkCircle className="check-icon" />
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
                                <IoIosCheckmarkCircle className="check-icon" />
                            </CheckIcon>
                            <SubtitleServices>
                                Industria química
                            </SubtitleServices>
                        </ColumnService>
                    )}
                </Column>
            </Row>
        </ServicesContainer>
    )
}

export default Services