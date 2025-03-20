import React from 'react';
import styled from 'styled-components';
import { PriceServices } from '../../../components/priceServices/PriceServices';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../components/styles/Theme';

type PriceCardPropsType = {
    plan: string
}


export const PriceCard = (props: PriceCardPropsType) => {
    if (props.plan === 'silver') {
        return (
            <StyledPriceCard>
                <Name>Silver</Name>
                <PriceValue><span>$30.00 </span>/hour</PriceValue>
                <Text>For most businesses that want to
                    optimize web queries</Text>
                <PriceServices included service={'UI Design'} />
                <PriceServices included service={'web development'} />
                <PriceServices service={'logo design'} />
                <PriceServices service={'seo optimization'} />
                <PriceServices service={'wordPress integration'} />
                <PriceServices service={'5 Websites'} />
                <PriceServices service={'unlimited user'} />
                <PriceServices service={'20 gB bandwith'} />
                <Button>ORDER NOW</Button>
            </StyledPriceCard>
        );
    } else if (props.plan === 'gold') {
        return (
            <StyledPriceCard>
                <Popular>most popular</Popular>
                <Name>Gold</Name>
                <PriceValue><span>$50.00 </span>/hour</PriceValue>
                <Text>For most businesses that want to
                    optimize web queries</Text>
                <PriceServices included service={'UI Design'} />
                <PriceServices included service={'web development'} />
                <PriceServices included service={'logo design'} />
                <PriceServices included service={'seo optimization'} />
                <PriceServices service={'wordPress integration'} />
                <PriceServices service={'5 Websites'} />
                <PriceServices service={'unlimited user'} />
                <PriceServices service={'20 gB bandwith'} />
                <Button>ORDER NOW</Button>
            </StyledPriceCard>
        );
    } else if (props.plan === 'diamond') {
        return (
            <StyledPriceCard>
                <Name>Diamond</Name>
                <PriceValue><span>$80.00</span> /hour</PriceValue>
                <Text>For most businesses that want to
                    optimize web queries</Text>
                <PriceServices included service={'UI Design'} />
                <PriceServices included service={'web development'} />
                <PriceServices included service={'logo design'} />
                <PriceServices included service={'seo optimization'} />
                <PriceServices included service={'wordPress integration'} />
                <PriceServices included service={'5 Websites'} />
                <PriceServices included service={'unlimited user'} />
                <PriceServices included service={'20 gB bandwith'} />
                <Button>ORDER NOW</Button>
            </StyledPriceCard>
        );
    }

};

const StyledPriceCard = styled.div`
    padding: 54px 31px 25px 31px;
    height: fit-content;
    background-color: #fff;
    position: relative;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    max-width: 310px;
    display: flex;
    flex-direction: column;

    @media ${theme.media.tablet} {
        min-width: 310px;
    }

 `

const Name = styled.h5`
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 123.6%; 
    text-transform: capitalize;
    text-align: center;
 `

const PriceValue = styled.p`
    margin-top: 19px;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    text-transform: capitalize;
    text-align: center;
    span {
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 123.6%;
        color: ${theme.colors.title}
    }
 `

const Text = styled.p`
    color: #767676;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    margin: 8px 0 5px 0;
    text-align: center;
    
`

const Button = styled.button`
    color: #2B2B2B;
    font-size: 14px;
    font-weight: bold;
    line-height: normal;
    text-transform: capitalize;
    padding: 11px 41px;
    border-radius: 30px;
    align-self: center;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    border: none;
    margin-top: 21px;
    border-radius: 30px;
    background: white;
&:hover {
    background:  #FFB400;
    cursor: pointer;
}`

const Popular = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #FFB400;
    padding: 3px 0;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    color: ${theme.colors.title}
`
