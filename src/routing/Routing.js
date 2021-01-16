import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {ROUTING} from "../shared/constants";
import {ActivatePage, HomePage, LoginPage, RegisterPage, RegisterSuccess} from "../pages";

export const Routing = () => {
    return (
        <Switch>
            <Route exact path={ROUTING.HOME_PAGE} component={HomePage}/>
            <Route path={ROUTING.REGISTER_PAGE} component={RegisterPage}/>
            <Route path={ROUTING.LOGIN_PAGE} component={LoginPage}/>
            <Route path={ROUTING.REGISTER_SUCCESS} component={RegisterSuccess}/>
            <Route path={`${ROUTING.ACTIVATE_PAGE}/:uid/:token`} component={ActivatePage} />
        </Switch>
    );
};
