import React, {Fragment} from 'react';

import Box from "@material-ui/core/Box";
import {registerSuccessStyle} from "./RegisterSuccess.style";
import {Typography} from "@material-ui/core";


export const RegisterSuccess = () => {
    const classes = registerSuccessStyle();

    return (
    <Box className={classes.container}>
        <Typography variant='h2' gutterBottom>Регистрация прошла успешно</Typography>
        <Typography variant='h3' gutterBottom>Перейдите на почту для подтвреждения</Typography>
    </Box>
    )
}

