import React from 'react';
import "./dashBoard.css";
import {useState, useCallback} from 'react';
import {Input} from "baseui/input";
import {connect} from 'react-redux';
import { addCard, editCard } from '../reducer/actions/dashboard';

//complete
let CardForm = ({dispatch, card, className,hideForm,cardList})=>{
    const obj = card? {...card} : {id:null, task:"", status:""};
    const [cardFormValue,setCardFormValue] = useState(obj);

    const handleCancel = useCallback(()=>{
        hideForm();
        setCardFormValue(obj);
    },[hideForm,obj]);

    const handleSubmit = useCallback((event)=>{
        event.preventDefault();
        const tempObj = {...cardFormValue};
        if(obj.id===null){
        tempObj.id = cardList.cardId;
        dispatch(addCard(cardList.id ,tempObj))
        handleCancel();
        }
        else{
            dispatch(editCard(cardList.id,tempObj));
            hideForm();
        }
    },[cardList, dispatch,hideForm,cardFormValue,handleCancel,obj]);

    const handleChange = useCallback((event)=>{
        setCardFormValue({...cardFormValue, [event.target.name]:event.target.value});
    },[cardFormValue]);

    return(
        <div className={"add-card-display card-form "+className}>
            <label>Task:
                <Input type="text" value={cardFormValue.task} name="task" onChange={handleChange} placeholder="Add Task"/>
            </label>
            <label>Due Date:
                <Input type='date' value={cardFormValue.status} name="status" onChange={handleChange}/>
            </label>
            <div className="button-group">
            <button onClick={handleSubmit}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

CardForm = connect()(CardForm);

export default CardForm; 