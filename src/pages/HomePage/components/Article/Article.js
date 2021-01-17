import React, {Fragment, useEffect, useMemo} from 'react';
import {useSelector} from "react-redux";
import {articleDispatchTable} from "../../../../utils/articleDispatchTable";


export const Article = () => {
    const newsData = useSelector(state => state.news.news);

    const newsElements = useMemo(() => {
        if(newsData.length > 0) {
            return newsData.map((item) => {
                const createElement = articleDispatchTable.get('paragraph');
                return createElement(item.title);
            })
        }
    }, [newsData])

    return (
        <Fragment>
            <h1>Домашняя</h1>
            {newsElements && newsElements.map((item, index) => (<Fragment key={index}>{item}</Fragment>))}
        </Fragment>
    )
}
