import {InputText} from "./_common/InputText";
import {Button} from "./_common/Button";
import styled, {StyledComponentProps} from "styled-components/macro";
import {useFormik} from "formik";

export const ContactForm = () => {

    const formik = useFormik({

        validate: (values: FormValueType) => {
            const errors: FormValueType = {} as FormValueType;
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.phone) {
                errors.phone = 'Phone is required'
            } else if (values.phone.includes('_')) {
                errors.phone = 'Invalid phone number'
            }
            return errors;
        },
        initialValues: {
            email: '',
            phone: '',
            description: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <StyledInputText placeholder={'email'} {...formik.getFieldProps('email')} error={formik.errors.email}/>
            <StyledInputText placeholder={'phone'} {...formik.getFieldProps('phone')} error={formik.errors.phone} mask={"+1 (999) 999 9999"}/>
            <StyledTextarea placeholder={'description'} rows="10"/>
            <StyledButton type={'submit'}>Get free consultation</StyledButton>
        </form>
    )
}

// Styles
const StyledInputText = styled(InputText)<StyledComponentProps<any, any, any, any>>`
  padding: 1rem;
  margin-bottom: 2.5rem;
`

const StyledTextarea = styled.textarea<StyledComponentProps<any, any, any, any>>`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
`

const StyledButton = styled(Button)`
  width: 100%;
`

// Types
type FormValueType = {
    email: string
    phone: string
    description: string
}