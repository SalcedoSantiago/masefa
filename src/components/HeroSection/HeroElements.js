import styled from 'styled-components';




export const StyledSection = styled.div`
    height: 60vh;
    background-color: var(--blue);
`

export const StyledSlider = styled.div`
    height: 100%;

    > div.slider{
        height: 100%;
        .previousButton,
        .nextButton
        {
            svg polygon{
                fill: var(--white);
            }
        }
    }

  
`

export const Overlay = styled.div`
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: #0000005e;

    .container{
        margin: 0 auto;
        max-width: 1280px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;

        .heading,
        .subheading
        {
            text-align: start;
            color: #FFFFFF;
            font-size: 38px;
            font-weight: 600;
            line-height: 1em;
            a{
                text-decoration: none;
                &:hover{
                    cursor: pointer;
                    color: var(--orange);
                }
            }
        }
        .smart-text{
            margin: 10px 0;
            color: #FFFFFF;
            font-family: "Montserrat", Sans-serif;
            font-size: 18px;
            font-weight: 500;
            text-transform: uppercase;
            line-height: 1.2222em;
        }

        span{
            display: block;
            color: #FFFFFF;
            font-family: "Roboto", Sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.83em;
        }

        .flex{
            ${({ theme }) => theme.flexStart};
            gap: 20px;
            margin-top: 20px;

            button{
            ${({ theme }) => theme.button};
            }
        }

    }

`