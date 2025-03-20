import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { ExpierenceCard } from '../../../components/expierenceCard/ExpierenceCard';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';
import { theme } from '../../../components/styles/Theme';

export const Education = () => {
    return (
        <StyledEducation id={'education'}>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>Education</SectionTitle>
                    <SectionText>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                    </SectionText>
                    <Box>
                        <ExpierenceCard title={'Lead Web Designer'} post={'Student'} dates={'Jan 1016 - Dec 2021'} certificate={'Certificate of web training'}
                            text={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui. '
                            }
                        />
                        <Icon iconId={'line'} width={'100%'} height={'1.5px'} viewBox={'0 0 100% 1.5'} />
                        <ExpierenceCard title={'Junior Web Designer'} post={'Student'} dates={'Jan 1016 - Dec 2021'} certificate={'Certificate of web training'}
                            text={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui. '
                            }
                        />
                        <Icon iconId={'line'} width={'100%'} height={'1.5px'} viewBox={'0 0 100% 1.5'} />
                        <ExpierenceCard title={'Senior Web Designer'} post={'Student'} dates={'Jan 1016 - Dec 2021'} certificate={'Certificate of web training'}
                            text={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui. '
                            }
                        />
                    </Box>
                </FlexWrapper>
            </Container>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`
    position: relative;
`

const Box = styled.div`
    padding: 40px;
    max-width: 970px;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media ${theme.media.tablet} {
        padding: 30px;
    }
`