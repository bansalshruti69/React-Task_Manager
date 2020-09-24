import React from 'react';
import "./userBoard.css";
import UserCardDisplay from "./UserCardDisplay";
import UserForm from "./UserForm/UserForm";
import {useState, useCallback} from 'react';

const UserCard = ({user,countries})=>{
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
            <UserCardDisplay showUserForm={showForm} className={(isForm? "hide": "show")} user={user}/>
            <UserForm showUserCard={hideForm} className={(isForm? "show":"hide")} countries={countries} user={user}/>
        </div>
    )
};

export default UserCard;