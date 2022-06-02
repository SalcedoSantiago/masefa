import styled from "styled-components";
import { Button } from "../button";
import Fade from 'react-reveal/Fade';

/**
 * Internal dependencies
 */

const StyledContainer = styled.div`
  margin: 30px 0;
  background-color: var(--blue); 
  padding: 50px 0px 50px 0px;
  text-align: center;

  .container{
    max-width: 1280px;
    margin: 0 auto;
    text-align: start;
    display: flex;
    align-items: center;

     > div{  
      width: 50%;
     }
  }

  
  .heading{
    color:var(--white);
    font-size: 28px;
    text-align: start;
  }

  h5{
    color:var(--white);
    font-weight: 500;
  }

  .width-100{
    width: 50%;
  }

`

const PrimaryButton = styled(Button)`
  background-color: white;
  color: var(--blue);
  margin: 0 auto;
  font-size: 18px;
  font-weight: 600;
  border-radius: 2px;
  margin-left: auto;
  margin-right: 0;
  display: flex;

`

export default () => {

  return (
    <Fade>
      <StyledContainer>
        <div className="container">
          <div>
            <h3 className="heading">looking for a reliable & stable partner?</h3>
            <h5 className="sub-heading">Contact us and learn more about us</h5>
          </div>
          <div className="width-100">
            <PrimaryButton>Contact Us</PrimaryButton>
          </div>
        </div>
      </StyledContainer>
    </Fade>
  );
};
