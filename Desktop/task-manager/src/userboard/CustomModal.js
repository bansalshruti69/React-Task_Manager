import React from 'react';
import "./userBoard.css";
import Modal from "react-modal";
import UserForm from './UserForm/UserForm';
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

const CustomModal = ({modalIsOpen,showUserCard,countries})=>{

    return(
        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={showUserCard}>
            <div className="modal-title">Add a new user.
            <img src={CancelIcon} alt="Close Modal" className="modal-close-icon" onClick={showUserCard}/>
            </div>
            <UserForm className={"modal-user-form "} showUserCard={showUserCard} countries={countries}/>
        </Modal>
    )
}

export default CustomModal;