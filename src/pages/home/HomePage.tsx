import {Welcome} from "./Sections/Welcome";
import React, {useEffect, useState} from "react";
import {About} from "./Sections/About";
import {Services} from "./Sections/Services";
import {HowWeWork} from "./Sections/HowWeWork";
import {Cases} from "./Sections/Cases";
import {Reviews} from "./Sections/Reviews";
import {
    CasesEntityType,
    ContactsEntityType,
    homepageAPI,
    HomeSectionDescriptionsEntityType,
    HowWeWorkEntityType,
    ReviewsEntityType
} from "../../api/api";
import {LoaderFullscreen} from "../../component/LoaderFullscreen";
import {Contacts} from "./Sections/Contacts";

export const HomePage = () => {

    const [fetching, setFetching] = useState<'loading' | 'done'>('loading')

    const [pageDescriptions, setPageDescriptions] = useState<HomeSectionDescriptionsEntityType>({about: '', services: '', howWeWork: '', contacts: ''})
    const [cases, setCases] = useState<Array<CasesEntityType>>([])
    const [services, setServices] = useState([])
    const [workSteps, setWorkSteps] = useState<Array<HowWeWorkEntityType>>([])
    const [reviews, setReviews] = useState<Array<ReviewsEntityType>>([])
    const [contacts, setContacts] = useState<ContactsEntityType>({email: '', phone: '', facebook: ''})


    useEffect(() => {
        async function fetchData() {

            let sectionDescriptions = await homepageAPI.getSectionDescriptions()
            let cases = await homepageAPI.getCases()
            let services = await homepageAPI.getServices()
            let workSteps = await homepageAPI.getHowWeWork()
            let reviews = await homepageAPI.getReviews()
            let contacts = await homepageAPI.getContacts()

            setPageDescriptions(sectionDescriptions.data)
            setCases(cases.data)
            setServices(services.data)
            setWorkSteps(workSteps.data)
            setReviews(reviews.data)
            setContacts(contacts.data)
        }

        fetchData().then(() => setFetching('done'))
    }, [])

    console.log(contacts)

    return (
        <>
            {fetching === 'loading' && <LoaderFullscreen/>}
            <Welcome/>
            <About description={pageDescriptions?.about}/>
            <Services services={services} description={pageDescriptions.services}/>
            <Cases cases={cases}/>
            <HowWeWork workSteps={workSteps} description={pageDescriptions.howWeWork}/>
            <Reviews reviews={reviews}/>
            <Contacts contacts={contacts} description={pageDescriptions.contacts}/>
        </>
    )
}
