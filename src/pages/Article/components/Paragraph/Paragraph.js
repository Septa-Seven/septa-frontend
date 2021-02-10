import React from 'react';
import Typography from "@material-ui/core/Typography";


export const Paragraph = ({text}) => {
    return (
        <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={{__html: text}} />
    )
}
