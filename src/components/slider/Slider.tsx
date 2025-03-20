import React from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../styles/slider.css'
import { FlexWrapper } from '../FlexWrapper';
import { Icon } from '../icon/Icon';
import { CardImg } from '../Img';
import firstSliderPhoto from '../../assets/images/reviews/firstReviewer.jpg'
import secondSliderPhoto from '../../assets/images/reviews/secondReviewer.jpg'
import thirdSliderPhoto from '../../assets/images/reviews/thirdReviewer.jpg'



const responsive = {
    0: { items: 1 },
    690: { items: 2 },
    1416: { items: 3 }
};

type SliderSlidePropsType = {
    title: string,
    text: string,
    imgSource: string,
    name: string,
    position: string
}

const SliderSlide = (props: SliderSlidePropsType) => {
    return (
        <FlexWrapper justify={'center'} padding={'0 7px'}>
            <Slide>
                <p><Icon iconId={'star'} /> <Icon iconId={'star'} /> <Icon iconId={'star'} /> <Icon iconId={'star'} /> <Icon iconId={'star'} /></p>
                <Title>{props.title}</Title>
                <Text>
                    {props.text}
                </Text>
                <FlexWrapper align={'center'} gap={'10px'}>
                    <CardImg src={props.imgSource} maxWidth={'80px'} height={'80px'} borderRadius={'80px'} />
                    <FlexWrapper direction={'column'}>
                        <Name>{props.name}</Name>
                        <Position>{props.position}</Position>
                    </FlexWrapper>
                </FlexWrapper>
            </Slide>
        </FlexWrapper>
    )
}

const items = [

    <SliderSlide title={'Great Quality!'} imgSource={firstSliderPhoto} name={'James Gouse'} position={'Graphic Designer'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'} />,
    <SliderSlide title={'Amazing work!'} imgSource={secondSliderPhoto} name={'Tiana Philips'} position={'Photographer'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'} />,
    <SliderSlide title={'Great Quality!'} imgSource={thirdSliderPhoto} name={'Talan Westervelt'} position={'Business man'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'} />,
    <SliderSlide title={'Great Quality!'} imgSource={firstSliderPhoto} name={'James Gouse'} position={'Graphic Designer'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'} />,
    <SliderSlide title={'Amazing work!'} imgSource={secondSliderPhoto} name={'Tiana Philips'} position={'Photographer'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'} />,
    <SliderSlide title={'Great Quality!'} imgSource={thirdSliderPhoto} name={'Talan Westervelt'} position={'Business man'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'} />

];

export const Slider = () => (
    <AliceCarousel

        infinite={true}
        disableButtonsControls={true}
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);





const Slide = styled.div`
   
    width: 100%;
    padding: 25px;
    background-color: white;  

`

const Title = styled.h6`
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
    margin-top: 15px;
`

const Text = styled.p`
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
    margin: 20px 0 30px 0;
`

const Name = styled.h6`
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
`
const Position = styled.p`
    margin-top: 5px;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
`





