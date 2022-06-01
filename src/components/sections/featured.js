import styled from "styled-components";
import { motion } from "framer-motion";
import { IoMdConstruct } from "react-icons/io";

const SectionStyled = styled.section` 
   .columns{
     display: flex;
     justify-content: space-between;
     width: 100%;
     max-width: 1280px;
     flex-wrap: wrap;
     margin: 0 auto;
 
     > .column {
       width: 100%;
       min-height: 18rem;
       @media (min-width: 768px) {
         width: calc(33% - 2rem);
       }
     }
   }
 `


const CartContent = styled(motion.div)`
    height: 100%;
    padding: 50px 50px 75px 50px;
    box-shadow: 0px 10px 50px 0px rgb(161 161 161 / 50%);
    border-radius: 0px 0px 0px 0px;
    /* ${({ theme }) => theme.boxShadow}; */
    cursor: pointer;
    border-style: solid;
    border-width: 0px 0px 3px 0px;
    border-color: #FF6C00;
    border-radius: 0px 0px 0px 0px;
 

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
        color: var(--blue);
     }
 
     .desc{
        font-family: "Poppins", Sans-serif;
        font-size: 14px;
        font-weight: 400;
     }
 `



const Featured = () => {
    return (
        <SectionStyled>
            <div className="header">
                <h2 className="test-heading">Soluciones que ofrecemos</h2>
            </div>
            {/* <div className="colums-wrapper"> */}
            <div className="columns">
                {cards.map(({ title, description, imageSrc }, i) => (
                    <div key={i} className="column">
                        <CartContent >
                            <IoMdConstruct />
                            <h2 className="title">{title}</h2>
                            <p className="desc">{description}</p>
                        </CartContent>
                    </div>
                ))}
            </div>
            {/* </div> */}
        </SectionStyled >
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