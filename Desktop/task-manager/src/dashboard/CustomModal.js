import React from 'react';
import "./dashBoard.css";
import Modal from 'react-modal';
import CardForm from './CardForm';
import {useState, useCallback} from 'react';
import CancelIcon from "./cancel-icon.png"
//complete
const customStyles = {
    content : {
      color                 : 'white',
      backgroundColor       : 'green',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding               : '40px'
    }
};

const CustomModal = ({className, ...props})=>{

    const [user,setUser] = useState(0);

    const userMap = useCallback((cardList,index)=>{
        return(
            <option key={cardList.id} value={index}>
                {cardList.cardListTitle}
            </option>
        )
    },[]); 

    const handleChange = useCallback((event)=>{
        setUser(event.target.value);
    },[]);

    const ModalForm = ()=>{
        return(
            <Modal isOpen={props.modalIsOpen} style={customStyles} onRequestClose={props.hideForm}>
                <div className="modal-title">Add a Card.
                <img src={CancelIcon} alt="Close Modal" className="modal-close-icon" onClick={props.hideForm}/>
                </div>
                <label>Select a user:<br />
                    <select value={user} onChange={handleChange} style={{width:"100%"}}>
                        {props.cardLists.map(userMap)}
                    </select>
                </label>
                <CardForm className={"modal-card-form "+className} {...props} cardList={props.cardLists[user]} />
            </Modal>
        )
    }

    const ModalEmpty = ()=>{
        return(
            <Modal isOpen={props.modalIsOpen} style={customStyles} onRequestClose={props.hideForm}>
                No User Available!
            </Modal>
        )
    }
    return(
        props.cardLists.length? ModalForm() : ModalEmpty()
    )
}

export default CustomModal;