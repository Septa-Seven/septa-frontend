import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export const Comment = ({user, body, date, userName}) => {
    return (
        <Paper style={{ padding: "40px 20px" }}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>{userName}</h4>
                    <p style={{ textAlign: "left" }}>
                        {body}{" "}
                    </p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                        опубликовано {date} назад
                    </p>
                </Grid>
            </Grid>
        </Paper>
    )
}
