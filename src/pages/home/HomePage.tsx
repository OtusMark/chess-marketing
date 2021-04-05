import {Welcome} from "./Sections/Welcome";
import React from "react";
import {About} from "./Sections/About";
import {Services} from "./Sections/Services";

export const HomePage = () => {
    return (
        <>
            <Welcome/>
            <About/>
            <Services/>
        </>
    )
}