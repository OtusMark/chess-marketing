import {Welcome} from "./Sections/Welcome";
import React, {useEffect, useState} from "react";
import {About} from "./Sections/About";
import {Services} from "./Sections/Services";
import {HowWeWork} from "./Sections/HowWeWork";
import {Cases} from "./Sections/Cases";
import {Reviews} from "./Sections/Reviews";
import {homepageAPI, HomeSectionDescriptionsEntityType} from "../../api/api";

export const HomePage = () => {

    const [pageDescriptions, setPageDescriptions] = useState<HomeSectionDescriptionsEntityType | null>(null)

    useEffect(() => {
        homepageAPI.getSectionDescriptions()
            .then(res => setPageDescriptions(res.data))
    },[])

    return (
        <>
            <Welcome/>
            <About description={pageDescriptions?.about}/>
            <Services description={pageDescriptions?.services}/>
            <Cases/>
            <HowWeWork description={pageDescriptions?.howWeWork}/>
            <Reviews/>
        </>
    )
}
