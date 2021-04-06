import React from "react";
import styled, {StyledComponentProps} from "styled-components/macro";
import {MontB1Bold} from "./_typography/MontB1Bold";
import {DefaultB1Reg} from "./_typography/DefaultB1Reg";


// ITD stands for Icon, Title, Description.
export const ITD: React.FC<ITDType> = (props) => {

    const {
        color,
        imgUrl,
        title,
        description,
    } = props

    return (
        <ITDMain>
            <IconBlock>
                <Cube color={color}/>

                    <SvgIcon src={imgUrl} alt=""/>

            </IconBlock>
            <TextBlock>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextBlock>
        </ITDMain>
    )
}

// Styles
const ITDMain = styled.div`
    display: flex;
`

const IconBlock = styled.div`
  position: relative;
`

const SvgIcon = styled.img`
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 4.54rem;
  height: 4.54rem;
`

const Cube = styled.div<StyledComponentProps<any, any, any, any>>`
  width: 4.54rem;
  height: 4.54rem;

  margin-bottom: 2.27rem;
  
  background-color: ${({color, theme}) => {
    switch (color) {
      case 'primary':
        return theme.color.primary.main
      case 'secondary':
        return theme.color.secondary.main
    }
  }};
`

const TextBlock = styled.div`
  padding-left: 4rem;
`

const Title = styled(MontB1Bold)`
  color: ${({theme}) => theme.color.secondary.main};
  margin-bottom: .6rem;
`

const Description = styled(DefaultB1Reg)`

`

// Types
export type ITDType = {
    color: 'primary' | 'secondary'
    imgUrl: string
    title: string
    description: string
}