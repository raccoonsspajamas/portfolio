import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { Slider } from '../../../components/slider/Slider';
import { Container } from '../../../components/Container';


export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <Container>
                <SectionTitle>recommendations</SectionTitle>
                <SectionText>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                </SectionText>

                <Slider />

            </Container>
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section`
    position: relative;
`




