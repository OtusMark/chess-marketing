import React from "react";
import { Container } from "../../../component/_layout/Container";
import { SectionWrapper } from "../../../component/_layout/SectionWrapper";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {SectionDescription} from "../../../component/_layout/SectionDescription";
import styled from "styled-components/macro";

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
            </Container>
        </SectionWrapper>
    )
}

// Styles
const SectionDescriptionWrapper = styled.div`
  width: 50%;
  padding-bottom: 5.5rem;
`

// Types
type PropsType = {
    contacts?: {
        email?: string
        phone?: string
        facebook?: string
    }
    description?: string
}