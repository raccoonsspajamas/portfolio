import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { theme } from '../styles/Theme';



type ExpierenceCardPropsType = {
    title?: string
    post?: string
    dates?: string
    certificate?: string
    text?: string
}


export const ExpierenceCard = (props: ExpierenceCardPropsType) => {
    return (
        <StyledExpierenceCard>
            <FlexWrapper justify={'space-between'}>
                <FlexWrapper gap={'25px'} direction={'column'}>
                    <ExpierenceCardTitle>{props.title}</ExpierenceCardTitle>
                    <FlexWrapper align={'center'}>
                        <CardPost>{props.post}</CardPost>
                        <CardDates>{props.dates}</CardDates>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper gap={'28px'} direction={'column'} maxWidth={'536px'}>
                    <ExpierenceCardTitle>{props.certificate}</ExpierenceCardTitle>
                    <CardText>
                        {props.text}
                    </CardText>
                </FlexWrapper>
            </FlexWrapper>
        </StyledExpierenceCard>
    );
};

const StyledExpierenceCard = styled.div`
    @media ${theme.media.tablet} {
        div {
            flex-direction: column;
            align-items: center;
            gap: 25px;

            div {
                gap: 10px;
            }

            div > div  {
                flex-direction: row;
            }
        }
    }

    @media ${theme.media.mobile} {
        div {
            align-items: start;
        }
    }
`

const ExpierenceCardTitle = styled.h6`
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; 
    text-transform: capitalize;
`

const CardPost = styled.span`
    margin: 0 21px 0 0;
`

const CardDates = styled.span`
    padding: 4px 7px;
    width: 100%;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 100.9%;
    border-radius: 1px;
    background: #FFB400;
`

const CardText = styled.p`
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    text-transform: capitalize;
    text-align: start;

    @media ${theme.media.tablet} {
        text-align: center;
    }

    @media ${theme.media.mobile} {
        text-align: start;
    }
`