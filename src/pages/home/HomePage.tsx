import {Welcome} from "./Sections/Welcome";
import React from "react";
import {About} from "./Sections/About";
import {Services} from "./Sections/Services";
import {HowWeWork} from "./Sections/HowWeWork";
import {Cases} from "./Sections/Cases";

export const HomePage = () => {
    return (
        <>
            <Welcome/>
            <About/>
            <Services/>
            <Cases/>
            <HowWeWork/>
        </>
    )
}
