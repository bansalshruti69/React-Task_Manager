import React from 'react';
import "./userBoard.css";
import UserCardDisplay from "./UserCardDisplay.js";
import UserForm from "./UserForm.js";
import {useState, useCallback} from 'react';

const UserCard = (props)=>{
    //console.log("USerCard",props.user);
    const [isForm,setIsForm] = useState(false);
    const showForm = useCallback(()=>{
        setIsForm(true);
    },[]);

    const hideForm = useCallback(()=>{
        setIsForm(false);
    },[]);

    return(
        <div className="card">
            <UserCardDisplay showUserForm={showForm} className={(isForm? "hide": "show")} {...props} />
            <UserForm showUserCard={hideForm} className={(isForm? "show":"hide")} {...props}/>
        </div>
    )
};

export default UserCard;