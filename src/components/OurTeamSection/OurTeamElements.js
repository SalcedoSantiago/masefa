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

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }

    @media screen  and (max-width: 768px){
        padding-top: 20px;

    }
`;


export const RowTeamMembers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

    .swiper {
        margin-left: 0!important;
        margin-right: 0!important
    } 

    @media screen  and (max-width: 1000px){
        order: 2;
    }

    @media screen  and (max-width: 768px){
        grid-template-columns:  1fr;
    }

   
`

export const CardMember = styled.div`
    padding: 5px;

    @media screen  and (max-width: 768px){
        max-width: 100%;
        margin: 0 auto;
    }
 
`

export const ImageContainer = styled.div`
    margin-bottom: 10px;
`
export const MemberImage = styled.img`
    width: 300px;
    
    @media screen  and (max-width: 1000px){
        /* width: 100%; */
        width: 100vw;
    }

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

    @media screen and (max-width: 480px){
        margin-bottom: 35px;
    }  
`

export const InfoContainer = styled.div`
    padding-left: 40px;
    @media screen  and (max-width: 1000px){
        order: 1;
        padding-left: 0px;
        text-align: center;
        /* max-width: 500px; */
        margin: 0 auto; 
        margin-bottom: 30px;
    }
`

export const InfoH2 = styled.h2`
    font-size: 26px;
    font-family: "Montserrat", "Poppins";
    line-height: 1.1;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--blue);
    
    @media screen and (max-width: 768px){
        font-size: 24px;
        text-align: center;
        font-size: 22px;
    }

   
`

export const InfoP = styled.p`
    font-family: "Poppins", Sans-serif;
    font-size: 16px;
    
    @media screen  and (max-width: 1000px){
        max-width: 680px;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`