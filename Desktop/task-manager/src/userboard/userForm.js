import React from 'react';
import "./userBoard.css";
import {useState, useCallback} from 'react';

const UserForm = ({countries, showUserCard, handleEdit, handleAddUser, ...props})=>{
    const obj = props.user? {...props.user}: {gender:'',id:null, name: '', profile: '', location: '', image:'',country:''};
    const [formUser, setFormUser] = useState(obj);
    const [userId,setUserId] = useState(JSON.parse(localStorage.id) ||  0);

    const handleCancel = useCallback(()=>{
        showUserCard();
        setFormUser(obj);
    },[showUserCard,obj]);

    const handleSubmit = useCallback((event)=>{
        event.preventDefault();
        const val = userId;
        const tempObj = {
            ...formUser
        };
        if(!tempObj.id){
          tempObj.id = val;
          setUserId(val+1);
          localStorage.id = JSON.stringify(val+1);
          handleAddUser(tempObj);
          handleCancel();
        }
        else{
            handleEdit(formUser);
            showUserCard();
        }
    },[handleEdit, showUserCard,handleCancel,formUser,userId, handleAddUser]);

    const handleChange = useCallback((event)=>{
        setFormUser({...formUser, [event.target.name]:event.target.value});
    },[formUser]);

    const mapCountry = useCallback((country)=><option key={country} value={country}>{country}</option>,[]);
    return(
        <form onSubmit={handleSubmit} className={props.className}>
            <div className="user-form-other-info">
            <label>Name: <input name="name" value={formUser.name} onChange={handleChange}/></label>
            <label>Profile: <input name="profile" value={formUser.profile} onChange={handleChange}/></label>
            <label>Location: <input name="location" value={formUser.location} onChange={handleChange}/></label>
            <label>Image: <input name="image" value={formUser.image} onChange={handleChange}/></label>
            <label>Country:
                <select className="user-form-country" name="country" onChange={handleChange} value={formUser.country}>
                    {countries.map(mapCountry)}
                </select>
            </label>
            </div>
            <div className="user-form-gender">
                Gender:<br/>
                <input type="radio" name="gender" value="Male" onChange={handleChange} checked={(formUser.gender==='Male'?true:false)}/>Male
                <input type="radio" name="gender" value="Female" onChange={handleChange} checked={(formUser.gender==='Female'?true:false)}/>Female
            </div>
            <button type='submit' name="action" value="Save">Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default UserForm;