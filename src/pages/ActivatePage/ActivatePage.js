import React, {Fragment, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useParams, useHistory} from 'react-router-dom'
import {postToken} from "../../redux/actions/actions";
import {Modal} from "../../core/components/Modal";

export const ActivatePage = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(postToken(params));
        history.push('/')
    }, [dispatch, params])

    return (
        <Fragment>

        </Fragment>
    )
}
