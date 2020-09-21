import React from 'react';
import "./userBoard.css";
import Modal from 'react-modal';
import UserForm from './UserForm.js';

const CustomModal = (props)=>{
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

    return(
        <Modal isOpen={props.modalIsOpen} style={customStyles} onRequestClose={props.showUserCard}>
            <div className="modal-title">Add a new user.</div>
            <UserForm {...props}/>
        </Modal>
    )
}

export default CustomModal;