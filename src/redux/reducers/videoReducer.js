
const videoReducer = (state=0, action) => {
    switch(action.type){
        case 'SET_VIDEOS':
            return state = action.payload;
        default:
            return state;
    }
}

export default videoReducer;