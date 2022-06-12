import { useState, useEffect } from 'react';

/**
 * External dependencies
 */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

/**
 * Internal dependencies
 */
import { Heading, SubHeading } from '../heading';
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

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const OurTeam = () => {
    const { width } = useWindowDimensions();

    return (
        <OurTeamContainer>
            <Heading>Nuestro Equipo</Heading>
            <OurTeamWrapper>
                <RowTeamMembers>
                    {width <= 768 &&
                        <Swiper
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <CardMember>
                                    <ImageContainer>
                                        <MemberImage src="https://websitedemos.net/criminal-lawyer-04/wp-content/uploads/sites/785/2021/03/team-06-free-img.jpg" />
                                    </ImageContainer>
                                    <MemberTitle>Nikolas tesla</MemberTitle>
                                    <MemberDesc>Director</MemberDesc>
                                    <MemberInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</MemberInfo>
                                </CardMember>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardMember>
                                    <ImageContainer>
                                        <MemberImage src="https://websitedemos.net/criminal-lawyer-04/wp-content/uploads/sites/785/2021/03/team-06-free-img.jpg" />
                                    </ImageContainer>
                                    <MemberTitle>Nikolas tesla</MemberTitle>
                                    <MemberDesc>Director</MemberDesc>
                                    <MemberInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</MemberInfo>
                                </CardMember>
                            </SwiperSlide>
                        </Swiper>
                        ||
                        <>
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
                        </>
                    }
                </RowTeamMembers>
                <InfoContainer>
                    <SubHeading>
                        Lorem ipsum dolor sit amet
                    </SubHeading>
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