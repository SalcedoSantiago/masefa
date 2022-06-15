import styled from "styled-components";
import { Button } from "./button";
import Fade from 'react-reveal/Fade';



const CtaContainer = styled.div`
  margin: 30px 0;
  max-width: 100%;
  background-color: var(--blue); 
  padding: 70px 2rem 70px 2rem;
  text-align: center;
`;


const Row = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    text-align: start;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const Column = styled.div`
    width: 50%;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

const Heading = styled.h2`
    color:var(--white);
    font-size: 28px;
    text-align: start;

    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 26px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
`

const SubHeading = styled.h4`
    color: var(--white);
    font-weight: 500;
    text-align: start;

    @media screen and (max-width: 768px){
        text-align: center;
    }
`

const BtnWrapper = styled.div`
    display: flex;
    justify-content: end;
    width: 50%;

    ${Button}{
      font-weight: 600;
      width: 200px;
    }

    @media screen and (max-width: 768px ) {
        justify-content: center;
        margin-top: 20px;
        width: 100%;

        ${Button}{
            width: 80%;
        }

    }
    @media screen and (max-width: 480px ) {
        justify-content: center;
        width: 100%;
        
        margin-top: 10px;

        ${Button}{
            width: 100%;
        }
    }
`


export default () => {

    return (
        <Fade right>
            <CtaContainer >
                <Row>
                    <Column>
                        <Heading>looking for a reliable & stable partner?</Heading>
                        <SubHeading>Contact us and learn more about us</SubHeading>
                    </Column>
                    <BtnWrapper>
                        <Button to="contact">Contact Us</Button>
                    </BtnWrapper>
                </Row>
            </CtaContainer>
        </Fade >
    );
};
