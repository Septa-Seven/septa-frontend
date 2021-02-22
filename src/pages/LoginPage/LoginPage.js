import React, {useMemo} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {loginUser} from "../../redux/actions/actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {loginPageStyle} from "./LoginPage.style";
import {InputText} from "../../shared/components/InputText";

export const LoginPage = () => {
    const classes = loginPageStyle();

    const {control, handleSubmit} = useForm();
    const dispatch = useDispatch()
    const onSubmit = (data) => dispatch(loginUser(data))
    const errorAuth = useSelector(state => state.auth.isAuthenticated);

    const errorElement = useMemo(() => {
        if(errorAuth === false) return {'error': true,  'helperText': 'Неверный логин или пароль'}
        return {};
    }, [errorAuth]);

    return (
        <Box className={classes.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form} >
                <h1>Авторизация</h1>
                <Box>
                    <InputText label="Логин" variant="outlined" name='username' className={classes.input} error={errorAuth === false} control={control}/>
                </Box>
                <Box>
                    <InputText label="Пароль" variant="outlined" name='password' className={classes.input} {...errorElement} control={control}/>
                </Box>

                <Button variant="contained" color="primary" size="large" type='submit'>
                    Авторизоваться
                </Button>
            </form>
        </Box>
    )
}
