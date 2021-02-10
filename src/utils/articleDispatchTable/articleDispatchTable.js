import {Paragraph, Title, Image, List, Delimiter} from "../../pages/Article/components";
import React from "react";

const createTextComponent = ({text}) => {
    return (
        <Paragraph text={text} />
    )
}

const createTitleComponent = ({text, level}) => {
    return (
        <Title text={text} level={level}/>
    )
}

const createImageComponent = ({file}) => {
    return (
        <Image src={file.url} />
    )
}

const createListComponent = (list) => {
    return (
        <List list={list} />
    )
}

const createDelimiterComponent = () => {
    return (
        <Delimiter />
    )
}

export const articleDispatchTable = new Map([
    ['paragraph', createTextComponent],
    ['Header', createTitleComponent],
    ['Image', createImageComponent],
    ['List', createListComponent],
    ['Delimiter', createDelimiterComponent],
])
