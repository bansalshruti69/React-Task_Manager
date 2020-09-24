import {ADD_CARD, ADD_CARD_LIST, DELETE_CARD, DELETE_CARD_LIST, EDIT_CARD} from "../../actions/dashboard";

export default function cardLists(state = [],action){
    switch(action.type){
        case ADD_CARD:
            const index = state.findIndex(cardList=> cardList.id===action.id);
            return [
                ...state.slice(0,index),
                {
                    ...state[index],
                    cards: [
                        ...state[index].cards,
                        action.obj
                    ],
                    cardId: state[index].cardId + 1
                },
                ...state.slice(index+1)
            ];
        case ADD_CARD_LIST:
            return [
                ...state,
                action.obj
            ];
        case DELETE_CARD:
            const index1 = state.findIndex(cardList=> cardList.id===action.id1);
            return [
                ...state.slice(0,index1),
                {
                    ...state[index1],
                    cards: state[index1].cards.filter(card=>card.id!==action.id2)
                },
                ...state.slice(index1+1)
            ];
        case DELETE_CARD_LIST:
            return state.filter((cardList)=>cardList.id!==action.id);
        case EDIT_CARD:
            const index2 = state.findIndex(cardList=> cardList.id===action.id);
            const index3 = state[index2].cards.findIndex(card=>card.id===action.obj.id);
            return [
                ...state.slice(0,index2),
                {
                    ...state[index2],
                    cards: [
                        ...state[index2].cards.slice(0,index3),
                        action.obj,
                        ...state[index2].cards.slice(index3+1)
                    ]
                },
                ...state.slice(index2+1)
            ];
        default:
            return state;
    }
}