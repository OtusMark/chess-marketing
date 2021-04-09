import {Container} from "../../../component/_layout/Container";
import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import styled from "styled-components/macro";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import {ITD} from "../../../component/ITD";
import React from "react";
import {HowWeWorkEntityType} from "../../../api/api";
import {SectionDescription} from "../../../component/_layout/SectionDescription";
import {SectionAnchor} from "../../../component/_layout/SectionAnchor";

export const HowWeWork: React.FC<PropsType> = (props) => {

    const {
        description,
        workSteps
    } = props

    return (
        <SectionWrapper>
            <SectionAnchor id={'workProcess'}/>
            <Container>
                <SectionTitle title={'How we work'} subtitle={'Simple steps to success'}/>
                <SectionDescriptionWrapper>
                    <SectionDescription description={description}/>
                </SectionDescriptionWrapper>
                <ServicesInner>
                    {workSteps.map((item: HowWeWorkEntityType) => (
                        <ITDWrapper key={item.id}>
                            <ITD color={'secondary'} title={item.title} description={item.description}
                                 imgUrl={`${process.env.REACT_APP_CMS_DOMAIN}${item.icon.url}`}/>
                        </ITDWrapper>
                    ))}
                </ServicesInner>
            </Container>
        </SectionWrapper>
    )
}

// Styles
const ServicesInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    flex-direction: column;
  }
`

const SectionDescriptionWrapper = styled.div`
  width: 50%;
  padding-bottom: 5.5rem;
`

const ITDWrapper = styled.div`
  width: 45%;
  margin-bottom: 5rem;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    width: 100%;
  }
`

// Types
type PropsType = {
    description?: string
    workSteps: Array<HowWeWorkEntityType>
}