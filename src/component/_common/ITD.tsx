import React from "react";
import styled, {StyledComponentProps} from "styled-components/macro";
import {MontB1Bold} from "../_typography/MontB1Bold";
import {DefaultB1Reg} from "../_typography/DefaultB1Reg";


export const ITD: React.FC<PropsType> = (props) => {

    const {
        color,
        icon,
        title,
        description,
    } = props

    return (
        <ITDMain>
            <IconBlock>
                <Cube color={color}/>
                <SvgIcon>
                    {icon}
                </SvgIcon>
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

const SvgIcon = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  
  & svg {
    width: 4.54rem;
    height: 4.54rem;
    
    fill: ${({theme}) => theme.color.grey['100']};
  }
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
type PropsType = {
    color: 'primary' | 'secondary'
    icon: React.ReactNode
    title: string
    description: string
}