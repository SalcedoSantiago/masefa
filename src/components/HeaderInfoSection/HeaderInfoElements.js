import styled from 'styled-components';



export const InfoContainer = styled.div`
    background-color: var(--orange);
`

export const InfoWrapper = styled.div`
    max-width: 1280px;
    overflow: hidden;
    padding: 15px 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const SocialContianer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
`


export const Social = styled.a`
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }

`

export const SocialLink = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
    fill: var(--white);


    p{
        color: white;
        line-height: 1.2;
        font-weight: 500;
        font-size: 15px;
    }

`


export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const IconWrapper = styled.div`
    color: var(--white);
    fill: var(--white);
    line-height: 0;
    svg{
        width: 24px;
    }
`;