import {InputText} from "./_common/InputText";
import {Button} from "./_common/Button";
import styled, {StyledComponentProps} from "styled-components/macro";

export const ContactForm = () => {
    return (
        <div>
            <StyledInputText placeholder={'email'}/>
            <StyledInputText placeholder={'phone'}/>
            <StyledTextarea placeholder={'description'} rows="10"/>
            <StyledButton>Get free consultation</StyledButton>
        </div>
    )
}

// Styles
const StyledInputText = styled(InputText)`
  padding: .7rem;
  margin-bottom: 2rem;
`

const StyledTextarea = styled.textarea<StyledComponentProps<any, any, any, any>>`
  width: 100%;
  padding: .7rem;
  margin-bottom: 2rem;
`

const StyledButton = styled(Button)`
  width: 100%;
`