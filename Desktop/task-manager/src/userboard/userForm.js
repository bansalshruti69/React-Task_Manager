import React from 'react';
import "./userBoard.css";
import {useState, useCallback} from 'react';
import { Input } from "baseui/input";
import { RadioGroup, Radio, ALIGN } from "baseui/radio";
import { Select } from "baseui/select";

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
            <label>Name: <Input name="name" value={formUser.name} onChange={handleChange}/></label>
            <label>Profile: <Input name="profile" value={formUser.profile} onChange={handleChange}/></label>
            <label>Location: <Input name="location" value={formUser.location} onChange={handleChange}/></label>
            <label>Image: <Input name="image" value={formUser.image} onChange={handleChange}/></label>
            <Select placeholder="Select a Country"/>
            <label>Country:
                <select className="user-form-country" name="country" onChange={handleChange} value={formUser.country}>
                    {countries.map(mapCountry)}
                </select>
            </label>
            </div>
            <div className="user-form-gender">
                Gender:<br />
                <RadioGroup
                    value={formUser.gender}
                    onChange={handleChange}
                    name="gender"
                    align={ALIGN.horizontal}>
                    <Radio value="Male">Male</Radio>

                    <Radio value="Female">Female</Radio>
                </RadioGroup>
            </div>
            <div class="button-group">
            <button type='submit' name="action" value="Save">Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default UserForm;