import React from 'react';
import "./userBoard.css";
import Modal from "react-modal";
import UserForm from './UserForm';
import CancelIcon from './assets/cancel-icon.png';

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
      padding               : "40px"
    }
};

const CustomModal = ({className, ...props})=>{

    return(
        <Modal isOpen={props.modalIsOpen} style={customStyles} onRequestClose={props.showUserCard}>
            <div className="modal-title">Add a new user.
            <img src={CancelIcon} alt="Close Modal" className="modal-close-icon" onClick={props.showUserCard}/>
            </div>
            <UserForm className={"modal-user-form "+className} {...props}/>
        </Modal>
    )
}

export default CustomModal;