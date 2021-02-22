import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../redux/actions/actions";
import {useForm} from "react-hook-form";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {registerPageStyle} from "./RegisterPage.style";
import {InputText} from "../../shared/components/InputText";

export const RegisterPage = () => {
    const classes = registerPageStyle();

    const {control, handleSubmit, errors} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => dispatch(registerUser(data));
    const errorAuth = useSelector(state => state.auth.isAuthenticated);

    return (
    <Box className={classes.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} >
            <h1>Регистрация</h1>
            <Box>
                <InputText label="Логин" variant="outlined" name='username' className={classes.input} control={control}/>
            </Box>
            <Box>
                <InputText label="Эл. почта" variant="outlined" name='email' className={classes.input} control={control}/>
            </Box>
            <Box>
                <InputText label="Пароль" variant="outlined" name='password' className={classes.input} control={control}/>
            </Box>
            <Button variant="contained" color="primary" size="large" type='submit'>
                Зарегистрироваться
            </Button>
        </form>
    </Box>
    )
}

