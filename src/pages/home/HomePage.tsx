import {Welcome} from "./Sections/Welcome";
import React, {useEffect} from "react";
import {About} from "./Sections/About";
import {Services} from "./Sections/Services";
import {HowWeWork} from "./Sections/HowWeWork";
import {Cases} from "./Sections/Cases";
import {Reviews} from "./Sections/Reviews";
import {
    CasesEntityT,
    ContactsEntityT,
    HomeSectionDescriptionsEntityT,
    HowWeWorkEntityT,
    ReviewsEntityT,
    ServicesEntityT
} from "../../api/api";
import {LoaderFullscreen} from "../../component/LoaderFullscreen";
import {Contacts} from "./Sections/Contacts";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateT} from "../../bll/store";
import {fetchHomepageData} from "../../bll/reducers/home-page-reducer";

export const HomePage = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHomepageData())
    }, [])

    const isFetching = useSelector<AppRootStateT, boolean>(state => state.app.isFetching)
    const pageDescriptions = useSelector<AppRootStateT, HomeSectionDescriptionsEntityT>(state => state.homePageInfo.pageDescriptions)
    const cases = useSelector<AppRootStateT, Array<CasesEntityT>>(state => state.homePageInfo.cases)
    const services = useSelector<AppRootStateT, Array<ServicesEntityT>>(state => state.homePageInfo.services)
    const workSteps = useSelector<AppRootStateT, Array<HowWeWorkEntityT>>(state => state.homePageInfo.workSteps)
    const reviews = useSelector<AppRootStateT, Array<ReviewsEntityT>>(state => state.homePageInfo.reviews)
    const contacts = useSelector<AppRootStateT, ContactsEntityT>(state => state.homePageInfo.contacts)

    return (
        <>
            {isFetching && <LoaderFullscreen/>}

            <Welcome/>

            <About description={pageDescriptions.about}/>
            <Services services={services} description={pageDescriptions.services}/>
            <Cases cases={cases}/>
            <HowWeWork workSteps={workSteps} description={pageDescriptions.howWeWork}/>
            <Reviews reviews={reviews}/>
            <Contacts contacts={contacts} description={pageDescriptions.contacts}/>
        </>
    )
}
