import {
    InfoContainer,
    InfoWrapper,
    SocialContianer,
    Social,
    SocialLink,
    IconsContainer,
    IconWrapper,
} from './HeaderInfoElements';


const HeaderInfo = () => {


    return (
        <InfoContainer>
            <InfoWrapper>
                <SocialContianer>
                    <Social href='masefa@gmail.com'>
                        <SocialLink>
                            i<p>masefa@gmail.com</p>
                        </SocialLink>
                    </Social>

                    <Social href='112509942'>
                        <SocialLink>
                            i <p> 1120334455</p>
                        </SocialLink>
                    </Social>
                </SocialContianer>
                <IconsContainer>
                    <IconWrapper>
                        facebook
                    </IconWrapper>
                    <IconWrapper>
                        linkedin
                    </IconWrapper>
                    <IconWrapper>
                        whatsapp
                    </IconWrapper>
                </IconsContainer>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default HeaderInfo;