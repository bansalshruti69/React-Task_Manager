import React from 'react';
import "./userBoard.css";
import AddIcon from "./assets/add-icon.png";
import UserForm from "./userForm.js"

function UserAddCard(props){
    const [isForm,setIsForm] = React.useState(false);
    function handleAddIconClick(){
        setIsForm(true);
    }

    function hideForm(){
        setIsForm(false);
    }
    
    return (
        <div className="card">
            <img src={AddIcon} alt="add-icon" className={"user-add-card-add-icon"+(isForm? " hide": " show")} onClick={handleAddIconClick}/>
            <UserForm {...props} className={(isForm? "show":"hide")} showUserCard={hideForm}/>
        </div>
    )
}

export default UserAddCard;