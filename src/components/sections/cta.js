import styled from "styled-components";
import { Button } from "../button";

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
    text-align: center;
  }

  
  .heading{
    color:var(--white);
    font-size: 28px;
  }

  h5{
    color:var(--white);
    font-weight: 500;
  }
`

const PrimaryButton = styled(Button)`
  background-color: white;
  color: var(--blue);
  margin: 0 auto;
  margin-top: 50px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 2px;
`

export default () => {

  return (
    <StyledContainer>
      <div className="container">
        <h3 className="heading">looking for a reliable & stable partner?</h3>
        <h5 className="sub-heading">Contact us and learn more about us</h5>
        <div className="width-100">
          <PrimaryButton>Contact Us</PrimaryButton>
        </div>
      </div>
    </StyledContainer >
  );
};
