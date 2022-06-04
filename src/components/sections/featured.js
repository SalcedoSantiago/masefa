import styled from "styled-components";
import { motion } from "framer-motion";
import { IoMdConstruct } from "react-icons/io";
import Fade from 'react-reveal/Fade';

const SectionStyled = styled.div` 
    background-color: var(--blue);
    padding: 0 2rem;

    .header{
        margin-bottom: 80px;
    }

    h2 {
        color: var(--white);
    }

   .columns{
     display: flex;
     /* justify-content: space-between; */
     justify-content: center;
     width: 100%;
     max-width: 1280px;
     flex-wrap: wrap;
     margin: 0 auto;
 
     > .column {
       /* min-height: 18rem; */
       width: 100%;

       @media (min-width: 768px) {
         width: calc(33% - .5rem);
       }

       @media (min-width: 1024px) {
         width: calc(25% - .5rem);
       }

       &.featured{
            border-radius: 5px;
            color: #fff;
        }
     }
   }
`;

const CartContent = styled(motion.div)`
    height: 100%;
    padding: 20px 15px 40px 15px;
    text-align: center;

    @media (min-width: 768px) {
        /* text-align: start; */
    }

    svg{
    width: 40px;
    height: 40px;
    color: var(--orange);
    margin-bottom: 10px;
    }

    .title{
    padding: 0px 0px 0px 0px;
    font-family: "Poppins", Sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: var(--white);
    }

    .desc{
    font-family: "Poppins", Sans-serif;
    font-size: 14px;
    color: var(--white);
    font-weight: 400;
    }
`;



const Featured = () => {
    return (
        <Fade>
            <SectionStyled >
                <section>
                    <div className="header">
                        <h2 className="heading">Soluciones que ofrecemos</h2>
                    </div>
                    <div className="columns">
                        {cards.map(({ title, description, imageSrc }, i) => (
                            <div key={i} className={`column ${i === 1 && `featured`}`}>
                                <CartContent >
                                    <IoMdConstruct />
                                    <h2 className="title">{title}</h2>
                                    <p className="desc">{description}</p>
                                </CartContent>
                            </div>
                        ))}
                    </div>
                </section>
            </SectionStyled >
        </Fade>
    )
}



const cards = [
    {
        imageSrc: 'https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-3.jpg',
        title: "Secure",
        description: "We strictly only deal with vendors that provide top notch security.",
        url: "#"
    },
    {
        imageSrc: 'https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-3.jpg',
        title: "24/7 Support",
        description: "Lorem ipsum donor amet siti ceali placeholder text",
        url: "#"
    },
    {
        imageSrc: 'https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-3.jpg',
        title: "Customizable",
        description: "Lorem ipsum donor amet siti ceali placeholder text",
        url: "#"
    }
]

export default Featured;