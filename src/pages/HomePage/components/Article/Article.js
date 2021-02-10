import React, {Fragment, useMemo} from 'react';
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {articleDispatchTable} from "../../../../utils/articleDispatchTable";

export const Article = ({article}) => {
    console.log(article);
    const {id, title} = article;

    // Парсим новость из админки
    const newsElements = useMemo(() => {
        if(article.body) {
            const blocks = article.body.blocks;
            return blocks.map((block, index) => {
                if(index < 3 && block.type !== 'Delimiter') {
                    const createElement = articleDispatchTable.get(block.type);
                    if(createElement) {
                        return createElement(block.data);
                    }
                }
            })
        }
    }, [article])

    return (
        <Fragment>
            <Box>
                <a href={`news/${id}/`}><Typography variant={"h4"}>{title}</Typography></a>
                {newsElements && newsElements.map((item, index) => (<Fragment key={index}>{item}</Fragment>))}
            </Box>
        </Fragment>
    )
}
