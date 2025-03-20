import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';
import Tilt from 'react-parallax-tilt';

export const Logos = () => {
    return (
        <StyledLogos>
            <Container>
                <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                    <Tilt className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}>
                        <Icon iconId={'firstLogo'} viewBox={'0 0 140 136'} width={'140px'} height={'136px'} />
                    </Tilt>
                    <Tilt className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}>
                        <Icon iconId={'secondLogo'} viewBox={'0 0 140 136'} width={'140px'} height={'136px'} />
                    </Tilt>
                    <Tilt className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}>
                        <Icon iconId={'thirdLogo'} viewBox={'0 0 140 136'} width={'140px'} height={'136px'} />
                    </Tilt>
                    <Tilt className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}>
                        <Icon iconId={'fourthLogo'} viewBox={'0 0 140 136'} width={'140px'} height={'136px'} />
                    </Tilt>
                </FlexWrapper>
            </Container>
        </StyledLogos>
    );
};


const StyledLogos = styled.section`

    position: relative;
`