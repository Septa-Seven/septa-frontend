import React, {useCallback} from 'react';
import Button from "@material-ui/core/Button";
import {useForm} from "react-hook-form";
import {InputText} from "../../../../shared/components/InputText";
import {useDispatch} from "react-redux";
import {postComment} from "../../../../redux/actions/actions";


export const CommentForm = ({articleId}) => {
    const {control, handleSubmit, reset} = useForm();
    const dispatch = useDispatch()
    const onSubmit = useCallback((data) => {
        dispatch(postComment(data, articleId));
        reset();
    }, [articleId, dispatch, reset])

    return (
        <form style={{marginBottom: 30,}} onSubmit={handleSubmit(onSubmit)}>
            <div style={{marginTop: 30, marginBottom: 20, width: '100%'}}>
                <InputText label="Комментарий" variant="outlined" name='body' control={control} multiline={true} rows={4} fullWidth={true}/>
            </div>
            <Button variant="contained" color="primary" type='submit'>
                Оставить комментарий
            </Button>
        </form>
    )
}
