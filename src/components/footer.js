import React from "react";
import styled from "styled-components";

import { FaFacebookSquare } from "react-icons/fa";

const Container = styled.div``;
const Content = styled.div``
const FiveColumns = styled.div``;

const Column = styled.div``;
const CompanyColumn = styled.div``;

const ColumnHeading = styled.h5``;

const LinkList = styled.ul``;
const LinkListItem = styled.li``;
const Link = styled.a``;

const LogoContainer = styled.div``;
const LogoImg = styled.img``;
const LogoText = styled.h5``;

const CompanyAddress = styled.p``;

const SocialLinksContainer = styled.div``;
const SocialLink = styled.a``;

const CopyrightAndCompanyInfoRow = styled.div``
const CopyrightNotice = styled.div``
const CompanyInfo = styled.div``

const Divider = styled.div``

const Footer = () => {

    return (
        <Container>
            <Content>
                <FiveColumns>
                    <CompanyColumn>
                        <LogoContainer>
                            <LogoImg src="https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/house-logo1-80x34.png" />
                            <LogoText>Treact Inc.</LogoText>
                        </LogoContainer>
                        <CompanyAddress>
                            123 Road, New Startup Building
                            Carter Road, San Francisco
                            California 40234
                        </CompanyAddress>
                        <SocialLinksContainer>
                            <SocialLink href="https://facebook.com">
                                <FaFacebookSquare />
                            </SocialLink>
                            <SocialLink href="https://twitter.com">
                                <FaFacebookSquare />
                            </SocialLink>
                            <SocialLink href="https://youtube.com">
                                <FaFacebookSquare />
                            </SocialLink>
                        </SocialLinksContainer>
                    </CompanyColumn>
                    <Column>
                        <ColumnHeading>Quick Links</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                <Link href="#">Blog</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">FAQs</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Support</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">About Us</Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Product</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                <Link href="#">Log In</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Personal</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Business</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Team</Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Legal</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                <Link href="#">GDPR</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Privacy Policy</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Terms of Service</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Disclaimer</Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Contact</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                +1 (234) (567)-8901
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="mailto:support@servana.com">support@servana.com</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Sales</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="#">Report Abuse</Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                </FiveColumns>
                <Divider />
                <CopyrightAndCompanyInfoRow>
                    <CopyrightNotice>&copy; Copyright 2020, Treact Inc.</CopyrightNotice>
                    <CompanyInfo>An Internet Company.</CompanyInfo>
                </CopyrightAndCompanyInfoRow>
            </Content>
        </Container>
    );
};


export default Footer;