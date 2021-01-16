import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Container from "@material-ui/core/Container";

import {Provider} from 'react-redux';
import {store} from './redux';
import {Routing} from "./routing";
import {Navbar} from "./core/components/Navbar/Navbar";
import './index.css';
import {ReditectHOC} from "./core/components/RedirectHOC";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Container maxWidth="lg">
                    <ReditectHOC />
                </Container>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


