import React from 'react';
import "./dashBoard.css";
import CardForm from "./CardForm";
import {useCallback} from 'react';
import {useState} from 'react';
//complete
const AddCard = (props)=>{
    const [isForm,setIsForm] = useState(false); 
    const showForm = useCallback(()=>{
        setIsForm(true);
    },[]);

    const hideForm = useCallback(()=>{
        setIsForm(false);
    },[]);

    return (
        <div>
            <div onClick={showForm} className={"add-card-display "+(isForm?"hide":"show")}>+ Add Card</div>
            <CardForm hideForm={hideForm} className={(isForm?"show":"hide")} {...props}/>
        </div>
    );
}

export default AddCard;