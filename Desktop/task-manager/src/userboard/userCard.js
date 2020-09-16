import React from 'react';
import "./userBoard.css";
import UserCardDisplay from "./UserCardDisplay.js";
import UserForm from "./UserForm.js";

const UserCard = React.memo((props)=>{
    //console.log("USerCard",props.user);
    const [isForm,setIsForm] = React.useState(false);
    const showForm = React.useCallback(()=>{
        setIsForm(true);
    },[]);

    const hideForm = React.useCallback(()=>{
        setIsForm(false);
    },[]);
    
    return(
        <div className="card">
            <UserCardDisplay showUserForm={showForm} className={(isForm? "hide": "show")} {...props} />
            <UserForm showUserCard={hideForm} className={(isForm? "show":"hide")} {...props}/>
        </div>
    )
});

export default UserCard;