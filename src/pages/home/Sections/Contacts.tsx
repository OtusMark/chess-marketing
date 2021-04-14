import React from "react";
import {Container} from "../../../component/_layout/Container";
import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {SectionDescription} from "../../../component/_layout/SectionDescription";
import styled from "styled-components/macro";
import {ReactComponent as SvgEmail} from "../../../assets/svg/email.svg";
import {ReactComponent as SvgFacebook} from "../../../assets/svg/facebook.svg";
import {ReactComponent as SvgPhone} from "../../../assets/svg/phone.svg";
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
            <SectionAnchor/>
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
                    </ContactsWrapper>

                    <FormBlock>
                        <ContactForm/>
                    </FormBlock>

                </ContactsInner>

                <LogoWrapper>
                    <Logo/>
                </LogoWrapper>

            </Container>
        </SectionWrapper>
    )
}

// Styles
const SectionDescriptionWrapper = styled.div`
  width: 50%;
  padding-bottom: 5.5rem;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    width: 100%;
  }
`

const ContactsInner = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    flex-direction: column;
  }
`

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 13rem;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    height: 20rem;

    div:last-child {
      margin-bottom: 5rem;
    }
  }
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({theme}) => theme.color.secondary.main}
  }
`

const FormBlock = styled.div`
  width: 45%;
  height: 100%;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    width: 100%;
    margin-bottom: 7rem;
  }
`

const ContactText = styled(DefaultB1Reg)`
  padding-left: 2rem;
`

const LogoWrapper = styled.div`
  position: absolute;
  left: 10vw;
  bottom: 3.18rem;
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