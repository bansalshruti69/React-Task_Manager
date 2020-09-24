import { combineReducers } from 'redux'
import cardLists from "./cardLists";
import cardListId from "./cardListId";

const dashBoard = combineReducers({
    cardLists,
    cardListId
})

export default dashBoard;