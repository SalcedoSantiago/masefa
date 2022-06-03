import styled from "styled-components";
import { Button } from "../button";
import Fade from 'react-reveal/Fade';

/**
 * Internal dependencies
 */

const StyledContainer = styled.div`
  margin: 30px 0;
  max-width: 100%;
  background-color: var(--blue); 
  padding: 70px 2rem 70px 2rem;
  text-align: center;


  .columns{
    max-width: 1280px;
    margin: 0 auto;
    text-align: start;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

     > div{  
        width: 100%;

        @media (min-width: 1024px) {
          width: 50%;
        }
     }
  }

  
  .heading{
    color:var(--white);
    font-size: 28px;
    text-align: center;
    @media (min-width: 1024px) {
      text-align: start;
    }
  }

  h5{
    color:var(--white);
    font-weight: 500;
    text-align: center;
    @media (min-width: 1024px) {
      text-align: start;
    }
  }
`

const PrimaryButton = styled(Button)`
  display: flex;
  background-color: white;
  color: var(--blue);
  font-size: 18px;
  font-weight: 600;
  border-radius: 2px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;

  @media (min-width: 1024px) {
      text-align: start;
      margin-left: auto;
      margin-right: 0;
      margin-top: 0;
    }

`




export default () => {

  return (
    <Fade>
      <StyledContainer>
        <div className="columns">
          <div>
            <h3 className="heading">looking for a reliable & stable partner?</h3>
            <h5 className="sub-heading">Contact us and learn more about us</h5>
          </div>
          <div className="">
            <PrimaryButton>Contact Us</PrimaryButton>
          </div>
        </div>
      </StyledContainer>
    </Fade>
  );
};
