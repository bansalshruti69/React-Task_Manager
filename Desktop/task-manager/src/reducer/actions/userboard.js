//action types

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';
export const INCREMENT_USER_ID = 'INCREMENT_USER_ID';

//action creators

export function addUser(obj){
    return{
        type: ADD_USER,
        obj
    }
}

export function editUser(obj){
    return{
        type: EDIT_USER,
        obj
    }
}

export function deleteUser(id){
    return{
        type: DELETE_USER,
        id
    }
}

export function incrementUserId(){
    return {
        type: INCREMENT_USER_ID
    }
}