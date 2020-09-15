import React from 'react';
import "./dashBoard.css";
import AddCardListForm from "./addCardListForm.js"

function AddCardList(props){
    const [isForm,setIsForm] = React.useState(false);
    function showForm(){
        setIsForm(true);
    }
    function hideForm(){
        setIsForm(false);
    }

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