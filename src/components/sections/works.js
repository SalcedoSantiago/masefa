/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
/**
 * Internal dependencies
 */

/**
 * Styled elements
 */

const Columns = styled.div`
     ${({ theme }) => theme.flexStart};
     gap: 20px;
 
 `
const StyledSection = styled.section`
     @media (min-width: 1024px) {
         /* padding: 0 ; */
     }
 
 `

export const CardContainer = styled.div`
     width: 100%;
     padding: 0 40px;
 
     @media (min-width: 768px) {
         width: calc(50% - 1rem);
         padding: 0 ;
     }
 
     @media (min-width: 1024px) {
         width: calc(33% - 1rem);
         padding: 0 ;
     }
 `

const Card = styled(motion.a)`
 background-color: #808080;
 `;

const CardImageContainer = styled.div`
     ${props => css`background-image: url("${props.imageSrc}");`}
     height: 18rem;
     align-items: center;
     flex-direction: column;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     background-size: cover;
 `;


export const CardHoverOverlay = styled(motion.div)`
     background-color: #1E1D24D9;
     height: 18rem;  
     align-items: center;
     flex-direction: column;
     /* padding: 1rem 2rem; */
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     padding: 0px 50px 0px 50px;
 
     p{
         font-size:14px;
     font-weight: 400;
     color: #fff;
     text-align: center; 
     }
 
     h2{
         font-size: 1rem;
         font-size: 1.5rem;
         text-align: center;
         color: #FFFFFF;
         font-weight: 700;
         text-transform: capitalize;
         margin-bottom: 0.5rem;
     }
 
 `;


export default () => {
    return (
        <StyledSection>
            <div className="header">
                <h2 className="heading">
                    Nuestro trabajos
                </h2 >
                <h5 className="sub-heading">
                    The smartest working shoh5 in the steel business
                </h5>
            </div>

            <Columns>
                {Works.map((card, index) => (
                    <CardContainer key={index}>
                        <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                            <CardImageContainer imageSrc={card.imageSrc}>
                                <CardHoverOverlay
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
                                    <h2>
                                        Lorem Ipsum
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo i ncidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                                    </p>
                                </CardHoverOverlay>
                            </CardImageContainer>
                        </Card>
                    </CardContainer>
                ))}
            </Columns>
            <button className="btn">Show More</button>
        </StyledSection>
    );
};



const Works = [
    {
        imageSrc:
            "https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-4.jpg",
        title: "Chicken Chilled",
        content: "Chicken Main Course",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#"
    },
    {
        imageSrc:
            "https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-11.jpg",
        title: "Samsa Beef",
        content: "Fried Mexican Beef",
        price: "$3.99",
        rating: "4.5",
        reviews: "34",
        url: "#"
    },
    {
        imageSrc:
            "https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-14.jpg",
        title: "Carnet Nachos",
        content: "Chilli Crispy Nachos",
        price: "$3.99",
        rating: "3.9",
        reviews: "26",
        url: "#"
    },
    {
        imageSrc:
            "https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-16.jpg",
        title: "Guacamole Mex",
        content: "Mexican Chilli",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
        url: "#"
    },
    {
        imageSrc:
            "https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-13.jpg",
        title: "Chillie Cake",
        content: "Deepfried Chicken",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",
        url: "#"
    },
    {
        imageSrc:
            "https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-17.jpg",
        title: "Nelli",
        content: "Hamburger & Fries",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#"
    },
    {
        imageSrc:
            "http://indro.iamabdus.com/v1.0/wp-content/uploads/2021/04/grant-durr-UPm28si8BRE-unsplash2.jpg.webp",
        title: "Jalapeno Poppers",
        content: "Crispy Soyabeans",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
        url: "#"
    },
    {
        imageSrc:
            "http://indro.iamabdus.com/v1.0/wp-content/uploads/2021/06/patrick-hendry-6xeDIZgoPaw-unsplash2-1.jpg",
        title: "Cajun Chicken",
        content: "Roasted Chicken & Egg",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",
        url: "#"
    }
];
