import React, {Fragment, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {articleDispatchTable} from "../../utils";
import {loadArticle} from "../../redux/actions/actions";
import {useParams} from "react-router-dom";
import {Comment, CommentForm} from './components';

export const Article = () => {
    const dispatch = useDispatch()
    const {id} = useParams();
    const token = useSelector(state => state.auth.token);

    useEffect(() => {
        dispatch(loadArticle(id));
    }, [dispatch, id])

    const newsData = useSelector(state => state.article.article);

    // Парсим новость из админки
    const newsElements = useMemo(() => {
        if(newsData.body) {
            const blocks = newsData.body.blocks;
            return blocks.map((block) => {
                const createElement = articleDispatchTable.get(block.type);
                if(createElement) {
                    return createElement(block.data);
                }

            })
        }
    }, [newsData.body])

    return (
        <Fragment>
            {newsElements && newsElements.map((item, index) => (<Fragment key={index}>{item}</Fragment>))}
            <h2>Комментарии</h2>
            {newsData.comments && newsData.comments.map(({id, body, user, user_name, created_at}) => (
                <Comment body={body} user={user} date={created_at} key={id} userName={user_name} />
            ))}
            {token && <CommentForm articleId={id}/>}
        </Fragment>
    )
}
