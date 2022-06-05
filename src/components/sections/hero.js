import styled from "styled-components";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import slide1 from '../assets/images/slide-1.png'
import slide2 from '../assets/images/slide-2.jpg'
import slide3 from '../assets/images/slide-3.png'


const StyledSection = styled.div`
    height: 60vh;
    background-color: var(--blue);
`

const StyledSlider = styled.div`
    height: 100%;

    > div.slider{
        height: 100%;
        .previousButton,
        .nextButton
        {
            svg polygon{
                fill: var(--white);
            }
        }
    }

  
`

const Overlay = styled.div`
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: #0000005e;

    .container{
        margin: 0 auto;
        max-width: 1280px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;

        .heading,
        .subheading
        {
            text-align: start;
            color: #FFFFFF;
            font-size: 38px;
            font-weight: 600;
            line-height: 1em;
            a{
                text-decoration: none;
                &:hover{
                    cursor: pointer;
                    color: var(--orange);
                }
            }
        }
        .smart-text{
            margin: 10px 0;
            color: #FFFFFF;
            font-family: "Montserrat", Sans-serif;
            font-size: 18px;
            font-weight: 500;
            text-transform: uppercase;
            line-height: 1.2222em;
        }

        span{
            display: block;
            color: #FFFFFF;
            font-family: "Roboto", Sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.83em;
        }

        .flex{
            ${({ theme }) => theme.flexStart};
            gap: 20px;
            margin-top: 20px;

            button{
            ${({ theme }) => theme.button};
            }
        }

    }

`

const Hero = () => {
    return (
        <StyledSection>
            <StyledSlider>
                <Slider >
                    {content.map((item, index) => (
                        <div
                            key={index}
                            style={{ background: `url('${item}') no-repeat center center` }}
                        >
                            <Overlay>
                                <div className="container">
                                    <h2 className="heading">MONTAJES INDUSTRIALES</h2>
                                    <h3 className="subheading">
                                        TEL: <a>(011) 342535542</a>
                                    </h3>
                                    <p className="smart-text">
                                        The smartest working shop in the steel business
                                    </p>
                                    <span>
                                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </span>
                                    <div className="flex">
                                        <button>
                                            Contact us
                                        </button>
                                        <button>
                                            About us
                                        </button>
                                    </div>
                                </div>
                            </Overlay>
                        </div>
                    ))}
                </Slider>
            </StyledSlider>
        </StyledSection >
    );
};

const content = [
    slide1,
    slide2,
    slide3,
];

export default Hero;