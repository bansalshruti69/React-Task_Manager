import React from 'react';
import "./userBoard.css";
import AddIcon from "./assets/add-icon.png";
import UserForm from "./UserForm/UserForm";
import {useState, useCallback} from 'react';

const UserAddCard = ({countries}) => {
    const [isForm,setIsForm] = useState(false);
    const handleAddIconClick = useCallback(()=>{
        setIsForm(true);
    },[]);

    const hideForm = useCallback(()=>{
        setIsForm(false);
    },[]);
    
    return (
        <div className="card">
            <img src={AddIcon} alt="add-icon" className={"user-add-card-add-icon"+(isForm? " hide": " show")} onClick={handleAddIconClick}/>
            <UserForm countries={countries} className={(isForm? "show":"hide")} showUserCard={hideForm}/>
        </div>
    )
}

export default UserAddCard;