import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";
import {Routing} from "../../../routing";


export const ReditectHOC = () => {
    const history = useHistory();
    const redirect = useSelector(state => state.redirect.path);

    useEffect(() => {
        history.push(redirect);
    }, [redirect])

    return (
        <Routing />
    )

}
