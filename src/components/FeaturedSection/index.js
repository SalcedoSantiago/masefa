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
import Fade from 'react-reveal/Fade';

import { cards } from './Data';


const Featured = () => {

    return (
        <Fade>

            <BgFeaturedContainer>
                <FeaturedContainer>
                    <Heading>Soluciones que ofrecemos</Heading>
                    <FeaturedWrapper>
                        {cards.map(({ title, description, imageSrc }, index) => (
                            <FeaturedCard key={index}>
                                <IconWrapper>
                                    test
                                </IconWrapper>
                                <CardH2>{title}</CardH2>
                                <CardP>{description}</CardP>
                            </FeaturedCard>
                        ))}
                    </FeaturedWrapper>
                </FeaturedContainer>
            </BgFeaturedContainer>
        </Fade>
    )
}

export default Featured