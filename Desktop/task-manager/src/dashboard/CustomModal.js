import React from 'react';
import "./dashBoard.css";
import Modal from 'react-modal';
import CardForm from './CardForm';
import {useState, useCallback} from 'react';
//complete
const CustomModal = (props)=>{

    const [user,setUser] = useState(0);
    const customStyles = {
        content : {
          color                 : 'white',
          backgroundColor       : 'green',
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    };

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

    function ModalForm(){
        return(
            <Modal isOpen={props.modalIsOpen} style={customStyles} onRequestClose={props.hideForm}>
                <div className="modal-title">Add a Card.</div>
                <label>Select a user:<br />
                    <select value={user} onChange={handleChange}>
                        {props.cardLists.map(userMap)}
                    </select>
                </label>
                <CardForm {...props} cardList={props.cardLists[user]} />
            </Modal>
        )
    }

    function ModalEmpty(){
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