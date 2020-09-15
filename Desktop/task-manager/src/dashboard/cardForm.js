import React from 'react';
import "./dashBoard.css";

function CardForm(props){
    const obj = {...props.card} || {id:null, task:"", status:""};
    const [cardFormValue,setCardFormValue] = React.useState(obj);

    function handleCancel(){
        setCardFormValue(obj);
        props.hideForm();
    }

    function handleSubmit(event){
        event.preventDefault();
        const tempObj = {...cardFormValue};
        if(!obj.id){
        tempObj.id = props.cardList.cardId;
        props.addCard(props.cardList.id ,tempObj);
        handleCancel();
        }
        else{
            props.editCard(props.cardList.id,tempObj);
            props.hideForm();
        }
    }

    function handleChange(event){
        setCardFormValue({...cardFormValue, [event.target.name]:event.target.value});
    }

    return(
        <form onSubmit={handleSubmit} className={"add-card-display card-form "+props.className}>
            <label>Task:
                <input type="text" value={cardFormValue.task} name="task" onChange={handleChange}/>
            </label>
            <label>Due Date:
                <input type='date' value={cardFormValue.status} name="status" onChange={handleChange}/>
            </label>
            <button type="submit" >Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default CardForm; 