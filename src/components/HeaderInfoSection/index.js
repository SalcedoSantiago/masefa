import {
    InfoContainer,
    InfoWrapper,
    SocialContianer,
    Social,
    SocialLink,
    IconsContainer,
    IconWrapper,
} from './HeaderInfoElements';

import 'boxicons'

const HeaderInfo = () => {


    return (
        <InfoContainer>
            <InfoWrapper>
                <SocialContianer>
                    <Social>
                        <SocialLink>
                            <box-icon name='envelope'></box-icon><p>masefa@gmail.com</p>
                        </SocialLink>
                    </Social>

                    <Social>
                        <SocialLink>
                        <box-icon name='phone' type='solid' ></box-icon> <p> 1120334455</p>
                        </SocialLink>
                    </Social>
                </SocialContianer>
                <IconsContainer>
                    <IconWrapper>
                        <box-icon type='logo' name='facebook'></box-icon>
                    </IconWrapper>
                    <IconWrapper>
                        <box-icon name='linkedin' type='logo'></box-icon>
                    </IconWrapper>
                    <IconWrapper>
                    <box-icon name='whatsapp' type='logo' ></box-icon>
                    </IconWrapper>
                </IconsContainer>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default HeaderInfo;