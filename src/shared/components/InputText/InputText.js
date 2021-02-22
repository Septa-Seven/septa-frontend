import {Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import React from "react";


export const InputText = ({label, name, error, className, variant, control, multiline, rows, fullWidth}) => {
    return (
        <Controller
            name={name}
            as={
                <TextField
                    labelWidth={40}
                    label={label}
                    error={error}
                    className={className}
                    variant={variant}
                    multiline={multiline}
                    rows={rows}
                    fullWidth={fullWidth}
                />
            }
            defaultValue={''}
            control={control}
        />
    )
}
