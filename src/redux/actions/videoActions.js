
export const setVideos = (videos) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_VIDEOS',
            payload: videos,
        })
    }
}