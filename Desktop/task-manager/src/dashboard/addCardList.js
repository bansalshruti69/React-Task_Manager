import React from 'react';
import "./dashBoard.css";
import AddCardListForm from "./AddCardListFormContainer"
import {useCallback} from 'react';
import {useState} from 'react';
//complete
const AddCardList = ()=>{
    const [isForm,setIsForm] = useState(false);
    const showForm = useCallback(()=>{
        setIsForm(true);
    },[]);

    const hideForm = useCallback(()=>{
        setIsForm(false);
    },[]);

    return (
        <div className="inline-block">
        <div onClick={showForm} className={"card-list add-card-list "+(isForm?"hide":"show")}>
            <span>+ Add another card list</span>
        </div>
        <AddCardListForm hideForm={hideForm} className={(isForm?"show":"hide")}/>
        </div>
    );
}

export default AddCardList;