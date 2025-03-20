import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';
import { theme } from '../../../components/styles/Theme';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper gap={'30px'} wrap={'wrap'} justify={'center'}>
                    <FormBlock>
                        <ContactsTitle>Leave us your info</ContactsTitle>
                        <StyledForm action="">
                            <StyledLabel htmlFor="name">Your Full Name ( Required)</StyledLabel>
                            <StyledInput type="text" id="name" required />
                            <StyledLabel htmlFor="email">Your Full Name ( Required)</StyledLabel>
                            <StyledInput type="email" id="email" />
                            <StyledLabel htmlFor="subject">Your Full Name ( Required)</StyledLabel>
                            <StyledInput type="text" id="subject" />
                            <StyledLabel htmlFor="textarea">Your Message</StyledLabel>
                            <TextArea name="" id="textarea"></TextArea>
                            <FormButton type="submit" value="send message" />
                        </StyledForm>
                    </FormBlock>
                    <ContactsBlock>
                        <ContactsTitle>Contact information</ContactsTitle>
                        <FlexWrapper direction={'column'} gap={'15px'} margin={'50px 0 0 0'}>
                            <ContactsBox>
                                <IconCircle><Icon iconId={'location'} width={'18px'} height={'18px'} viewBox={'0 0 16 16'} /></IconCircle>
                                <Data>Country: <span>Bangladesh</span></Data>
                                <Data>City: <span>Dhaka</span></Data>
                                <Data>Streat: <span>35 vhatara, Badda</span></Data>
                            </ContactsBox>
                            <ContactsBox>
                                <IconCircle><Icon iconId={'location'} width={'18px'} height={'18px'} viewBox={'0 0 16 16'} /></IconCircle>
                                <Data>Email: <span>youremail@gmail.com</span></Data>
                                <Data>Skype: <span>@yourusername</span></Data>
                                <Data>Telegram: <span>@yourusername</span></Data>
                            </ContactsBox>
                            <ContactsBox>
                                <IconCircle><Icon iconId={'location'} width={'18px'} height={'18px'} viewBox={'0 0 16 16'} /></IconCircle>
                                <Data>Support services: <span>15369</span></Data>
                                <Data>Office: <span>+58 (021)356 587 235</span></Data>
                                <Data>Personal: <span>+58 (021)356 587 235</span></Data>
                            </ContactsBox>
                        </FlexWrapper>
                    </ContactsBlock>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
    position: relative;
   div:first-child > div {
   @media ${theme.media.mobile} {
    flex-direction: column-reverse;
    align-items: center;
   }
}
    
`

const ContactsTitle = styled.h4`
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 123.6%; /* 39.552px */
    text-transform: capitalize;


    @media ${theme.media.tablet} {
        text-align: center;
    }
`

const FormBlock = styled.div`
    max-width: 570px;
    width: 100%;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 25px;
    width: 100%;
    margin-top: 50px;
`

const StyledLabel = styled.label`
    color: #767676;
    font-size: 18px;
    
`

const StyledInput = styled.input`
    height: 50px;
    width: 100%;
    background-color: #F0F0F6;
    margin: 10px 0 25px 0;
    padding:0 15px;
`

const TextArea = styled.textarea`
    height: 210px;
    width: 100%;
    background-color: #F0F0F6;
    margin-top: 8px;
    padding: 15px;
`

const FormButton = styled.input`    
    width: 100%;
    max-width: 159px;
    margin: 25px 0 0 0;
    color: #2B2B2B;
    padding: 9px 24px;
    background-color: #FFB400;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    cursor: pointer;
`

const ContactsBlock = styled.div`
    max-width: 370px;
    width: 100%;
`



const Data = styled.p`

    color: #767676; 
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;

    span {
        color:  #767676;
        text-align: right;
        font-kerning: none;
        font-feature-settings: 'calt' off;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 160% */
        text-transform: capitalize;
    }
    
`

const ContactsBox = styled.div`
    padding: 23px 25px 15px 25px;
    background: #FFF;  
    display: flex;
    flex-direction: column;

    > ${Data}:nth-child(2) {
        margin-top: 30px;
    } 

`

const IconCircle = styled.span`
    display: inline-block;
    width: 40px;
    padding: 10px 10px 8px 10px;
    border-radius: 50%;
    text-align: center;
    background-color: #FFB400; 
    align-self: center;
`