import React from 'react';
import Header from '../header/header.js';
import "./userBoard.css";
import AddIcon from "./assets/add-icon.png";

function UserForm(props){
    const obj = {id:'', name: '', profile: '', location: '', image:''}
    const [formUser, setFormUser] = React.useState(obj);
    const [userId,setUserId] = React.useState(JSON.parse(localStorage.id) ||  0);
    function handleCancel(){
        document.getElementById("addUserCardAddIcon").style.display = "";
        document.getElementById("userAddCardForm").style.display = "none";
        setFormUser(obj);
    }

    function handleSubmit(event){
        event.preventDefault();
        const val = userId;
        const tempObj = {
            id: val,
            name: formUser.name,
            profile: formUser.profile,
            location: formUser.location,
            image: formUser.image
        };
        setUserId(val+1);
        localStorage.id = JSON.stringify(val+1);
        props.handleAddUser(tempObj);
        handleCancel();
    }


    return(
        <form onSubmit={handleSubmit} id={props.id} style={{display:"none"}}>
            <label>Name: <input id="user-form-name" value={formUser.name} onChange={(event)=>setFormUser({name:event.target.value})}/></label>
            <label>Profile: <input id="user-form-profile" value={formUser.profile} onChange={(event)=>setFormUser({profile:event.target.value})}/></label>
            <label>Location: <input id="user-form-location" value={formUser.location} onChange={(event)=>setFormUser({location:event.target.value})}/></label>
            <label>Image: <input id="user-form-image" value={formUser.image} onChange={(event)=>setFormUser({image:event.target.value})}/></label>
            <button type='submit' name="action" value="Save">Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    )
}

function UserAddCard(props){
    function handleAddIconClick(){

        document.getElementById("addUserCardAddIcon").style.display = "none";
        document.getElementById("userAddCardForm").style.display = "block";
    }
    return (
        <div className="card">
            <img id="addUserCardAddIcon" src={AddIcon} alt="add-icon" class="user-add-card-add-icon" onClick={handleAddIconClick}/>
            <UserForm id="userAddCardForm" {...props}/>
        </div>
    )
}

function UserCardGroup(){
    const [users,setUsers] = React.useState(JSON.parse(localStorage.users) || []);
    function addUser(obj){
        const tempUsers = users;
        tempUsers.push(obj);
        setUsers(tempUsers);
        localStorage.users = JSON.stringify(tempUsers);
    }
    return(
        <div>
            <UserAddCard handleAddUser={(obj)=>addUser(obj)}/>
        </div>
    )
}

function  UserBoard(props){
    return (
      <div className="userboard">
          <Header {...props}/>
          <UserCardGroup/>
      </div>
    )
}

export default UserBoard;