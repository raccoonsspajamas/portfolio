import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';


type StyledServicesCardPropsType = {
    cardIconId: string
    cardIconWidth?: string
    cardIconHeight?: string
    cardIconViewBox?: string
    cardName?: string
    cardText?: string
}

export const ServicesCard = (props: StyledServicesCardPropsType) => {
    return (
        <StyledServicesCard>
            <Icon iconId={props.cardIconId} width={props.cardIconWidth} height={props.cardIconHeight} viewBox={props.cardIconViewBox} />
            <CardName>{props.cardName}</CardName>
            <CardText>{props.cardText}</CardText>
        </StyledServicesCard>
    );
};


const StyledServicesCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 310px;
    width: 100%;
    height: 225px;
    background-color: #FFF;
`

const CardName = styled.h6`
    color: #2B2B2B;
font-size: 18px;
font-weight: 500;
line-height: 123.6%;
text-transform: capitalize;
margin-top: 26px;
`

const CardText = styled.span`
    margin-top: 15px;
    color:  #767676;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
text-transform: capitalize;
`