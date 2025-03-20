import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { ServicesCard } from './ServicesCard';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';

export const MyServices = () => {
    return (
        <StyledMyServices id={'myServices'}>
            <Container>
                <SectionTitle>My services</SectionTitle>
                <SectionText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionText>

                <FlexWrapper wrap={'wrap'} align-items={'center'} gap={'20px'} justify={'space-around'}>
                    <ServicesCard cardIconId={'webdev'} cardIconWidth={'68'} cardIconHeight={'68'} cardIconViewBox={'0 0 68 68'} cardName={'web development'} cardText={'blog, e-commerce'} />
                    <ServicesCard cardIconId={'design'} cardIconWidth={'68'} cardIconHeight={'68'} cardIconViewBox={'0 0 68 68'} cardName={'uI/uX design'} cardText={'Mobile app, website design'} />
                    <ServicesCard cardIconId={'soundDesign'} cardIconWidth={'74'} cardIconHeight={'74'} cardIconViewBox={'0 0 74 74'} cardName={'sound design'} cardText={'Voice Over, Beat Making'} />
                    <ServicesCard cardIconId={'gameDesign'} cardIconWidth={'74'} cardIconHeight={'74'} cardIconViewBox={'0 0 74 74'} cardName={'game design'} cardText={'Character Design, Props & Objects'} />
                    <ServicesCard cardIconId={'photo'} cardIconWidth={'78'} cardIconHeight={'78'} cardIconViewBox={'0 0 78 78'} cardName={'photography'} cardText={'portrait, product photography'} />
                    <ServicesOrder>
                        <ServicesOrderName>
                            advertising
                        </ServicesOrderName>
                        <ServicesOrderText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.
                        </ServicesOrderText>
                        <ServicesOrderLink href="#">
                            ORDER NOW <Icon iconId={'arrow'} />
                        </ServicesOrderLink>
                    </ServicesOrder>

                </FlexWrapper>
            </Container>
        </StyledMyServices>
    );
};


const StyledMyServices = styled.section`
    position: relative;
`

const ServicesOrder = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 310px;
    width: 100%;
    height: 225px;
    background-color: #FFF;
    padding: 31px 25px 28px 25px;
`

const ServicesOrderName = styled.h6`
    color: #2B2B2B;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 123.6%; 
text-transform: capitalize;
`

const ServicesOrderText = styled.p`
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
    margin-top: 22px;
    text-align: center;
`

const ServicesOrderLink = styled.a`
    text-align: center;
    align-items: center;
    display: flex;
    text-decoration: none;
    color:  #FFB400;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
    margin: 10px 0 0 0;
`