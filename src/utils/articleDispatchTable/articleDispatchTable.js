import {Paragraph} from "../../pages/HomePage/components/Article/components/Paragraph";
import React from "react";

const createTextComponent = (text) => {
    return (
        <Paragraph text={text} />
    )
}

export const articleDispatchTable = new Map([
    ['paragraph', createTextComponent]
])
