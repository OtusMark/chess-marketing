import React from "react";
import {Container} from "../../../component/_layout/Container";
import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {SectionDescription} from "../../../component/_layout/SectionDescription";
import styled from "styled-components/macro";
import {Email} from "../../../component/svg/Email";
import {Facebook} from "../../../component/svg/Facebook";
import {Phone} from "../../../component/svg/Phone";
import {DefaultB1Reg} from "../../../component/_typography/DefaultB1Reg";
import {Logo} from "../../../component/_common/Logo";
import {ContactForm} from "../../../component/ContactForm";

export const Contacts: React.FC<PropsType> = (props) => {

    const {
        contacts,
        description
    } = props

    return (
        <SectionWrapper>
            <Container>
                <SectionTitle title={'Contact us'} subtitle={'Start growing your business'}/>
                <SectionDescriptionWrapper>
                    <SectionDescription description={description}/>
                </SectionDescriptionWrapper>
                <ContactsInner>
                    <ContactsWrapper>
                        <Contact>
                            <Phone/>
                            <ContactText>{contacts.phone}</ContactText>
                        </Contact>
                        <Contact>
                            <Email/>
                            <ContactText>{contacts.email}</ContactText>
                        </Contact>
                        <Contact>
                            <Facebook/>
                            <ContactText>{contacts.facebook}</ContactText>
                        </Contact>
                        <LogoWrapper>
                            <Logo/>
                        </LogoWrapper>
                    </ContactsWrapper>
                    <FormBlock>
                        <ContactForm/>
                    </FormBlock>
                </ContactsInner>
            </Container>
        </SectionWrapper>
    )
}

// Styles
const SectionDescriptionWrapper = styled.div`
  width: 50%;
  padding-bottom: 5.5rem;
`

const ContactsInner = styled.div`
  display: flex;
  justify-content: space-between;
`

const ContactsWrapper = styled.div`
  position: relative;
  
  & div:not(:last-child) {
    padding-bottom: 3rem;
  }
`

const Contact = styled.div`
  display: flex;
  align-items: center;
`

const FormBlock = styled.div`
  width: 45%;
  height: 100%;
`

const ContactText = styled(DefaultB1Reg)`
  padding-left: 2rem;
`

const LogoWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`

// Types
type PropsType = {
    contacts: {
        email: string
        phone: string
        facebook: string
    }
    description: string
}