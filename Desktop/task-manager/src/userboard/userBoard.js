import React from 'react';
import Header from '../header/header.js';
import "./userBoard.css";
import AddIcon from "./assets/add-icon.png";

function UserDisplayForm(props){
    const [formValue, setFormValue] = React.useState({...props.user});
    function handleCancel(){
        document.getElementById("card"+props.user.id).style.display = "";
        document.getElementById("form" + props.user.id).style.display = "none";
        setFormValue({...props.user});
    }

    function handleEdit(event){
        event.preventDefault();
        props.handleEdit(formValue);
        document.getElementById("card"+props.user.id).style.display = "";
        document.getElementById("form" + props.user.id).style.display = "none";
    }

    function handleChange(event){
        setFormValue({...formValue, [event.target.name]:event.target.value});
    }

    return(
        <form onSubmit={handleEdit} id={"form" + props.user.id} style={{display:"none"}}>
            <label>Name: <input name="name" onChange={handleChange} value={formValue.name}/></label>
            <label>Profile: <input  name="profile" onChange={handleChange} value={formValue.profile}/></label>
            <label>Location: <input name="location" onChange={handleChange} value={formValue.location}/></label>
            <label>Image: <input name="image" onChange={handleChange} value={formValue.image}/></label>
            <button type='submit' name="action" value="Save">Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    )
}

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
            ...formUser
        };
        tempObj.id = val;
        setUserId(val+1);
        localStorage.id = JSON.stringify(val+1);
        props.handleAddUser(tempObj);
        handleCancel();
    }

    function handleChange(event){
        setFormUser({...formUser, [event.target.name]:event.target.value});
    }

    return(
        <form onSubmit={handleSubmit} id={props.id} style={{display:"none"}}>
            <label>Name: <input name="name" value={formUser.name} onChange={handleChange}/></label>
            <label>Profile: <input name="profile" value={formUser.profile} onChange={handleChange}/></label>
            <label>Location: <input name="location" value={formUser.location} onChange={handleChange}/></label>
            <label>Image: <input name="image" value={formUser.image} onChange={handleChange}/></label>
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
            <img id="addUserCardAddIcon" src={AddIcon} alt="add-icon" className="user-add-card-add-icon" onClick={handleAddIconClick}/>
            <UserForm id="userAddCardForm" {...props}/>
        </div>
    )
}

function UserCardDisplay(props){
    function handleEdit(){
        document.getElementById("card"+props.user.id).style.display = "none";
        document.getElementById("form" + props.user.id).style.display = "block";
    }

    function handleDelete(){
        props.handleDelete(props.user.id);
    }

    return(
    <div id={"card" + props.user.id}>
        <img className="user-card-display-image" src={props.user.image} alt="User-Img"></img>
        <div className="user-card-display-name">{props.user.name}</div>
        <div className='user-card-display-profile'>{props.user.profile}</div>
        <div className='user-card-display-location'>{props.user.location}</div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
    )
}

function UserCard(props){
    return(
        <div className="card">
            <UserCardDisplay {...props}/>
            <UserDisplayForm {...props}/>
        </div>
    )
}

function UserCardGroup(){
    const [users,setUsers] = React.useState(JSON.parse(localStorage.users) || []);
    function addUser(obj){
        const tempUsers = [...users,obj];
        setUsers(tempUsers);
        localStorage.users = JSON.stringify(tempUsers);
    }

    function deleteUser(val){
        const tempUsers = users.filter(function deleteFilter(user) {
            return user.id!==val}
        );
        setUsers(tempUsers);
        localStorage.users = JSON.stringify(tempUsers);
    }

    function editUser(obj){
        const tempUsers = [...users];
        const index = tempUsers.findIndex(function editFind(user){
            return user.id===obj.id}
        );
        tempUsers[index] = obj;
        setUsers(tempUsers);
        localStorage.users = JSON.stringify(tempUsers);
    }

    return(
        <div class="user-card-group-container">
            <div className="user-card-group">
                {users.map(function userMap(x) {
                    return (<UserCard key ={x.id} user={x} handleDelete={deleteUser} handleEdit={editUser}/>);
                }
                )}
                <UserAddCard handleAddUser={addUser}/>
            </div>
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