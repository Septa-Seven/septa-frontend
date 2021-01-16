import {makeStyles} from "@material-ui/styles";

export const loginPageStyle = makeStyles({
    container: {
        height: '60vh',
      display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        margin: '0 auto',
        minWidth: 400,
        textAlign: 'center',
    },

    input: {
        width: '100%',
        marginBottom: 20,
    },

    error: {
        marginTop: -10,
        textAlign: 'left',
    },
});
