import {INCREMENT_CARD_LIST_ID} from "../../actions/dashboard";

export default function cardListId(state = 0,action){
    switch(action.type){
        case INCREMENT_CARD_LIST_ID:
            return state+1;
        default:
            return state;
    }
}