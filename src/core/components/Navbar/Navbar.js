import React from 'react';
import {AppBar, Container, Toolbar, List, ListItem, ListItemText} from "@material-ui/core";
import {navLinks} from "../../../shared/constants";
import {navbarStyle} from "./Navbal.style";
import {Link} from "react-router-dom";

export const Navbar = () => {
    const classes = navbarStyle();

    return(
        <AppBar position="static">
            <Toolbar>
                <List component='nav' className={classes.navDisplayFlex}>
                    {navLinks.map(({title, path}) => (
                        <Link to={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    );
}
