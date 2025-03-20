import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { FlexWrapper } from '../../../components/FlexWrapper';
import project1 from '../../../assets/images/portfolio/p1.jpg'
import project2 from '../../../assets/images/portfolio/p2.jpg'
import project3 from '../../../assets/images/portfolio/p3.jpg'
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';
import { theme } from '../../../components/styles/Theme';

export const Blog = () => {
    return (
        <StyledBlog id={'blog'}>
            <Container>
                <SectionTitle>Blog</SectionTitle>
                <SectionText>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionText>
                <FlexWrapper gap={'20px'} wrap={'wrap'} justify={'center'}>
                    <BlogBox>
                        <BlogBoxImg src={project1} alt="project" />
                        <BlogBoxInfo>
                            <BlogBoxTitle>How to make web tempates</BlogBoxTitle>
                            <BlogBoxSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </BlogBoxSubtitle>
                            <BlogBoxLink href="#">Learn more <Icon iconId={'arrow'} width={'20px'} height={'20px'} viewBox={'2 -2 20 20'} /></BlogBoxLink>
                        </BlogBoxInfo>
                    </BlogBox>
                    <BlogBox>
                        <BlogBoxImg src={project2} alt="project" />
                        <BlogBoxInfo>
                            <BlogBoxTitle>make Business card</BlogBoxTitle>
                            <BlogBoxSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </BlogBoxSubtitle>
                            <BlogBoxLink href="#">Learn more <Icon iconId={'arrow'} width={'20px'} height={'20px'} viewBox={'2 -2 20 20'} /></BlogBoxLink>
                        </BlogBoxInfo>
                    </BlogBox>
                    <BlogBox>
                        <BlogBoxImg src={project3} alt="project" />
                        <BlogBoxInfo>
                            <BlogBoxTitle>How to make Flyer Design</BlogBoxTitle>
                            <BlogBoxSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </BlogBoxSubtitle>
                            <BlogBoxLink href="#">Learn more <Icon iconId={'arrow'} width={'20px'} height={'20px'} viewBox={'2 -2 20 20'} /></BlogBoxLink>
                        </BlogBoxInfo>

                    </BlogBox>


                </FlexWrapper>
            </Container>
        </StyledBlog>
    );
};



const StyledBlog = styled.section`
    position: relative;
    div > div {
        @media ${theme.media.tablet} {
            overflow-x: scroll;
            flex-wrap: nowrap;
            justify-content: start;
            
        }
    }
`

const BlogBox = styled.div`
    max-width: 310px;
    width: 100%;

    @media ${theme.media.tablet} {
        min-width: 310px;
    }
`

const BlogBoxImg = styled.img`
    width: 100%;
    max-width: 310px;
    height: 300px;
`
const BlogBoxInfo = styled.div` 
    padding: 25px 25px 18px 25px;
    background-color: ${theme.colors.blockBg};
`

const BlogBoxTitle = styled.h6`
    font-size: 18px;
    font-weight: 500;
    line-height: 123.6%; 
    text-transform: capitalize;
`



const BlogBoxSubtitle = styled.p`
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    text-transform: capitalize;
    margin-top: 10px;
`

const BlogBoxLink = styled.a`
    color:  #FFB400;
    display: flex;
    align-items: end;
    margin: 10px 0 0 0;
`
