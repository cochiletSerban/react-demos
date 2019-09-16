import { combineReducers } from "redux"
import postReducer from "./postReducer"
import userReducer from './UserReducer'

export default combineReducers({
    posts: postReducer,
    users: userReducer
})