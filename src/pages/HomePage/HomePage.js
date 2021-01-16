import React, {Fragment, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {loadNews} from "../../redux/actions/actions";

export const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadNews());
    }, [])

    return (
        <Fragment>
            <h1>Домашняя</h1>
        </Fragment>
    )
}
