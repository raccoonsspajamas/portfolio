import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';

type ProgressBarBlockPropsType = {
    barName?: string
    barValue?: string
    progress?: string
}

export const ProgressBarBlock = (props: ProgressBarBlockPropsType) => {
    return (
        <ProgressBar>
            <FlexWrapper justify={'space-between'}>
                <ProgressBarName>{props.barName}</ProgressBarName>
                <ProgressBarValue>{props.barValue}</ProgressBarValue>
            </FlexWrapper>
            <Progress>
                <ProgressLine progress={props.progress} />
            </Progress>

        </ProgressBar>
    );
};

const ProgressBar = styled.div`
    width: 100%;
    padding: 10px 0 0 0;
`
const ProgressBarName = styled.span`
    
`

const ProgressBarValue = styled.span`
    
`

const Progress = styled.div`
    padding: 1px;
    border: 0.25px solid #FFB400;
    border-radius: 20px;
    text-align: start;
    margin-top: 5px;
`

const ProgressLine = styled.div<ProgressBarBlockPropsType>`
    background-color: #FFB400;
    height: 2px;
    width: ${props => props.progress};
    align-items: start;
`