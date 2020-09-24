//action types

export const ADD_CARD_LIST = 'ADD_CARD_LIST';
export const DELETE_CARD_LIST = 'DELETE_CARD_LIST';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const INCREMENT_CARD_LIST_ID = 'INCREMENT_CARD_LIST_ID';


//action creators
export function addCardList(obj){
    return {
        type: ADD_CARD_LIST,
        obj
    }
}

export function deleteCardList(id){
    return {
        type: DELETE_CARD_LIST,
        id
    }
}

export function addCard(id,obj){
    return {
        type: ADD_CARD,
        id,
        obj
    }
}

export function deleteCard(id1,id2){
    return{
        type: DELETE_CARD,
        id1,
        id2
    }
}

export function editCard(id,obj){
    return {
        type: EDIT_CARD,
        id,
        obj
    }
}

export function incrementCardListId(){
    return {
        type: INCREMENT_CARD_LIST_ID
    }
}