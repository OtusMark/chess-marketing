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
        return instance.post('/clients', body)
    }
}

// Types
export type ServicesEntityT = {
    _id: string
    title: string
    description: string
    icon: {
        url: string
    }
}

export type HowWeWorkEntityT = {
    _id: string
    order: string
    title: string
    description: string
    icon: {
        url: string
    }
}

export type CasesEntityT = {
    _id: string
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

export type ReviewsEntityT = {
    _id: string
    fullName: string
    review: string
    picture: {
        url: string
    }
}

export type HomeSectionDescriptionsEntityT = {
    about: string
    services: string
    howWeWork: string
    contacts: string
}

export type ContactsEntityT = {
    email: string
    phone: string
    facebook: string
}