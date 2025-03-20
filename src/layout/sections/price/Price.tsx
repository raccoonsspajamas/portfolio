import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { PriceCard } from './PriceCard';
import { Container } from '../../../components/Container';
import { theme } from '../../../components/styles/Theme';

export const Price = () => {
    return (
        <StyledPrice>
            <Container>
                <SectionTitle>Price plans</SectionTitle>
                <SectionText>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                </SectionText>
                <FlexWrapper gap={'21px'}>
                    <PriceCard plan={'silver'}></PriceCard>
                    <PriceCard plan={'gold'}></PriceCard>
                    <PriceCard plan={'diamond'}></PriceCard>
                </FlexWrapper>
            </Container>
        </StyledPrice >
    );
};


const StyledPrice = styled.section`

    position: relative;
@media ${theme.media.tablet} {
    div > div {
        justify-content: space-between;
        overflow-x: scroll;
    }
}
` 