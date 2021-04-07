import React from "react";
import styled from "styled-components/macro";
import {DefaultB1Reg} from "./DefaultB1Reg";
import {MontB1Reg} from "./MontB1Reg";

export const Review: React.FC<PropsType> = (props) => {

    const {
        fullName,
        review,
        pictureUrl
    } = props

    return (
        <ReviewWrapper>
            <Picture src={pictureUrl}/>
            <TextWrapper>
                <ReviewText>{review}</ReviewText>
                <Name>{fullName}</Name>
            </TextWrapper>
        </ReviewWrapper>
    )
}

// Styles
const ReviewWrapper = styled.div`
  display: flex;
  
  align-items: center;
  
  width: 90%;
  height: 100%;

  margin: 0 auto;
`

const Picture = styled.img`
  width: 6.8rem;
  height: 6.8rem;
  border: 2px solid ${({theme}) => theme.color.secondary.main};
`

const ReviewText = styled(DefaultB1Reg)`
  padding-bottom: .8rem;
`

const Name = styled(MontB1Reg)`
  color: ${({theme}) => theme.color.secondary.main};
  font-weight: 400;
`

const TextWrapper = styled.div`
  margin-left: 1.5rem;
`

// Types
type PropsType = {
    fullName: string
    review: string
    pictureUrl: string
}