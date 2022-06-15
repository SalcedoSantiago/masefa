import styled from 'styled-components';


export const OurTeamContainer = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 120px 2rem;
`

export const OurTeamWrapper = styled.div`
    padding-top: 60px;
    padding-left: 2rem;
    padding-right: 2rem;
`;


export const RowTeamMembers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .swiper {
        margin-left: 0!important;
        margin-right: 0!important
    } 
   
`

export const CardMember = styled.div`
    padding: 5px;
    margin-right: 10px;
    width: 300px;

    @media screen  and (max-width: 768px){
        max-width: 100%;
        margin: 0 auto;
        padding-bottom: 50px;
        margin-right:15px;
    }
 
`

export const ImageContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

`
export const MemberImage = styled.img`
    width: 300px;
    @media screen  and (max-width: 1000px){
        /* width: 100%; */
    width: 250px;

        /* width: 100vw; */
    }
    @media screen and (max-width: 768px){
        width: 350px;
    }


    @media screen and (max-width: 480px){
        width: 100%; 
        margin: 0 2px;
    }
`

export const MemberTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 5px;

    
    @media screen and (max-width: 480px){
        font-size: 1.2rem;
    }
`

export const MemberDesc = styled.h3`
    font-family: "Poppins", Sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
    @media screen and (max-width: 480px){
        font-size: 11px;
    }
`

export const MemberInfo = styled.p`
    font-family: "Poppins", Sans-serif;
    font-size: 15px;

    @media screen and (max-width: 480px){
        margin-bottom: 35px;
        font-size: 13px;
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
    text-align: center;
    max-width: 680px;
    margin: 0 auto;
    
    @media screen  and (max-width: 1000px){
    }

    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`