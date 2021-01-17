import React, {Fragment, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {loadNews} from "../../redux/actions/actions";
import {Article} from "./components/Article";

export const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadNews());
    }, [])

    return (
        <Fragment>
            <Article />
        </Fragment>
    )
}
