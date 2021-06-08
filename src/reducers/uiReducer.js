import { types } from "../types/types";

const inititalState = {
    loading: false,
    msgError: ''
}
export const uiReducer = (state = inititalState, action ) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            };

        case types.uiRemoveError:
            return {
                ...state,
                msgError: ''
            };

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            };
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}