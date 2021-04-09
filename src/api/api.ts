import axios from "axios";
import {FormValueType} from "../component/ContactForm";

// Axios instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_CMS_DOMAIN
})

export const homepageAPI = {
    getServices() {
        return instance.get('/services')
    },
    getHowWeWork() {
        return instance.get('/how-we-work-steps')
    },
    getCases() {
        return instance.get('/cases')
    },
    getReviews() {
        return instance.get('/reviews')
    },
    getSectionDescriptions() {
        return instance.get('/home-page-section-descriptions')
    },
    getContacts() {
        return instance.get('/contacts')
    },
    sendEmail(body: FormValueType) {
        return instance.post('/emails', body)
    }
}

// Types
export type ServicesEntityType = {
    id: number
    title: string
    description: string
    icon: {
        url: string
    }
}

export type HowWeWorkEntityType = {
    id: number
    title: string
    description: string
    icon: {
        url: string
    }
}

export type CasesEntityType = {
    id: number
    companyName: string
    companyLogo: {
        url: string
    }
    background: {
        url: string
    }
    improvement_1: string
    improvement_1_description: string
    improvement_2: string
    improvement_2_description: string
}

export type ReviewsEntityType = {
    id: number
    fullName: string
    review: string
    picture: {
        url: string
    }
}

export type HomeSectionDescriptionsEntityType = {
    about: string
    services: string
    howWeWork: string
    contacts: string
}

export type ContactsEntityType = {
    email: string
    phone: string
    facebook: string
}