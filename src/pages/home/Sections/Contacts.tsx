import React from "react";
import {Container} from "../../../component/_layout/Container";
import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {SectionDescription} from "../../../component/_layout/SectionDescription";
import styled from "styled-components/macro";
import {SvgEmail} from "../../../component/svg/SvgEmail";
import {SvgFacebook} from "../../../component/svg/SvgFacebook";
import {SvgPhone} from "../../../component/svg/SvgPhone";
import {DefaultB1Reg} from "../../../component/_typography/DefaultB1Reg";
import {Logo} from "../../../component/_common/Logo";
import {ContactForm} from "../../../component/ContactForm";
import {SectionAnchor} from "../../../component/_layout/SectionAnchor";

export const Contacts: React.FC<PropsType> = (props) => {

    const {
        contacts,
        description
    } = props

    return (
        <SectionWrapper id={'contacts'}>
            <SectionAnchor />
            <Container>
                <SectionTitle title={'Contact us'} subtitle={'Start growing your business'}/>
                <SectionDescriptionWrapper>
                    <SectionDescription description={description}/>
                </SectionDescriptionWrapper>
                <ContactsInner>

                    <ContactsWrapper>
                        <Contact>
                            <SvgPhone/>
                            <ContactText>{contacts.phone}</ContactText>
                        </Contact>
                        <Contact>
                            <SvgEmail/>
                            <ContactText>{contacts.email}</ContactText>
                        </Contact>
                        <Contact>
                            <SvgFacebook/>
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