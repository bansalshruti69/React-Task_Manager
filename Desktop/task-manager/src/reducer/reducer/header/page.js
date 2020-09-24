import {DASHBOARD, NAVIGATE_PAGE} from "../../actions/header";

export default function page(state = DASHBOARD, action){
    switch(action.type){
        case NAVIGATE_PAGE:
            return action.page;
        default:
            return state;
    }
}