import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import styled, {StyledComponentProps} from "styled-components/macro";
import {ThemeType} from "../../style/theme";

// тип пропсов обычной кнопки
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type PropsType = DefaultButtonPropsType

export const Button: React.FC<PropsType> = ({...restProps}) => {

    return (
        <StyledButton{...restProps}/>
    );
}

// Styles
const StyledButton = styled.button<StyledComponentProps<any, ThemeType, any, any>>`
  
  padding: 1em;

  font-size: 1rem;
  color: ${({theme}) => theme.color.black};
  font-weight: 700;
  text-transform: uppercase;
  border-style: none;
  cursor: pointer;

  background-color: ${({theme}) => theme.color.secondary.main};
  transition: linear .2s;
  outline: none;
  z-index: 10;

  &:hover {
    color: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.primary.main};
  }
`