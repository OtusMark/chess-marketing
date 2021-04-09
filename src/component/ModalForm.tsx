import {ContactForm} from "./ContactForm";
import styled from "styled-components/macro";
import React from "react";
import SvgClose from "./svg/SvgClose";

export const ModalForm: React.FC<PropsType> = (props) => {

    const {
        setModalOn
    } = props

    const closeModal = () => {
        setModalOn(false)
    }

    return (
        <ModalWindow>
            <FormWrapper>
                <ContactForm onClickEvent={closeModal}/>
                <CloseButton onClick={closeModal}/>
            </FormWrapper>
        </ModalWindow>
    )
}

// Styles
const ModalWindow = styled.div`
  position: fixed;
  z-index: 100;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({theme}) => theme.color.gradients.blackTrans};
  
  width: 100vw;
  height: 100vh;
`

const FormWrapper = styled.div`
  position: relative;
`

const CloseButton = styled(SvgClose)`
  position: absolute;
  top: -2.5rem;
  right: -2.5rem;
  
  height: 2rem;
  width: 2rem;
  
  fill: ${({theme}) => theme.color.primary.main};
  
  cursor: pointer;
  
  &:hover {
    fill: ${({theme}) => theme.color.secondary.main};
  }
`

// Types
type PropsType = {
    setModalOn: (arg: boolean) => void
}