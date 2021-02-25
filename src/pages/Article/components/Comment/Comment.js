import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export const Comment = ({user, body, date, userName}) => {
    const parseDate = new Date(date);
    const formatter = new Intl.DateTimeFormat("ru");
    const showDate = formatter.format(parseDate);
    const time = `${parseDate.getHours()}:${parseDate.getMinutes()}`

    return (
        <Paper style={{ padding: "20px 10px", marginBottom: '20px'}}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>{userName}</h4>
                    <p style={{ textAlign: "left" }}>
                        {body}{" "}
                    </p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                        опубликовано {showDate} {time}
                    </p>
                </Grid>
            </Grid>
        </Paper>
    )
}
