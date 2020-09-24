import React from 'react';
import "./userBoard.css";
import {useCallback} from 'react';
import { deleteUser } from '../reducer/actions/userboard';
import { connect } from 'react-redux';

const UserCardDisplay = ({dispatch, user ,showUserForm, className})=>{
    const handleEdit = useCallback(()=>{
        showUserForm();
    },[showUserForm]);

    const handleDeleteConfirm = useCallback(()=>{
        const result = window.confirm("Do you want to delete this user?");
        if(!result)
        return;
        dispatch(deleteUser(user.id));
    },[dispatch,user]);

    function renderUserDetails(){
        return(
            <>
            <img className="user-card-display-image" src={user.image} alt="User-Img"></img>
            <div className="user-card-display-name">{user.name}</div>
            <div className='user-card-display-profile'>{user.profile}</div>
            <div className='user-card-display-location'>{user.location}</div>
            <div className="user-card-display-country">{user.country}</div>
            <div className="user-card-display-gender">Gender: {user.gender}</div>
            </>
        )
    }

    return(
    <div className={className}>
        {renderUserDetails()}
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDeleteConfirm}>Delete</button>
    </div>
    )
}

export default connect()(UserCardDisplay);