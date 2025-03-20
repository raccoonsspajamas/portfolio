import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type PriceServicesPropsType = {
    included?: boolean
    service: string
}

export const PriceServices = (props: PriceServicesPropsType) => {

    if (props.included) {
        return (
            <StyledPriceServices>
                <Icon iconId={'check'} />
                <ServiceActivce>{props.service}</ServiceActivce>
            </StyledPriceServices>
        );
    } else {
        return (
            <StyledPriceServices>
                <Icon iconId={'close'} />
                <ServiceInactive>{props.service}</ServiceInactive>
            </StyledPriceServices>
        );
    }

};

const StyledPriceServices = styled.div`
    margin-top: 16px;
`

const ServiceActivce = styled.span`
   color:  #2B2B2B;
   font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    margin-left: 15px;
`

const ServiceInactive = styled.span`
    color:  #767676;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
    margin-left: 15px;
`