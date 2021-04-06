import axios from "axios";

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
    }

}