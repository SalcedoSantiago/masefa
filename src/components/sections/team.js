import styled from "styled-components"
import { IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io'


const StyledSection = styled.section`


    .header{
        margin-bottom: 80px;
    }

    .columns{
        display: flex;
        flex-wrap: wrap;

    }
    
`
const TeamColumn = styled.div`
    width: 60%;
    ${({ theme }) => theme.flexStart};

    > div{
        max-width: 1024px;
        width: 100%;

        @media (min-width: 768px) {
            width: 50%;
        }
    }

`

const TeamContainer = styled.div`
    padding: 0 30px 35px 30px;
    border-radius: 5px;
    width: 400px;


    .image-container{
        border-radius: 0.75rem;
        width: 100%;

        img{
            aspect-ratio: 1/1;
            object-fit: cover;
        }
    }

    .content{
        width: 100%;
        padding: 10px 20px;

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
    width: 40%;
    padding-left: 40px;

    h3{
        font-size: 26px;
        text-align: center;
        font-weight: 700;
        color: var(--blue);
    }
`


export default () => {
    return (
        <StyledSection>
            <div className="header">
                <h2 className="heading">Nustro Equipo</h2>
            </div>
            <div className="columns">
                <TeamColumn>
                    {EQUIPO.map(({ name, description, img, position }, index) =>
                    (
                        <div key={index}>
                            <TeamContainer>
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
                        </div>
                    ))
                    }
                </TeamColumn>
                <SectionDescription>
                    <h3>El equipo mas calificado</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </SectionDescription>
            </div>
        </StyledSection>
    )
}


const EQUIPO = [
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        position: 'Director',
        img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/06/instructor-1-free-img.jpg',
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
        img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/06/instructor-1-free-img.jpg',
        redes: {
            linkedin: '',
            facebook: '',
            intagram: ''
        }
    }
]

