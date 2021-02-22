import {
    ROUTING,
} from "../../shared/constants";

const initialState = {
    path: '',
}

export const redirectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROUTING:
            return {
                ...state,
                path: action.payload,
            }
       default: return state;

    }
}
