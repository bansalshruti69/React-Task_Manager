import React from 'react';
import "./dashBoard.css";
import {useState, useCallback} from 'react';

const CardForm = ({cardList, addCard,editCard, hideForm, ...props})=>{
    const obj = props.card? {...props.card} : {id:null, task:"", status:""};
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
        addCard(cardList.id ,tempObj);
        handleCancel();
        }
        else{
            editCard(cardList.id,tempObj);
            hideForm();
        }
    },[cardList, addCard, editCard,hideForm,cardFormValue,handleCancel,obj]);

    const handleChange = useCallback((event)=>{
        setCardFormValue({...cardFormValue, [event.target.name]:event.target.value});
    },[cardFormValue]);

    return(
        <div className={"add-card-display card-form "+props.className}>
            <label>Task:
                <input type="text" value={cardFormValue.task} name="task" onChange={handleChange}/>
            </label>
            <label>Due Date:
                <input type='date' value={cardFormValue.status} name="status" onChange={handleChange}/>
            </label>
            <button onClick={handleSubmit}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default CardForm; 