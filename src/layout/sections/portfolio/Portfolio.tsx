import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { Nav, TabsStatusType } from '../../../components/nav/Nav';
import { FlexWrapper } from '../../../components/FlexWrapper';
import project1 from '../../../assets/images/portfolio/p1.jpg'
import project2 from '../../../assets/images/portfolio/p2.jpg'
import project3 from '../../../assets/images/portfolio/p3.jpg'
import project4 from '../../../assets/images/portfolio/p4.jpg'
import project5 from '../../../assets/images/portfolio/p5.jpg'
import project6 from '../../../assets/images/portfolio/p6.jpg'
import project7 from '../../../assets/images/portfolio/p7.jpg'
import project8 from '../../../assets/images/portfolio/p8.jpg'
import project9 from '../../../assets/images/portfolio/p9.jpg'
import { Container } from '../../../components/Container';
import { Icon } from '../../../components/icon/Icon';



const items: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All categories",
        status: "all"
    },
    {
        title: "UI Design",
        status: "ui"
    },
    {
        title: "Web Templates",
        status: "web"
    },
    {
        title: "Logo",
        status: "logo"
    },
    {
        title: "Branding",
        status: "branding"
    }
]

const projects = [
    {
        image: project1,
        type: "ui"
    },
    {
        image: project2,
        type: "branding"
    },
    {
        image: project3,
        type: "web"
    },
    {
        image: project4,
        type: "ui"
    },
    {
        image: project5,
        type: "logo"
    },
    {
        image: project6,
        type: "branding"
    },
    {
        image: project7,
        type: "logo"
    },
    {
        image: project8,
        type: "ui"
    },
    {
        image: project9,
        type: "branding"
    }
];

export const Portfolio = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = projects

    if (currentFilterStatus === "ui") {
        filteredWorks = projects.filter(project => project.type === "ui")
    }
    if (currentFilterStatus === "web") {
        filteredWorks = projects.filter(project => project.type === "web")
    }
    if (currentFilterStatus === "logo") {
        filteredWorks = projects.filter(project => project.type === "logo")
    }
    if (currentFilterStatus === "branding") {
        filteredWorks = projects.filter(project => project.type === "branding")
    }


    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <StyledPortfolio id={'portfolio'}>
            <Container>
                <SectionTitle>Portfolio</SectionTitle>
                <SectionText>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                </SectionText>
                <Nav changeFilterStatus={changeFilterStatus} tabsItems={items} navGap={'40px'} navAlign={'center'} navJustify={'center'} />
                <FlexWrapper wrap={'wrap'} gap={'20px'} justify={'center'}>

                    {filteredWorks.map((project, index) => (
                        <CardBox key={index}>
                            <CardImg src={project.image} />
                            <Button><Icon iconId={'portfolioBtn'} width={'52px'} height={'52px'} viewBox={'0 0 52px 52px'} /></Button>
                        </CardBox>
                    ))}


                </FlexWrapper>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`

    position: relative;


`
const Button = styled.button`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
    
`

const CardBox = styled.div`
    position: relative;
    &:hover {
        &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(255, 180, 0, 0.95);
    }
    ${Button} {
        display: block;
    }
    }
`

const CardImg = styled.img`
    width: 310px;
    height: 300px;
`



