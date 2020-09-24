import { ADD_USER, DELETE_USER, EDIT_USER } from "../../actions/userboard";

export default function users(state=[],action){
    switch(action.type){
        case ADD_USER:
            return [
                ...state,
                action.obj
            ];
        case DELETE_USER:
            return state.filter(user=>user.id!==action.id);
        case EDIT_USER:
            const user_index = state.findIndex(user=>user.id===action.obj.id);
            return [
                ...state.slice(0,user_index),
                action.obj,
                ...state.slice(user_index+1)
            ]
        default:
            return state;
    }
}