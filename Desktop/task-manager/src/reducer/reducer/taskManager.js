import { combineReducers } from 'redux'
import dashBoard from './dashboard/dashboard';
import page from './header/page';

const taskManager = combineReducers({
    dashBoard,
    page
})

export default taskManager;