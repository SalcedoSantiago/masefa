import styled from 'styled-components';


export const OurTeamContainer = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 120px 2rem;
`

export const OurTeamWrapper = styled.div`
    padding-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

`;


export const RowTeamMembers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
`

export const CardMember = styled.div`
    padding: 5px;
`

export const ImageContainer = styled.div`
    margin-bottom: 10px;
`
export const MemberImage = styled.img`
    width: 300px;
`

export const MemberTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 5px;
`

export const MemberDesc = styled.h3`
    font-family: "Poppins", Sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
`

export const MemberInfo = styled.p`
    font-family: "Poppins", Sans-serif;
    font-size: 15px;
`

export const InfoContainer = styled.div`
    padding-left: 40px;
`

export const InfoH2 = styled.h2`
    font-family: "Montserrat", Sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
`

export const InfoP = styled.p`
    font-family: "Poppins", Sans-serif;
    font-size: 16px;
`