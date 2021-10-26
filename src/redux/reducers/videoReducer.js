
const initialState = {
    data: [],
    loading: false,
    error: false,
}

const videoReducer = ( state=initialState, action) => {
    switch(action.type){
        case 'FETCH_VIDEOS_REQUEST':
            return { ...state, loading: true }

        case 'FETCH_VIDEOS_SUCCEEDED':
            return { loading: false, data: action.payload, error: false }

        case 'FETCH_VIDEOS_FAILED':
            return { loading: false, data: [], error: action.payload }

        default:
            return state;
    }
}

export default videoReducer;