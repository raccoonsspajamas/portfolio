import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../assets/images/asidePhoto.jpg'
import { Icon } from '../../../components/icon/Icon';
import { ProgressBarBlock } from './ProgressBarBlock';
import { theme } from '../../../components/styles/Theme';




export const ProfileMobile = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <StyledProfileMobile >

            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>

            <MobileMenu isOpen={menuIsOpen}>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'} maxWidth={'220px'}>

                    <BlockWrapper>
                        <FlexWrapper justify={'center'} direction={'column'} align={'center'}>
                            <PhotoBox>
                                <AsidePhoto src={photo} alt="" />
                                <Status />
                            </PhotoBox>
                            <Name>Rayan Adlardard</Name>
                            <Description>Font-end Developer</Description>
                            <SocialList>
                                <SocialListItem>
                                    <SocialLink>
                                        <Icon iconId={'facebook'} width={'24'} height={'24'} viewBox={'0 0 24 24'} />
                                    </SocialLink>
                                </SocialListItem>
                                <SocialListItem>
                                    <SocialLink>
                                        <Icon iconId={'instagram'} width={'24'} height={'24'} viewBox={'0 0 24 24'} />
                                    </SocialLink>
                                </SocialListItem>
                                <SocialListItem>
                                    <SocialLink>
                                        <Icon iconId={'twitter'} width={'24'} height={'24'} viewBox={'0 0 24 24'} />
                                    </SocialLink>
                                </SocialListItem>
                                <SocialListItem>
                                    <SocialLink>
                                        <Icon iconId={'dribbble'} width={'24'} height={'24'} viewBox={'0 0 24 24'} />
                                    </SocialLink>
                                </SocialListItem>
                                <SocialListItem>
                                    <SocialLink>
                                        <Icon iconId={'youtube'} width={'24'} height={'24'} viewBox={'0 0 24 24'} />
                                    </SocialLink>
                                </SocialListItem>
                                <SocialListItem>
                                    <SocialLink>
                                        <Icon iconId={'linkedin'} width={'24'} height={'24'} viewBox={'0 0 24 24'} />
                                    </SocialLink>
                                </SocialListItem>
                            </SocialList>
                        </FlexWrapper>
                    </BlockWrapper>




                    <BlockWrapper>
                        <FlexWrapper direction={'column'} gap={'10px'}>
                            <FlexWrapper justify={'space-between'}>
                                <PersonalInfoTitle>Age:</PersonalInfoTitle>
                                <PersonalInfoText>24</PersonalInfoText>
                            </FlexWrapper>
                            <FlexWrapper justify={'space-between'}>
                                <PersonalInfoTitle>Residence:</PersonalInfoTitle>
                                <PersonalInfoText>BD</PersonalInfoText>
                            </FlexWrapper>
                            <FlexWrapper justify={'space-between'} align={'center'}>
                                <PersonalInfoTitle>Freelance:</PersonalInfoTitle>
                                <PersonalInfoText><span>Available</span></PersonalInfoText>
                            </FlexWrapper>
                            <FlexWrapper justify={'space-between'}>
                                <PersonalInfoTitle>Address:</PersonalInfoTitle>
                                <PersonalInfoText>Dhaka,Bangladesh</PersonalInfoText>
                            </FlexWrapper>
                        </FlexWrapper>
                    </BlockWrapper>


                    <BlockWrapper>
                        <ProgressTitle>Languages</ProgressTitle>
                        <ProgressBarBlock barName={'Bangla'} barValue={'100%'} progress={'100%'} />
                        <ProgressBarBlock barName={'English'} barValue={'80%'} progress={'80%'} />
                        <ProgressBarBlock barName={'Spanish'} barValue={'60%'} progress={'60%'} />
                    </BlockWrapper>

                    <BlockWrapper>
                        <ProgressTitle>Skills</ProgressTitle>
                        <ProgressBarBlock barName={'Html'} barValue={'90%'} progress={'90%'} />
                        <ProgressBarBlock barName={'CSS'} barValue={'85%'} progress={'85%'} />
                        <ProgressBarBlock barName={'Js'} barValue={'80%'} progress={'80%'} />
                        <ProgressBarBlock barName={'PHP'} barValue={'75%'} progress={'75%'} />
                        <ProgressBarBlock barName={'WordPress'} barValue={'85%'} progress={'85%'} />
                    </BlockWrapper>


                    <BlockWrapper>
                        <ProgressTitle>Extra Skills</ProgressTitle>
                        <Skills>
                            <Icon iconId={'skill'} width={'15px'} height={'15px'} viewBox={'0 0 15px 15px'} />
                            <Skill>
                                Bootstrap, Materialize
                            </Skill>
                        </Skills>
                        <Skills>
                            <Icon iconId={'skill'} width={'15px'} height={'15px'} viewBox={'0 0 15px 15px'} />
                            <Skill>
                                Stylus, Sass, Less
                            </Skill>
                        </Skills>
                        <Skills>
                            <Icon iconId={'skill'} width={'15px'} height={'15px'} viewBox={'0 0 15px 15px'} />
                            <Skill>
                                Gulp, Webpack, Grunt
                            </Skill>
                        </Skills>
                        <Skills>
                            <Icon iconId={'skill'} width={'15px'} height={'15px'} viewBox={'0 0 15px 15px'} />
                            <Skill>
                                GIT Knowledge
                            </Skill>
                        </Skills>
                    </BlockWrapper>
                    <ProfileButton href="">Download cv <Icon iconId={'download'} width={'14px'} height={'16px'} viewBox={'0 0 14px 16px'} /></ProfileButton>
                </FlexWrapper>
            </MobileMenu>
        </StyledProfileMobile>
    );
};


