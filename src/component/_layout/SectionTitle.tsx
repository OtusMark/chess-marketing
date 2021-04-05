import styled from "styled-components/macro";
import {MontB2Bold} from "../_typography/MontB2Bold";
import React from "react";

export const SectionTitle: React.FC<PropsType> = (props) => {

    return (
        <SectionTitleMain>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
            <Line/>
        </SectionTitleMain>
    )
}

// Style
const SectionTitleMain = styled.div`
  padding-bottom: 2.272rem;
`

const Title = styled(MontB2Bold)`
  line-height: 1;
  text-transform: uppercase;
`

const Subtitle = styled.p`
  color: ${({theme}) => theme.color.primary.main};
  padding-bottom: 5px;
`

const Line = styled.div`
  height: 1px;
  width: 7rem;
  background-color: ${({theme}) => theme.color.primary.main};
`

// Types
type PropsType = {
    title: string
    subtitle: string
}
