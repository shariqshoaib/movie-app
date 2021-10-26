
const FETCH_VIDEOS_REQUEST = 'FETCH_VIDEOS_REQUEST'
const FETCH_VIDEOS_SUCCEEDED = 'FETCH_VIDEOS_SUCCEEDED'
const FETCH_VIDEOS_FAILED = 'FETCH_VIDEOS_FAILED'

export const fetchVideos = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_VIDEOS_REQUEST })
    }
}

export const fetchVideosSuccess = (videos) => {
    return (dispatch) => {
        dispatch({ type: FETCH_VIDEOS_SUCCEEDED, payload: videos })
    }
}

export const fetchVideoFailure = (error) => {
    return (dispatch) => {
        dispatch({ type: FETCH_VIDEOS_FAILED, payload: error })
    }
}