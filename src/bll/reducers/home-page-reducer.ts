import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    CasesEntityT, ContactsEntityT,
    homepageAPI,
    HomeSectionDescriptionsEntityT,
    HowWeWorkEntityT, ReviewsEntityT,
    ServicesEntityT
} from "../../api/api";
import { setIsFetching } from "./app-reducer";

export const fetchHomepageData = createAsyncThunk('homepage-descriptions/fetchData', async (param, {dispatch}) => {
    dispatch(setIsFetching({isFetching: true}))
    let sectionDescriptions = await homepageAPI.getSectionDescriptions()
    let cases = await homepageAPI.getCases()
    let services = await homepageAPI.getServices()
    let workSteps = await homepageAPI.getHowWeWork()
    let reviews = await homepageAPI.getReviews()
    let contacts = await homepageAPI.getContacts()
    dispatch(setIsFetching({isFetching: false}))
    return {
        sectionDescriptions: sectionDescriptions.data,
        cases: cases.data,
        services: services.data,
        workSteps: workSteps.data,
        reviews: reviews.data,
        contacts: contacts.data
    }
})

const initialState: StateType = {
    pageDescriptions: {} as HomeSectionDescriptionsEntityT,
    cases: [] as Array<CasesEntityT>,
    services: [] as Array<ServicesEntityT>,
    workSteps: [] as Array<HowWeWorkEntityT>,
    reviews: [] as Array<ReviewsEntityT>,
    contacts: {} as ContactsEntityT,
}

const slice = createSlice(
    {
        name: 'homepageInfo',
        initialState: initialState,
        reducers: {},
        extraReducers: (builder => {
            builder.addCase(fetchHomepageData.fulfilled, (state, action) => {
                state.pageDescriptions = action.payload.sectionDescriptions
                state.cases = action.payload.cases
                state.services = action.payload.services
                state.workSteps = action.payload.workSteps
                state.reviews = action.payload.reviews
                state.contacts = action.payload.contacts
            })
        })
    }
)

export const homePageInfoReducer = slice.reducer

// Types
type StateType = {
    pageDescriptions: HomeSectionDescriptionsEntityT
    cases: Array<CasesEntityT>
    services: Array<ServicesEntityT>
    workSteps: Array<HowWeWorkEntityT>
    reviews: Array<ReviewsEntityT>
    contacts: ContactsEntityT
}