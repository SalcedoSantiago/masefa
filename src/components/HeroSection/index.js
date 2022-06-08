import styled from "styled-components";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import slide1 from '../assets/images/slide-1.png'
import slide2 from '../assets/images/slide-2.jpg'
import slide3 from '../assets/images/slide-3.png'


import {
    StyledSection,
    StyledSlider,
    Overlay
} from './HeroElements'

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