const StyledProfileMobile = styled.aside`
       display: none;
    @media ${theme.media.primary}{
        display: block;
    }
        
`

const MobileMenu = styled.div<{ isOpen: boolean }>`
        position: fixed;
        overflow-y: scroll;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(255, 255, 255);
        max-width: 375px;
        display: none;
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            padding: 50px 75px 95px 75px;

            @media ${theme.media.primary} {
        display: block;
    }
        `}
`


const BurgerButton = styled.button<{ isOpen: boolean }>`
    
    position: fixed;
    width: 30px;
    height: 20px;
    top: 35px;
    left: 30px;
    z-index: 999999999;

    @media ${theme.media.primary} {
        position: absolute;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
          left: 322px;
    `}

    span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${theme.colors.secondaryBg};

        ${props => props.isOpen && css<{ isOpen: boolean }>`
           background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.secondaryBg};
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(-45deg) translateY(0);
        `}
        }

        &::after {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.secondaryBg};
            transform: translateY(8px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0);
            position: relative;
            top: -2px;
        `}
        }
    }

`



const PhotoBox = styled.div`
    position: relative;
`

const Status = styled.div`
    width: 16px;
    height: 16px;
    background: #7EB942;
    z-index: 1;
    position: absolute;
    border-radius: 50%;
    right: 10px;
    bottom: 20px;
`

const AsidePhoto = styled.img`
    width: 150px;
    border-radius: 150px;
    height: 150px;
`

const Name = styled.h6`
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
    margin: 30px 0 0 0;
`

const Description = styled.span`
    margin-top: 15px;
`

const BlockWrapper = styled.div`
    padding: 25px 0;

    border-bottom: 1px solid #F0F0F6;
    width: 100%;
    display: flex;
    flex-direction: column;
    
`



const SocialList = styled.ul`
    display: flex;
    gap: 15px;
    padding: 15px 0 0 0;
    
`



const SocialListItem = styled.li`
`

const SocialLink = styled.a`
    
`

const PersonalInfoText = styled.span`
    color: ${theme.colors.title};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px; 
    text-transform: capitalize;
    span {
        color: #7EB942;
    }
`



const PersonalInfoTitle = styled.span`
    width: fit-content;
    padding: 1px 3px;
    height: 24px;
    background-color: #FFB400;
    color: ${theme.colors.title}
    
`


const ProgressTitle = styled.h4`
     margin-bottom: 5px;
     align-self: flex-start;
`

const Skills = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 0 0 0;
`

const Skill = styled.span`
    color: #767676;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px; 
    text-transform: capitalize;
`

const ProfileButton = styled.a`
    max-width: 220px;
    width: 100%;
    height: 40px;
    background-color: #FFB400;
    color: ${theme.colors.title};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    gap: 20px;
    margin-top: 25px;
`

const ProgrtessLine = styled.progress`
    height: 4px;
    border: 0.75px solid #FFB400;
    border-radius: 20px;

    ::-webkit-progress-bar, 
    ::-moz-progress-bar,
    ::-ms-progress-bar {
        background: transparent;
    }

    ::-webkit-progress-value,
    ::-moz-progress-value,
    ::-ms-progress-value {
        height: 2px;
        background: #FFB400;
        text-align: start;
    }
`




