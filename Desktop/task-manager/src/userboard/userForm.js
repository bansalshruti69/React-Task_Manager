import React from 'react';
import "./userBoard.css";

function UserForm(props){
    const obj = props.user? {...props.user}: {id:null, name: '', profile: '', location: '', image:''};
    const [formUser, setFormUser] = React.useState(obj);
    const [userId,setUserId] = React.useState(JSON.parse(localStorage.id) ||  0);

    function handleCancel(){
        props.showUserCard();
        setFormUser(obj);
    }

    function handleSubmit(event){
        event.preventDefault();
        const val = userId;
        const tempObj = {
            ...formUser
        };
        if(!tempObj.id){
          tempObj.id = val;
          setUserId(val+1);
          localStorage.id = JSON.stringify(val+1);
          props.handleAddUser(tempObj);
          handleCancel();
        }
        else{
            props.handleEdit(formUser);
            props.showUserCard();
        }
    }

    function handleChange(event){
        setFormUser({...formUser, [event.target.name]:event.target.value});
    }

    return(
        <form onSubmit={handleSubmit} className={props.className}>
            <label>Name: <input name="name" value={formUser.name} onChange={handleChange}/></label>
            <label>Profile: <input name="profile" value={formUser.profile} onChange={handleChange}/></label>
            <label>Location: <input name="location" value={formUser.location} onChange={handleChange}/></label>
            <label>Image: <input name="image" value={formUser.image} onChange={handleChange}/></label>
            <button type='submit' name="action" value="Save">Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default UserForm;