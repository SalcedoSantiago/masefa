import { IoMdConstruct } from "react-icons/io";
import {
    BgFeaturedContainer,
    FeaturedContainer,
    Heading,
    FeaturedWrapper,
    FeaturedCard,
    IconWrapper,    
    CardH2,
    CardP
} from './FeaturedElements';

import { cards } from './Data';


const Featured = () => {

    return (
        <BgFeaturedContainer>
            <FeaturedContainer>
                <Heading>Soluciones que ofrecemos</Heading>
                <FeaturedWrapper>
                    {cards.map(({ title, description, imageSrc }, index) => (
                        <FeaturedCard key={index}>
                            <IconWrapper>
                                <IoMdConstruct />
                            </IconWrapper>
                            <CardH2>{title}</CardH2>
                            <CardP>{description}</CardP>
                        </FeaturedCard>
                    ))}
                </FeaturedWrapper>
            </FeaturedContainer>
        </BgFeaturedContainer>

    )
}

export default Featured