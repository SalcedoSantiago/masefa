import styled from "styled-components"
import { IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'
import Fade from 'react-reveal/Fade';
import Team from '../../assets/images/team.jpg'



const StyledSection = styled.section`
    padding-left:  2rem;
    padding-right:  2rem;

    .header{
        margin-bottom: 80px;
    }

    .columns{
        display: flex;
        flex-wrap: wrap;

    }
    
`
const TeamColumn = styled.div`
    ${({ theme }) => theme.flexStart};
    width: 100%;
    @media (min-width: 1024px) {
        width: 60%;
    }
`

const TeamContainer = styled.div`
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* gap: 20px; */

    @media (min-width: 768px) {
        width: 50%;
        padding: 0 30px 35px 30px;
    }

    > div{
        width: calc(50% - 20px);
        margin-bottom: 40px;
        
        @media (min-width: 768px) {
            width: 100%;
            margin-bottom: 0;

        }
    }

    .image-container{
        border-radius: 0.75rem;
        margin-right: 40px;

        @media (min-width: 768px) {
            margin-right: 0;
        }

        img{
            @media (min-width: 768px) {
                aspect-ratio: 1/1;
            }
            object-fit: cover;
        }
    }

    .content{
        /* padding: 10px 20px; */

        .name{
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 5px;
        }
        .position{
            font-size: 16px;
            font-weight: 500;
            color: var(--blue);
            margin-bottom: 7px;
        }
        .desc{
            padding-top: 10px;
            font-size: 15px;
            line-height:1.5;
        }

    }
`

const Links = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
`

const Link = styled.li`
        svg{
            width: 30px;
            height: 30px;
            path{
                fill: var(--blue);
            }
        }
`

const SectionDescription = styled.div`
    width: 100%;
    margin-bottom: 80px;
    margin-left: 3rem;
    margin-right: 3rem ;
    
    @media (min-width: 1024px) {
        width: 40%;
        margin-bottom: 0px;
        margin-left: 0;
        margin-right: 0 ;
    }

    h3{
        font-size: 26px;
        text-align: center;
        font-weight: 700;
        color: var(--blue);
    }

    p{
        text-align: center;
        @media (min-width: 1024px) {
            text-align: start;
        }
    }
`


export default () => {
    return (
        <Fade>
            <StyledSection id="equipo">
                <div className="header">
                    <h2 className="heading">Nustro Equipo</h2>
                </div>
                <div className="columns">
                    <SectionDescription>
                        <h3>El equipo mas calificado</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </SectionDescription>
                    <TeamColumn>
                        {EQUIPO.map(({ name, description, img, position }, index) =>
                        (
                            <TeamContainer key={index}>
                                <div className="image-container">
                                    <img className="image" src={img} />
                                </div>
                                <div className="content">
                                    <h3 className="name">{name}</h3>
                                    <span className="position">{position}</span>
                                    <p className="desc">{description}</p>
                                    <Links>
                                        <Link>
                                            <a>
                                                <IoLogoLinkedin />
                                            </a>
                                            <a>
                                                <IoLogoFacebook />
                                            </a>
                                        </Link>
                                    </Links>
                                </div>
                            </TeamContainer>
                        ))
                        }
                    </TeamColumn>
                </div>
            </StyledSection>
        </Fade>
    )
}


const EQUIPO = [
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        position: 'Director',
        img: Team,
        redes: {
            linkedin: '',
            facebook: '',
            intagram: ''
        }
    },
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        position: 'Director',
        img: Team,
        redes: {
            linkedin: '',
            facebook: '',
            intagram: ''
        }
    }
]

