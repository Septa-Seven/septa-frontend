import React from 'react';
import Paper from "@material-ui/core/Paper";


export const Image = ({src}) => {
    return (
        <Paper elevation={0} >
            <img src={src} />
        </Paper>
    )
}
