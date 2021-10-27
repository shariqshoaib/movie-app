import { videoActions } from "./reducers";

export const fetchVideos = () => {
    return (dispatch) => {
        dispatch({ type: videoActions.FETCH_VIDEOS_REQUEST });
    }
}

export const fetchVideosSuccess = (videos) => {
    return (dispatch) => {
        dispatch({ 
            type: videoActions.FETCH_VIDEOS_SUCCEEDED, 
            payload: videos 
        });
    }
}

export const fetchVideoFailure = (error) => {
    return (dispatch) => {
        dispatch({ 
            type: videoActions.fetchVideosSuccess, 
            payload: error 
        });
    }
}

export const actionCreators = { fetchVideos, fetchVideosSuccess, fetchVideoFailure }
