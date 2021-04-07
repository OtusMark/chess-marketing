import {Container} from "../../../component/_layout/Container";
import {SectionWrapper} from "../../../component/_layout/SectionWrapper";
import styled from "styled-components/macro";
import {SectionTitle} from "../../../component/_layout/SectionTitle";
import React from "react";
import {SectionDescription} from "../../../component/_layout/SectionDescription";

export const About: React.FC<PropsType> = (props) => {

    const {
        description
    } = props

    return (
        <SectionWrapper>
            <Container>
                <SectionTitle title={'About us'} subtitle={'We get results'}/>
                <AboutInner>
                    <SectionDescriptionWrapper>
                        <SectionDescription description={description}/>
                    </SectionDescriptionWrapper>
                    <div>
                        Image
                    </div>
                </AboutInner>
            </Container>
        </SectionWrapper>
    )
}

// Styles
const AboutInner = styled.div`
  display: flex;
  justify-content: space-between;
`

const SectionDescriptionWrapper = styled.div`
    width: 50%;
`

// Types
type PropsType = {
    description?: string
}