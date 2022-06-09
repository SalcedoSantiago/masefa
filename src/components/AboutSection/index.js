import React from 'react'
import {
    AboutContainer,
    AboutWrapper,
    Heading,
    AboutRow,
    Column1,
    Column2,
    Layer,
    Image,
    InfoText,
    Subtitle,
    AboutInfoWrapper,
    BtnWrapper,
    AboutExperienceWrapper,
    Experience,
    Counter,
    CounterNumber,
    ExperienceContent,
    ExperienceHeading,
    ExperienceInfo
} from './AboutElement';
import { Button } from '../button';
import AboutImage from '../assets/images/about.jfif'


const About = () => {
    return (
        <AboutContainer id="about">
            <AboutWrapper>
                <Heading>Quienes somos?</Heading>
                <AboutRow>
                    <Column1>
                        <Layer />
                        <Image src={AboutImage} />
                    </Column1>
                    <Column2>
                        <Subtitle>Sobre nosotros</Subtitle>
                        <AboutInfoWrapper>
                            <InfoText>
                                Nos
                                dedicamos fundamentalmente a satisfacer necesidades de mantenimiento
                                preventivo, correctivo y de tareas generales accesorias de instalaciones y
                                servicios en platas industriales, desarrollándose en el rubro de
                                prefabricado y montajes de cañerías, y ejecución de soldaduras especiales.
                            </InfoText>
                            <InfoText>
                                Nuestro objetivo es crecer en la industria y poder ofrecer un servicio
                                profesional adecuado para cada necesidad que se nos presente.
                                Administrar el tiempo de manera activa, productiva y prudente para
                                acortar costos y dejar satisfechos a todos nuestros clientes, como lo
                                venimos haciendo.
                            </InfoText>
                            <InfoText>
                                A lo largo de mas de 10 años, MASEFA creció de recomendación en
                                recomendación, pero creemos que ha llegado el momento de agrandar la
                                lista de clientes y presentarnos como la empresa confiable, ágil y eficaz
                                que somos.
                            </InfoText>
                        </AboutInfoWrapper>
                        <BtnWrapper>
                            <Button primary="true" to="contact">Contactanos</Button>
                        </BtnWrapper>
                    </Column2>
                </AboutRow>
                <AboutExperienceWrapper>
                    {[1, 2, 3].map((data, index) =>
                        <Experience key={index}>
                            <Counter>
                                <CounterNumber>+24</CounterNumber>
                            </Counter>
                            <ExperienceContent>
                                <ExperienceHeading>Running Project</ExperienceHeading>
                                <ExperienceInfo>
                                    Welding is a fabrication process that joins materials, usually metals or thermoplastics,
                                </ExperienceInfo>
                            </ExperienceContent>
                        </Experience>
                    )
                    }
                </AboutExperienceWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About