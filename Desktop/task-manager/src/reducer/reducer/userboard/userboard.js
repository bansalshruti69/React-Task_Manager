import { combineReducers } from 'redux'
import users from "./users"
import userId from "./userId"

const userBoard = combineReducers({
    userId,
    users
})

export default userBoard;