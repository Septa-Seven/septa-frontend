import React from 'react';
import Typography from "@material-ui/core/Typography";


export const Title = ({text, level}) => {
    return (
        <Typography variant={`h${level}`} gutterBottom>
            {text}
        </Typography>
    )
}
