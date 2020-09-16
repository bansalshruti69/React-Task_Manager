import React from 'react';
import "./dashBoard.css";

const CardForm = ({hideForm, ...props})=>{
    const obj = props.card? {...props.card} : {id:null, task:"", status:""};
    const [cardFormValue,setCardFormValue] = React.useState(obj);

    const handleCancel = React.useCallback(()=>{
        hideForm();
        setCardFormValue(obj);
    },[hideForm,obj]);

    const handleSubmit = React.useCallback((event)=>{
        event.preventDefault();
        const tempObj = {...cardFormValue};
        if(obj.id===null){
        tempObj.id = props.cardList.cardId;
        props.addCard(props.cardList.id ,tempObj);
        handleCancel();
        }
        else{
            props.editCard(props.cardList.id,tempObj);
            hideForm();
        }
    },[props,hideForm,cardFormValue,handleCancel,obj]);

    const handleChange = React.useCallback((event)=>{
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