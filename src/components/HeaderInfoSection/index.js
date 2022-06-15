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
                            <i class="fa-solid fa-envelope"></i><p>masefa@gmail.com</p>
                        </SocialLink>
                    </Social>

                    <Social href='112509942'>
                        <SocialLink>
                            <i class="fa-solid fa-phone"></i><p>1120334455</p>
                        </SocialLink>
                    </Social>
                </SocialContianer>
                <IconsContainer>
                    <IconWrapper>
                        <i class="fa-brands fa-facebook-f"></i>
                    </IconWrapper>
                    <IconWrapper>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </IconWrapper>
                    <IconWrapper>
                        <i class="fa-brands fa-instagram"></i>
                    </IconWrapper>
                </IconsContainer>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default HeaderInfo;