import React from 'react';
import "./userBoard.css";
import UserCardDisplay from "./userCardDisplay.js";
import UserForm from "./userForm.js";

function UserCard(props){
    const [isForm,setIsForm] = React.useState(false);
    function showForm(){
        setIsForm(true);
    }

    function hideForm(){
        setIsForm(false);
    }
    return(
        <div className="card">
            <UserCardDisplay showUserForm={showForm} className={(isForm? "hide": "show")} {...props} />
            <UserForm showUserCard={hideForm} className={(isForm? "show":"hide")} {...props}/>
        </div>
    )
}
export default UserCard;