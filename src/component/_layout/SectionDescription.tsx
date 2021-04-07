import {DefaultB2Reg} from "../_typography/DefaultB2Reg";
import React from "react";

export const SectionDescription: React.FC<PropsType> = (props) => {

    const {
        description
    } = props

    return (
        <DefaultB2Reg>
            {description}
        </DefaultB2Reg>
    )
}

// Types
type PropsType = {
    description?: string
}