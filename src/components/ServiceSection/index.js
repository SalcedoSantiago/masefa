import { IoIosHammer, IoIosCheckmarkCircle } from "react-icons/io";
import { services } from './Data';

import {
    ServicesContainer,
    Heading,
    ServicesRow,
    CardService,
    IconWrapper,
    ServiceTitle
} from './ServicesElements';

const Services = () => {

    return (
        <ServicesContainer>
            <Heading>Nuestros Servicios</Heading>
            <ServicesRow>
                {services.map(({ title }, index) =>
                    <CardService key={index}>
                        <IconWrapper>
                            <IoIosHammer />
                        </IconWrapper>
                        <ServiceTitle>{title}</ServiceTitle>
                    </CardService>
                )}
            </ServicesRow>
        </ServicesContainer>
    )
}

export default Services