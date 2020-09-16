import React from 'react';
import "./dashBoard.css";
import AddCardListForm from "./AddCardListForm.js"

const AddCardList = (props)=>{
    const [isForm,setIsForm] = React.useState(false);
    const showForm = React.useCallback(()=>{
        setIsForm(true);
    },[]);
    
    const hideForm = React.useCallback(()=>{
        setIsForm(false);
    },[]);

    return (
        <div className="inline-block">
        <div onClick={showForm} className={"card-list add-card-list "+(isForm?"hide":"show")}>
            <span>+ Add another card list</span>
        </div>
        <AddCardListForm hideForm={hideForm} className={(isForm?"show":"hide")} {...props}/>
        </div>
    );
}

export default AddCardList;