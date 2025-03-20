import React from 'react';
import styled from 'styled-components';
import mainPhoto from '../../assets/images/photo.png'
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import { theme } from '../../components/styles/Theme';
import { Icon } from '../../components/icon/Icon';
import { Profile } from '../sections/profile/Profile';
import { ProfileMobile } from '../sections/profileMobile/ProfileMobile';
import headerBg from '../../assets/images/header/HeaderBg.png'
import headerBgMob from '../../assets/images/header/headerMobBg.png'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';



export const Header = () => {
    return (

        <StyledHeader id={'header'}>
            <Profile />
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <ProfileMobile />
                    <TextBlock>
                        <Name>I’m Rayan Adlrdard</Name>
                        <Title>
                            <p>Front-end Developer</p>
                            <Typewriter
                                options={{
                                    strings: [
                                        `<span style="color: ${theme.colors.secondaryBg}">Front-end</span> <span style="color: ${theme.colors.title}">Developer</span>`
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</Text>
                        <Button>HIRE ME <Icon iconId={'arrowGo'} width={'16px'} height={'16px'} viewBox={' 0 0 16 16'} /></Button>
                    </TextBlock>
                    <Tilt
                        tiltEnable={false}
                        glareEnable={true}
                        glareMaxOpacity={1}
                        glareColor="white"
                        glarePosition="bottom"
                        glareBorderRadius="20px"
                    >
                        <Photo src={mainPhoto} />
                    </Tilt>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
};





const StyledHeader = styled.header`
    display: flex;

    
    > div > div {
        background-color: #fff;
        position: relative;
        background-image: url(${headerBg});
        background-repeat: no-repeat;
        background-size: cover;

        @media ${theme.media.tablet} {
        background-image: url(${headerBgMob});
    }
    }

   
    
`

const Name = styled.span`
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 48px;
    color: ${theme.colors.title};
`

const TextBlock = styled.div`
    margin: 93px 0 60px 34px;
    max-width: 510px;
    width: 100%;

    @media ${theme.media.mobile} {
        margin: 100px 30px 50px 30px;
    }
`

const Title = styled.h1`
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    p {
        display: none;
    }
    font-size: 48px;

    @media ${theme.media.mobile} {
        min-height: 120px;
    }
`

const Text = styled.p`
    margin-top: 18px;
    max-width: 424px;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;

    @media ${theme.media.mobile} {
        margin: 90px 0 0 0;
    }
`

const Button = styled.button`
    padding: 16px 32px;
    border-radius: 5px;
    background:  #FFB400;
    display: flex;
    align-items: center;
    gap: 9px;
    font-weight: 500;
    font-size: 16px;
    color: ${theme.colors.title};
    margin-top: 25px;
    @media ${theme.media.mobile} {
        margin: 35px 0 0 0;
    }
`

const Photo = styled.img`
    width: 325.719px;
    height: 459.09px;
    object-fit: cover;
`