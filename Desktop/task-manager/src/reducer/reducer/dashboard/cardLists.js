import {ADD_CARD, ADD_CARD_LIST, DELETE_CARD, DELETE_CARD_LIST, EDIT_CARD} from "../../actions/dashboard";

export default function cardLists(state = [],action){
    switch(action.type){
        case ADD_CARD:
            const card_list_index = state.findIndex(cardList=> cardList.id===action.id);
            return [
                ...state.slice(0,card_list_index),
                {
                    ...state[card_list_index],
                    cards: [
                        ...state[card_list_index].cards,
                        action.obj
                    ],
                    cardId: state[card_list_index].cardId + 1
                },
                ...state.slice(card_list_index+1)
            ];
        case ADD_CARD_LIST:
            return [
                ...state,
                action.obj
            ];
        case DELETE_CARD:
            const delete_card_list_index = state.findIndex(cardList=> cardList.id===action.id1);
            return [
                ...state.slice(0,delete_card_list_index),
                {
                    ...state[delete_card_list_index],
                    cards: state[delete_card_list_index].cards.filter(card=>card.id!==action.id2)
                },
                ...state.slice(delete_card_list_index+1)
            ];
        case DELETE_CARD_LIST:
            return state.filter((cardList)=>cardList.id!==action.id);
        case EDIT_CARD:
            const edit_card_list_index = state.findIndex(cardList=> cardList.id===action.id);
            const edit_card_index = state[edit_card_list_index].cards.findIndex(card=>card.id===action.obj.id);
            return [
                ...state.slice(0,edit_card_list_index),
                {
                    ...state[edit_card_list_index],
                    cards: [
                        ...state[edit_card_list_index].cards.slice(0,edit_card_index),
                        action.obj,
                        ...state[edit_card_list_index].cards.slice(edit_card_index+1)
                    ]
                },
                ...state.slice(edit_card_list_index+1)
            ];
        default:
            return state;
    }
}