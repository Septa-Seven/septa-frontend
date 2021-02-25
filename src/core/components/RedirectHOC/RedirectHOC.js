import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import jwt_decode from "jwt-decode";
import {useHistory} from "react-router";
import {Routing} from "../../../routing";
import {setToken} from "../../../redux/actions/actions";


export const RedirectHOC = () => {
    const history = useHistory();
    const redirect = useSelector(state => state.redirect.path);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch()

    useEffect(() => {
        history.push(redirect);
    }, [history, redirect])

    useEffect(() => {
        if(token) {
            const decodeToken = jwt_decode(token);
            if(Date.now() > decodeToken.exp * 1000) {
                localStorage.setItem('token', '');
                dispatch(setToken(''));
            }
        }
    }, [])

    return (
        <Routing />
    )

}
