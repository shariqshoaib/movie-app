import { combineReducers } from 'redux'
import videoReducer from './videoReducer'

const allReducers = combineReducers({ videos: videoReducer })

export default allReducers;