import styled from "styled-components";
import { motion } from "framer-motion";
import { IoMdConstruct } from "react-icons/io";

const SectionStyled = styled.div` 
    background-color: var(--blue);


    > section{
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .short-column{
        width: 30%;
        margin-right: 30px;
        p,
        h2
        {
            color: var(--white);

        }
    }

   .columns{
     display: flex;
     justify-content: space-between;
     width: 70%;
     max-width: 1280px;
     flex-wrap: wrap;
     margin: 0 auto;
 
     > .column {
       width: 100%;
       min-height: 18rem;
       @media (min-width: 768px) {
         width: calc(33% - .5rem);
       }

       &.featured{
            border-radius: 5px;
            color: #fff;
        }
     }

    
   }
 `

const CartContent = styled(motion.div)`
    height: 100%;
    padding: 50px 15px 40px 15px;
    /* box-shadow: 0px 10px 50px 0px rgb(161 161 161 / 50%); */
    /* ${({ theme }) => theme.boxShadow}; */
    cursor: pointer;
    /* border-style: solid; */
    /* border-width: 0px 0px 3px 0px; */
    /* border-color: #FF6C00; */
 

     svg{
        width: 40px;
        height: 40px;
        color: var(--orange
            );
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
 `



const Featured = () => {
    return (
        <SectionStyled>
            <section className="container">
                <div className="short-column">
                    <h2 className="">Soluciones que ofrecemos</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                    </p>
                </div>
                <div className="columns">
                    {cards.map(({ title, description, imageSrc }, i) => (
                        <div key={i} className={`column ${i == 1 && `featured`}`}>
                            <CartContent >
                                <IoMdConstruct />
                                <h2 className="title">{title}</h2>
                                <p className="desc">{description}</p>
                            </CartContent>
                        </div>
                    ))}
                </div>
            </section>
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