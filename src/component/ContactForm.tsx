import {InputText} from "./_common/InputText";
import {Button} from "./_common/Button";
import styled, {StyledComponentProps} from "styled-components/macro";
import {useFormik} from "formik";
import {homepageAPI} from "../api/api";
import React from "react";

export const ContactForm: React.FC<PropsType> = (props) => {

    const {
        onClickEvent
    } = props

    const onClickAction = () => {
        if (onClickEvent) {
            onClickEvent()
        }
    }

    const formik = useFormik({

        validate: (values: FormValueType) => {
            const errors: FormValueType = {} as FormValueType;
            if (!values.name) {
                errors.name = 'Please enter your name'
            }
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
            name: '',
            email: '',
            phone: '',
            description: ''
        },
        onSubmit: (values, actions) => {
            homepageAPI.sendEmail(values)
                .then(() => onClickAction())
                .then(() => actions.resetForm({values: {name: '', email: '', phone: '', description: ''}}))
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <StyledInputText placeholder={'Full name'} {...formik.getFieldProps('name')} error={formik.errors.name}/>
            <StyledInputText placeholder={'Email'} {...formik.getFieldProps('email')} error={formik.errors.email}/>
            <StyledInputText placeholder={'Phone'} {...formik.getFieldProps('phone')} error={formik.errors.phone} mask={"+1 (999) 999 9999"}/>
            <StyledTextarea placeholder={'Description'} {...formik.getFieldProps('description')} rows="5"/>
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
export type PropsType = {
    onClickEvent?: () => void
}

export type FormValueType = {
    name: string
    email: string
    phone: string
    description: string
}