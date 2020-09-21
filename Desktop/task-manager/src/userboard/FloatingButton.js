import React from 'react';
import "./userBoard.css";
import DownArrow from "./assets/down-arrow.png";

const FloatingButton = ({handleClick,val})=>{
    
    return(
        <div onClick={handleClick} className={"floating-button "+val}><img src={DownArrow} alt="Down Arow"/></div>
    )
}

export default FloatingButton;