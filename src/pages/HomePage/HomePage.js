import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadArticles} from "../../redux/actions/actions";
import {Article} from "./components";

export const HomePage = () => {
    const dispatch = useDispatch()
    const articles = useSelector(state => state.article.articles);

    useEffect(() => {
        dispatch(loadArticles());
    }, [loadArticles])

    return (
        <Fragment>
            {articles.map((article) => (
                 <Article article={article} key={article.id} />
                )
            )}
        </Fragment>
    )
}
