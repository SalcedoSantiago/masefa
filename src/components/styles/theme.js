import { css } from 'styled-components';

const button = css`
  font-family: "Montserrat", Sans-serif;
  color: #fff;
  background-color: var(--orange);
  border: 2px solid var(--orange);
  font-size: var(--fz-md);
  line-height: 2em;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
  padding: 5px 20px;
  letter-spacing: 0.65px;
  width: 80%;
  margin: 0 auto;
  display: block;


  &:hover{
    background-color: transparent;
    color: var(--orange);
    
  }

  &:after {
    display: none !important;
  }

  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
    display: block;
  }
   
  @media (min-width: 1024px) {
    width: auto;
    margin-right: 0;
    margin-left: 0;
  }
`;


export const theme = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `,

  flexStart: css`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,


  button,

  boxShadow: css`
  box-shadow: 0 0 35px 0 rgb(93 114 128 / 15%);
  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;

    &:hover,
    &:focus {
      box-shadow: 0 0 45px -10px rgb(93 114 128 / 15%);
    }
  `,


};

