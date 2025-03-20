import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/Container';
import { theme } from '../../components/styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterBox>
                    <FlexWrapper gap={'15px'} align={'center'} justify={'center'}>
                        <Icon iconId={'copyright'} viewBox={' 0 0 24 24'} width={'24px'} height={'24px'} />
                        <Text>2021 All Rights Reserved.Ojjomedia</Text>
                    </FlexWrapper>
                </FooterBox>
            </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    padding: 70px 0 0 0;
    position: relative;
    @media ${theme.media.primary} {
        padding: 70px 0;
    }

    div {
        @media ${theme.media.primary} {
        background: white;
    }
    }
`

const FooterBox = styled.div`
    padding: 18px;
    background: white;
`

const Text = styled.span`
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
`