import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../components/styles/Theme';
import { Link } from 'react-scroll';




export const Bar = () => {
    return (
        <StyledBar>
            <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
                <Switcher><Icon iconId={'contrast'} width={'30'} height={'30'} viewBox={'0 0 30 30'} /></Switcher>
                <Menu>

                    <MenuLink to="header" smooth={true} activeClass="active" spy={true}>
                        <Icon iconId={'home'} />
                    </MenuLink>


                    <MenuLink to="myServices" smooth={true} activeClass="active" spy={true}>
                        <Icon iconId={'services'} />
                    </MenuLink>


                    <MenuLink to="education" smooth={true} activeClass="active" spy={true}>
                        <Icon iconId={'cv'} />
                    </MenuLink>


                    <MenuLink to="portfolio" smooth={true} activeClass="active" spy={true}>
                        <Icon iconId={'portfolio'} />
                    </MenuLink>


                    <MenuLink to="blog" smooth={true} activeClass="active" spy={true}>
                        <Icon iconId={'blog'} />
                    </MenuLink>

                </Menu>
            </FlexWrapper>
        </StyledBar>
    );
};


const StyledBar = styled.section`
    position: fixed;
    z-index: 9990999;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #FAFAFA;
    max-width: 108px;
    width: 100%;
    padding: 50px 0 0 0;
    overflow-y: scroll;
    FlexWrapper > Icon:first-of-type {
        margin-bottom: 212px;
    }


    @media ${theme.media.primary} {
    left: 0;
    bottom: 0;
    right: 0;
    top: unset;
    background-color: #FAFAFA;
    width: 100%;
    padding: 15px;
    /* overflow-y: scroll; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: 100px;
    max-width: unset;

    > div {
        width: 100%;
        flex-direction: row;
        justify-content: center;
    }
    }

    @media ${theme.media.mobile} {
        > div {
            justify-content: start;
        }
    }
`





const Menu = styled.ul`
    margin-top: 212px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media ${theme.media.primary} {
        flex-direction: row;
        margin: 0 0 0 40px;
    }

    @media ${theme.media.mobile} {
        gap: unset;
        justify-content: space-around;
        margin: 0 0 0 20px;
        width: 100%;
    }

`

const MenuLink = styled(Link)`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    background-color: #F0F0F6;
    &:hover, &.active {
    background-color: #FFB400;
    }

     &:nth-child(1):hover:before {
        content: 'Home';
        position: absolute;
        left: -13px;
        top: -35px;
        width: fit-content;
        min-width: 65px;
        height: 26px;
        text-align: center;
        background-color: #2B2B2B;
        color: #fff;
        padding: 2px 5px 0 5px;
        border-radius: 5px;
    }

        
    &:nth-child(2):hover:before {
        content: 'Services';
        position: absolute;
        left: -13px;
        top: -35px;
        width: fit-content;
        min-width: 65px;
        height: 26px;
        text-align: center;
        background-color: #2B2B2B;
        color: #fff;
        padding: 2px 5px 0 5px;
        border-radius: 5px;
        
    }

    &:nth-child(3):hover:before {
        content: 'CV';
        position: absolute;
        left: -13px;
        top: -35px;
        width: fit-content;
        min-width: 65px;
        height: 26px;
        text-align: center;
        background-color: #2B2B2B;
        color: #fff;
        padding: 2px 5px 0 5px;
        border-radius: 5px;
    }
        &:nth-child(4):hover:before {
        content: 'Portfolio';
        position: absolute;
        left: -13px;
        top: -35px;
        width: fit-content;
        min-width: 65px;
        height: 26px;
        text-align: center;
        background-color: #2B2B2B;
        color: #fff;
        padding: 2px 5px 0 5px;
        border-radius: 5px;
    }
    &:nth-child(5):hover:before {
        content: 'Blog';
        position: absolute;
        left: -13px;
        top: -35px;
        width: fit-content;
        min-width: 65px;
        height: 26px;
        text-align: center;
        background-color: #2B2B2B;
        color: #fff;
        padding: 2px 5px 0 5px;
        border-radius: 5px;
        
    }

    &:hover:after {
            content: '';
            top: -15px;
            width: 5px;
            height: 5px;
            background-color: #2B2B2B;
            position: absolute;
            border: 5px solid transparent; 
            border-top: 5px solid #2B2B2B;
            transform: rotate(45deg); 
            -webkit-transform: rotate(45deg);
            z-index: -1;
    }


    @media ${theme.media.primary} {
        &:nth-child(1):hover:before, &:nth-child(2):hover:before, &:nth-child(3):hover:before, &:nth-child(4):hover:before, &:nth-child(5):hover:before, &:hover:after {
            display: none;
        }

    }
    
`

const Switcher = styled.button`
    cursor: pointer;
    background-color: transparent;
`