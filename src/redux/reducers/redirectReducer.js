import {
    ROUTING,
} from "../../shared/constants";

const initialState = {
    redirect: '',
}

export const redirectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROUTING:
            return {
                ...state,
                redirect: action.payload,
            }
       default: return state;

    }
}
