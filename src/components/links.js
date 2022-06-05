import { IoIosMail, IoMdPin, IoIosCall, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoWhatsapp, IoIosResize } from 'react-icons/io'
import styled from "styled-components";


const InfoContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    background-color: var(--orange);

    @media (max-width: 768px) {
        display: none;
    }

    > div{
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

    }

    a{
        text-decoration: none;
        cursor: pointer;
    }

    .info-contact{
        display: flex;
        align-items: center;
        
        p{
        display: inline-block;
        font-size: 14px;
        margin-right: 20px;
        margin-top: 0;
        color: var(--white);
        margin-bottom: 0;
        display: flex;
        align-items: center;

        a{
            color:  var(--white);
        }
        svg{
            width: 18px;
            height: 18px;
            margin-right: 7px;
            path{
                fill: var(--white);
            }
        }
    }
    }

    .social-links{
        display: flex;
        align-items: center;

        p{
            margin-left: 18px;
            display: inline;
            color: var(--white);
            margin-top: 0;
            margin-bottom: 0;
            line-height: 1;

            a{
                color: var(--white);
            }
        }

        svg{
            width: 18px;
            height: 18px;
            path{
                fill: var(--white);
            }
        }
    }
`



const HeaderInfo = () => {
    return (
        <InfoContainer>
            <div>
                <div className='info-contact'>
                    <p>
                        <IoIosMail />
                        <a href='#'>
                            masefa@gmail.com
                        </a>
                    </p>
                    <p>
                        <IoMdPin /> 1st Floor New World
                    </p>
                    <p>
                        <IoIosCall />
                        <a>
                            +880 320 432 242
                        </a>
                    </p>
                </div>
                <div className='social-links'>
                    <p>
                        <a>
                            <IoLogoFacebook />
                        </a>
                    </p>
                    <p>
                        <a>
                            <IoLogoTwitter />
                        </a>
                    </p>
                    <p>
                        <a>
                            <IoLogoLinkedin />
                        </a>
                    </p>
                    <p>
                        <a>
                            <IoLogoWhatsapp />
                        </a>
                    </p>
                </div>
            </div>
        </InfoContainer>
    )
}

export default HeaderInfo