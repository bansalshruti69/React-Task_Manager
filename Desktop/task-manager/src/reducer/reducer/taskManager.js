import { combineReducers } from 'redux'
import dashBoard from './dashboard/dashboard';
import userBoard from './userboard/userboard'
import page from './header/page';

const taskManager = combineReducers({
    dashBoard,
    userBoard,
    page
})

export default taskManager;