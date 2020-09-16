import React from 'react';
import "./dashBoard.css";
import CardForm from "./CardForm.js";

const AddCard = React.memo((props)=>{
    const [isForm,setIsForm] = React.useState(false); 
    function showForm(){
        setIsForm(true);
    }

    function hideForm(){
        setIsForm(false);
    }

    return (
        <div>
            <div onClick={showForm} className={"add-card-display "+(isForm?"hide":"show")}>+ Add Card</div>
            <CardForm hideForm={hideForm} className={(isForm?"show":"hide")} {...props}/>
        </div>
    );
})

export default AddCard;