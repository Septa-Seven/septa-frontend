import {makeStyles} from "@material-ui/styles";

export const registerPageStyle = makeStyles({
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
});
