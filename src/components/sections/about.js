import React from "react";
import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
import Fade from 'react-reveal/Fade';
import AboutImage from '../../assets/images/about.jfif'
// import { IoIosArrowRoundForward } from 'react-icons/io'

/**
 * Internal dependencies
 */
import { Button } from '../button'


const Columns = styled.div`
    ${({ theme }) => theme.flexCenter};
    justify-content: space-between;
    /* padding: 0 30px; */

    @media (min-width: 1024px) {
        padding: 0;
    }
    
    .two-colunm{
        width: 100%;
        @media (min-width: 1024px) {
            width: calc(50% - 2rem);
        }

        &.relative{
            position: relative;
        }
    }
`


const StyledSection = styled.section`
    padding-left:2rem;
    padding-right:2rem;
    
    .about-us{
        margin-top: 45px;
        @media (min-width: 1024px) {
            margin-top: 0;
            padding-right: 30px;
        }
    }

    img{
        flex-shrink: 0;
        position: relative;
    }

    .desc{
        margin-top: 16px;
        font-size: 16px;
        color: var(--black);
        font-weight: 500;
        @media (min-width: 1024px) {
            font-size: 14px;
        }
    }

    .heading-section{
        font-size: 34px;
        font-weight: 700;
        color: var(--blue);
        &::before{
            content:"";
        }

        @media (min-width: 1024px) {
            font-size: 28px;
        }
    }

    .heading-section,
    .desc
    {
        margin-right: 20px;
        margin-left:  20px;
        text-align: center;
        
        @media (min-width: 1024px) {
            text-align: start;
            margin-right: 0;
            margin-left:  0;
        }
    }

`

const Layers = styled.div`
    width: 400px;
    height: 100%;
    position: absolute;
    top: -30px;
    left: -30px;
    background-color: var(--orange);
`


const ExperienceContainer = styled.div`
    ${({ theme }) => theme.flexStart};


    > div{
        width: 100%;
        @media (min-width: 1024px) {
            width: 33%;
        }
    }

    .experiencie{
        ${({ theme }) => theme.flexCenter};
        text-align: center;
        gap: 5px;
        padding: 0 40px;
        margin-bottom: 30px;

        @media (min-width: 1024px){
            padding-right: 40px;
            padding-left: 0px;
        }

        .counter{
            width: auto;
            width: 100%;
            padding: 0;
            @media (min-width: 1024px) {
                padding: 20px;
                margin-right: 5px;
                padding-left: 0px;
            }
        }

        .content{
            flex:1;
        }

        @media (min-width: 1024px) {
            text-align: start;
        }

        p,
        h4,
        .counter
        {
            text-align: inherit;
        }

        .counter{
            display: block;
            color: var(--orange);
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 8px;
        }


        p{
            font-size: 16px;
            margin-top: 0;
            @media (min-width: 1024px) {
                font-size: 14px;
            }
        }

        h4{
            color: var(--black);
            font-size: 22px;
            font-weight: 600;
            margin: 0;
            line-height: 2.1;
            text-transform: capitalize;
            @media (min-width: 1024px) {
                font-size: 18px;
            }
        }
        
    }
`;

const PrimaryButton = styled(Button)`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    font-weight: 600;


    @media (min-width: 1024px) {
        width: auto;
    }
`;


export default () => {
    return (
        <Fade>
            <StyledSection id="nosotros">
                <div className="header">
                    <h2 className="heading">
                        Quienes somos?
                    </h2>
                </div>
                <Columns>
                    <div className="two-colunm relative">
                        <Layers />
                        <img alt="about-us" src={AboutImage} />
                    </div>
                    <div className="two-colunm  about-us">
                        <h2 className="heading-section">
                            Sobre nosotros
                            {/* <span className="heading-special"> */}

                            {/* </span> */}
                        </h2>
                        <p className="desc">
                            Nos
                            dedicamos fundamentalmente a satisfacer necesidades de mantenimiento
                            preventivo, correctivo y de tareas generales accesorias de instalaciones y
                            servicios en platas industriales, desarrollándose en el rubro de
                            prefabricado y montajes de cañerías, y ejecución de soldaduras especiales.
                        </p>
                        <p className="desc">
                            Nuestro objetivo es crecer en la industria y poder ofrecer un servicio
                            profesional adecuado para cada necesidad que se nos presente.
                            Administrar el tiempo de manera activa, productiva y prudente para
                            acortar costos y dejar satisfechos a todos nuestros clientes, como lo
                            venimos haciendo.
                        </p>
                        <p className="desc">
                            A lo largo de mas de 10 años, MASEFA creció de recomendación en
                            recomendación, pero creemos que ha llegado el momento de agrandar la
                            lista de clientes y presentarnos como la empresa confiable, ágil y eficaz
                            que somos.
                        </p>

                        <PrimaryButton href="/#we">
                            Contact Us {/*  <span className="arrow"><IoIosArrowRoundForward /></span> */}
                        </PrimaryButton>
                    </div>
                </Columns>
                <ExperienceContainer>
                    <div className="experiencie">
                        <div className="counter">
                            <span>24+</span>
                        </div>
                        <div className="content">
                            <h4>Running Project</h4>
                            <p>
                                Welding is a fabrication process that joins materials, usually metals or thermoplastics,
                            </p>
                        </div>
                    </div>
                    <div className="experiencie">
                        <div className="counter">
                            <span>24+</span>
                        </div>
                        <div className="content">
                            <h4>Running Project</h4>
                            <p>
                                Welding is a fabrication process that joins materials, usually metals or thermoplastics,
                            </p>
                        </div>
                    </div>
                    <div className="experiencie">
                        <div className="counter">
                            <span>24+</span>
                        </div>
                        <div className="content">
                            <h4>Running Project</h4>
                            <p>
                                Welding is a fabrication process that joins materials, usually metals or thermoplastics,
                            </p>
                        </div>
                    </div>
                </ExperienceContainer>
            </StyledSection>
        </Fade>
    );
};
