import { combineReducers } from "redux";

export const videoActions = {
    FETCH_VIDEOS_REQUEST: 'FETCH_VIDEOS_REQUEST',
    FETCH_VIDEOS_SUCCEEDED: 'FETCH_VIDEOS_SUCCEEDED',
    FETCH_VIDEOS_FAILED: 'FETCH_VIDEOS_FAILED',
}

const initialState = {
    data: [],
    isLoading: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case videoActions.FETCH_VIDEOS_REQUEST:
            return { ...state, isLoading: true }

        case videoActions.FETCH_VIDEOS_SUCCEEDED:
            return { isLoading: false, data: action.payload, error: false }

        case videoActions.FETCH_VIDEOS_FAILED:
            return { isLoading: false, data: [], error: action.payload }

        default: return state;
    }
}

export const allReducers = combineReducers({ videos: reducer });