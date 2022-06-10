import { Heading } from '../heading';
import Team from '../../assets/images/team.jpg'
import {
    OurTeamContainer,
    OurTeamWrapper,
    RowTeamMembers,
    CardMember,
    ImageContainer,
    MemberImage,
    MemberTitle,
    MemberDesc,
    MemberInfo,
    InfoContainer,
    InfoH2,
    InfoP
} from './OurTeamElements'

const OurTeam = () => {
    return (
        <OurTeamContainer>
            <Heading>Nuestro Equipo</Heading>
            <OurTeamWrapper>
                <RowTeamMembers>
                    <CardMember>
                        <ImageContainer>
                            <MemberImage src="https://websitedemos.net/criminal-lawyer-04/wp-content/uploads/sites/785/2021/03/team-06-free-img.jpg" />
                        </ImageContainer>
                        <MemberTitle>Nikolas tesla</MemberTitle>
                        <MemberDesc>Director</MemberDesc>
                        <MemberInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</MemberInfo>
                    </CardMember>
                    <CardMember>
                        <ImageContainer>
                            <MemberImage src="https://websitedemos.net/criminal-lawyer-04/wp-content/uploads/sites/785/2021/03/team-06-free-img.jpg" />
                        </ImageContainer>
                        <MemberTitle>Nikolas tesla</MemberTitle>
                        <MemberDesc>Director</MemberDesc>
                        <MemberInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</MemberInfo>
                    </CardMember>
                </RowTeamMembers>
                <InfoContainer>
                    <InfoH2>
                    Lorem ipsum dolor sit amet
                    </InfoH2>
                    <InfoP>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                    </InfoP>
                </InfoContainer>
            </OurTeamWrapper>
        </OurTeamContainer>
    )
}

export default OurTeam