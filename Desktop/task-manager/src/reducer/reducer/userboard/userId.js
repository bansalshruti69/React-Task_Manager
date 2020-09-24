import { INCREMENT_USER_ID } from "../../actions/userboard";


export default function userId(state=0,action){
    switch(action.type){
        case INCREMENT_USER_ID:
            return state+1;
        default:
            return state;
    }
}