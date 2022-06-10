import Fade from 'react-reveal/Fade';
import {
    WorkContainer,
    Heading,
    CardRow,
    CardContainer,
    Card,
    BgImage,
    InfoContainer,
    InfoH2,
    InfoP
} from './WorkElements';
import { Button } from '../button';
import { WORKS } from './Data';


const Work = () => {
    return (
        <Fade>
            <WorkContainer>
                <Heading>Nuestros Proyectos</Heading>
                <CardRow>
                    {WORKS.map((card, index) => (
                        <CardContainer key={index}>
                            <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                                <BgImage imageSrc={card.imageSrc}>
                                    <InfoContainer
                                        variants={{
                                            hover: {
                                                opacity: 1,
                                            },
                                            rest: {
                                                opacity: 0,
                                            }
                                        }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <InfoH2>
                                            Lorem Ipsum
                                        </InfoH2>
                                        <InfoP>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo i ncidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                                        </InfoP>
                                    </InfoContainer>
                                </BgImage>
                            </Card>
                        </CardContainer>
                    ))}
                </CardRow>
                <Button>Show More</Button>
            </WorkContainer>
        </Fade>
    )
}

export default Work